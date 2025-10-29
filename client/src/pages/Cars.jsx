import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CarCard from "../components/CarCard";
import { useSearchParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";
import { motion } from "motion/react";
const Cars = () => {
  // Getting search params from URL
  const [searchParams] = useSearchParams();
  const pickupLocation = searchParams.get("pickupLocation");
  const pickupDate = searchParams.get("pickupDate");
  const returnDate = searchParams.get("returnDate");

  const { cars, axios } = useAppContext();
  const [input, setInput] = useState("");

  const isSearchData = pickupLocation && pickupDate && returnDate;

  // State for the list filtered by location/date (the base list for text search)
  const [baseCars, setBaseCars] = useState([]);

  // State for the list filtered by user text input (what is rendered)
  const [filteredCars, setFilteredCars] = useState([]);

  // State for UX feedback
  const [isLoading, setIsLoading] = useState(true);
  const [hasNoResults, setHasNoResults] = useState(false);

  // --- Filtering Logic (Applied to baseCars) ---
  const applyFilter = () => {
    // The source of the cars for text filtering is always the location-filtered list (baseCars)
    const sourceCars = baseCars;

    if (input === "") {
      setFilteredCars(sourceCars);
      return;
    }

    const filtered = sourceCars.slice().filter((car) => {
      return (
        car.brand.toLowerCase().includes(input.toLowerCase()) ||
        car.model.toLowerCase().includes(input.toLowerCase()) ||
        car.category.toLowerCase().includes(input.toLowerCase()) ||
        // Corrected typo
        car.transmission.toLowerCase().includes(input.toLowerCase())
      );
    });
    setFilteredCars(filtered);
  };

  // --- API Call Logic (Applies Location/Date Filter) ---
  const searchCarAvailability = async () => {
    setIsLoading(true);
    setHasNoResults(false);
    try {
      // ⭐️ CRITICAL FIX: Standardize dates to YYYY-MM-DD format before sending to API.
      // This prevents timezone/format issues that cause the backend date query to fail.
      const formattedPickupDate = pickupDate
        ? new Date(pickupDate).toISOString().split("T")[0]
        : null;
      const formattedReturnDate = returnDate
        ? new Date(returnDate).toISOString().split("T")[0]
        : null;

      const { data } = await axios.post("/api/bookings/check-availability", {
        location: pickupLocation,
        pickupDate: formattedPickupDate, // Using standardized format
        returnDate: formattedReturnDate, // Using standardized format
      });

      if (data.success) {
        const availableCars = data.availableCars || [];

        setFilteredCars(availableCars);
        setBaseCars(availableCars);

        if (availableCars.length === 0) {
          setHasNoResults(true);
          toast(`No cars available for ${pickupLocation}.`);
        }
      }
    } catch (error) {
      console.error("Error checking car availability:", error);
      toast.error("Something went wrong while fetching cars");
      setFilteredCars([]);
      setBaseCars([]);
      setHasNoResults(true); // Treat API error as no results for UX
    } finally {
      setIsLoading(false);
    }
  };

  // 1. Primary Effect: Initialization
  useEffect(() => {
    if (isSearchData) {
      searchCarAvailability();
    } else if (cars.length > 0) {
      setBaseCars(cars);
      setFilteredCars(cars);
      setIsLoading(false);
      setHasNoResults(false);
    } else {
      setIsLoading(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cars, isSearchData]);

  // 2. Secondary Effect: Text Filtering
  useEffect(() => {
    if (!isLoading) {
      applyFilter();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input, baseCars, isLoading]);

  // --- Conditional Rendering Logic ---
  const renderCarList = () => {
    if (isLoading) {
      return (
        <p className="text-center py-10 text-xl text-primary">
          Loading available cars...
        </p>
      );
    }

    // Check for no results from the initial search OR if the text filter yielded no matches
    if (
      hasNoResults ||
      (baseCars.length > 0 && filteredCars.length === 0 && input !== "")
    ) {
      const locationText = isSearchData ? ` in ${pickupLocation}` : "";
      return (
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold text-gray-700">
            No Cars Found! 😔
          </h2>
          <p className="text-gray-500 mt-2">
            We couldn't find any cars matching your criteria{locationText}.
            Please try adjusting your search or clearing the text filter.
          </p>
        </div>
      );
    }

    // Render the list of cars
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 xl:px-20 max-w-7xl mx-auto">
        {filteredCars.map((car, index) => (
          <div key={index}>
            <CarCard car={car} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center py-20 bg-light md:px-4"
      >
        <Title
          title="Available Cars"
          subTitle="Browse our selection of premium vehicles available for your next adventure"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex items-center bg-white px-4 mt-6 max-w-140 w-full h-12 rounded-full shadow"
        >
          <img
            src={assets.search_icon}
            alt="Search"
            className="w-4.5 h-4.5 mr-2"
          />
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Search by make, model, or features"
            className="w-full h-full outline-none text-gray-500"
          />
          <img
            src={assets.filter_icon}
            alt="Filter"
            className="w-4.5 h-4.5 mr-2"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="px-6 md:px-16 lg:px-24 xl:px-32 mt-10"
      >
        <p className="text-gray-500 xl:px-20 max-w-7xl mx-auto">
          Showing {filteredCars.length} Cars
          {isSearchData ? ` For ${pickupLocation}` : " Available"}
        </p>

        {renderCarList()}
      </motion.div>
    </div>
  );
};

export default Cars;
