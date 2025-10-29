import Booking from "../models/Booking.js";
import Car from "../models/Car.js";

// --- Helper Function: Check Car Availability ---
const checkAvailability = async (carId, pickupDate, returnDate) => {
  // Ensure dates are Date objects for reliable MongoDB query execution
  const newPickupDate = new Date(pickupDate);
  const newReturnDate = new Date(returnDate);

  const bookings = await Booking.find({
    car: carId,
    // Only consider bookings that would make the car unavailable
    status: { $in: ["pending", "confirmed"] },

    // Standard interval overlap condition:
    // 1. Existing booking starts before the new booking ends
    pickupDate: { $lt: newReturnDate },
    // 2. Existing booking ends after the new booking starts
    returnDate: { $gt: newPickupDate },
  });

  // Car is available if NO overlapping, active bookings are found
  return bookings.length === 0;
};

// ----------------------------------------------------------------------

// --- API: Check Availability of Cars for Location/Date ---
export const checkAvailabilityOfCar = async (req, res) => {
  try {
    const { location, pickupDate, returnDate } = req.body;

    // Convert dates once at the API boundary
    const newPickupDate = new Date(pickupDate);
    const newReturnDate = new Date(returnDate);

    // 1. Find all cars in the location that are generally available
    const cars = await Car.find({ location, isAvailable: true });

    // 2. Check each car's booking status concurrently
    const availableCarsPromises = cars.map(async (car) => {
      const isAvailable = await checkAvailability(
        car._id,
        newPickupDate,
        newReturnDate
      );
      // Use .toObject() for safer spread operation when returning Mongoose documents
      return { ...car.toObject(), isAvailable };
    });

    let availableCars = await Promise.all(availableCarsPromises);

    // 3. Filter the final list to include only truly available cars
    availableCars = availableCars.filter((car) => car.isAvailable);

    res.json({ success: true, availableCars });
  } catch (error) {
    console.error("Error in checkAvailabilityOfCar:", error.message);
    res.json({
      success: false,
      message: "Server error while checking availability.",
    });
  }
};

// ----------------------------------------------------------------------

// --- API: Create Booking ---
export const createBooking = async (req, res) => {
  try {
    const { _id: userId } = req.user;
    const { car: carId, pickupDate, returnDate } = req.body;

    // 1. Check final availability immediately before booking creation
    const isAvailable = await checkAvailability(carId, pickupDate, returnDate);
    if (!isAvailable) {
      return res.json({
        success: false,
        message: "Car is not available for the selected dates.",
      });
    }

    const carData = await Car.findById(carId);
    if (!carData) {
      return res.json({ success: false, message: "Car not found." });
    }

    // 2. Price Calculation
    const picked = new Date(pickupDate);
    const returned = new Date(returnDate);

    const diffTime = Math.abs(returned.getTime() - picked.getTime());
    const noOfDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // Ensure minimum 1 day charge (standard rental business logic)
    const finalNoOfDays = Math.max(1, noOfDays);

    const price = carData.pricePerDay * finalNoOfDays;

    // 3. Create Booking
    await Booking.create({
      car: carId,
      owner: carData.owner,
      user: userId,
      pickupDate,
      returnDate,
      price,
    });

    res.json({ success: true, message: "Booking created successfully." });
  } catch (error) {
    console.error("Error in createBooking:", error.message);
    res.json({
      success: false,
      message: "Server error while creating booking.",
    });
  }
};

// ----------------------------------------------------------------------

// --- API: List User Bookings ---
export const getUserBookings = async (req, res) => {
  try {
    const { _id } = req.user;
    const bookings = await Booking.find({ user: _id })
      .populate("car")
      .sort({ createdAt: -1 });

    res.json({ success: true, bookings });
  } catch (error) {
    console.error("Error in getUserBookings:", error.message);
    res.json({
      success: false,
      message: "Server error while fetching user bookings.",
    });
  }
};

// ----------------------------------------------------------------------

// --- API: Get Owner Bookings ---
export const getOwnerBookings = async (req, res) => {
  try {
    if (req.user.role !== "owner") {
      return res
        .status(403)
        .json({ success: false, message: "Unauthorized: Must be an owner." });
    }
    const bookings = await Booking.find({ owner: req.user._id })
      .populate("car user")
      .select("-user.password") // Never send back user passwords
      .sort({ createdAt: -1 });

    res.json({ success: true, bookings });
  } catch (error) {
    console.error("Error in getOwnerBookings:", error.message);
    res.json({
      success: false,
      message: "Server error while fetching owner bookings.",
    });
  }
};

// ----------------------------------------------------------------------

// --- API: Change Booking Status ---
export const changeBookingStatus = async (req, res) => {
  try {
    const { _id: ownerId } = req.user;
    const { bookingId, status } = req.body;

    const booking = await Booking.findById(bookingId);

    if (!booking) {
      return res
        .status(404)
        .json({ success: false, message: "Booking not found." });
    }

    // Security Check: Only the car owner can change the status
    if (booking.owner.toString() !== ownerId.toString()) {
      return res
        .status(403)
        .json({ success: false, message: "Unauthorized: Not the car owner." });
    }

    booking.status = status;
    await booking.save();
    res.json({
      success: true,
      message: "Booking status updated successfully.",
    });
  } catch (error) {
    console.error("Error in changeBookingStatus:", error.message);
    res.json({
      success: false,
      message: "Server error while updating booking status.",
    });
  }
};
