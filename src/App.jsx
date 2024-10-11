import React, { useState, useEffect } from 'react';
import './index.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [recipeLoading, setRecipeLoading] = useState(false);

  // Simulate a data fetch
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 5 seconds for example
    return () => clearTimeout(timer);
  }, []);

  // Function to handle input change and make an API call to search endpoint
  const handleSearch = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Only search when there is a query string
    if (query.length > 0) {
      setLoading(true);
      try {
        const response = await axios.get(`http://127.0.0.1:5000/search?q=${query}`);
        setSearchResults(response.data.results);
      } catch (error) {
        console.error('Error fetching search results:', error);
        setSearchResults([]); // Clear results on error
      } finally {
        setLoading(false);
      }
    } else {
      setSearchResults([]); // Clear results when the search query is empty
    }
  };


   // Function to fetch recipe with image based on ID
   const fetchRecipeWithImage = async (id) => {
    setRecipeLoading(true); // Set recipe loading to true
    try {
      const response = await axios.get(`http://127.0.0.1:5000/recipe_with_image/${id}`);
      setSelectedRecipe(response.data); // Store the selected recipe with image
    } catch (error) {
      console.error('Error fetching recipe details:', error);
    } finally {
      setRecipeLoading(false); // Set recipe loading to false
    }
  };

  // // Filter out fields with value 0
  // const filteredTags = (recipe) => {
  //   return Object.entries(recipe).filter(([key, value]) => value !== 0 && typeof value === 'number');
  // };

  console.log(selectedRecipe)

  console.log(searchResults);

  return (
    <div className="h-screen flex flex-col">
      {/* Top Black Section */}
      <div className="h-1/4 bg-gradient-to-r from-slate-900 to-slate-700 text-center flex flex-col items-center justify-center">
        <div className="text-4xl font-extrabold text-yellow-700 mb-8">
          EpiRecipeSearch
        </div>


        {/* Logo in the top-left corner */}
        <div className="absolute top-1 left-4">
          <img src="/logo.png" alt="Logo" className="h-44 w-auto" />
        </div>


        {/* Search Bar and Button */}
        <div className="flex relative">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search for recipes..."
            className="p-4 rounded-l-md border border-gray-300 focus:outline-none"
          />
          <button className="bg-yellow-600 text-white px-8 py-2 rounded-r-md transition duration-300 hover:bg-yellow-600">
            Search
          </button>


          {/* Dropdown to display search results */}
{searchQuery.length > 0 && searchResults.length > 0 && (
  <ul className="absolute top-full left-0 bg-white w-full shadow-lg z-10 max-h-60 overflow-y-auto">
    {searchResults.map((result) => (
      <li
        key={result.id}
        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
        onClick={() => {
          fetchRecipeWithImage(result.id); // Fetch recipe with image on click
          setSearchQuery(''); // Clear the search query to hide the dropdown
        }}
      >
        {result.title}
      </li>
    ))}
  </ul>
)}


          
        </div>
      </div>


      {/* Bottom Gray Section with two verticals */}
      <div className="flex-1 bg-gradient-to-r from-blue-300 to-yellow-300 text-center flex items-center justify-center">
        {recipeLoading ? (
          <Skeleton /> // Show Skeleton while the recipe is being fetched
        ) : selectedRecipe ? (
          <div className="flex space-x-20 ">
            {/* Left section for image */}
            <div className="flex-1 flex items-center justify-center ">
              {selectedRecipe.image_url && (
                <img
                  src={selectedRecipe.image_url}
                  alt={selectedRecipe.title}
                  className="h-80 w-80 rounded-xl shadow-md" // Soft sides and shadow for image
                />
              )}
            </div>

            {/* Right section for recipe details */}
            <div className="flex-1 flex flex-col justify-center text-left p-2 size-80 rounded-xl bg-gradient-to-r from-yellow-100 to-blue-300 shadow-md">
              <h2 className="text-2xl font-bold mb-4">{selectedRecipe.title}</h2>
              <p className="text-lg">Calories: {selectedRecipe.calories}</p>
              <p className="text-lg">Fat: {selectedRecipe.fat}g</p>
              <p className="text-lg">Protein: {selectedRecipe.protein}g</p>
              <p className="text-lg">Sodium: {selectedRecipe.sodium}mg</p>


              {/* Rating with Stars */}
        <div className="flex items-center">
          <p className="mr-2">Rating: {selectedRecipe.rating}</p>
          <div className="flex">
            {/* Map over 5 stars and conditionally render filled or empty stars */}
            {Array.from({ length: 5 }, (_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                className={`${
                  selectedRecipe.rating >= index + 1 ? 'text-yellow-500' : 'text-gray-500'
                }`}
              />
            ))}
          </div>
        </div>


              {/* <h3 className="text-xl mt-4">Tags:</h3> */}
              {/* <ul>
                {filteredTags(selectedRecipe).map(([key, value]) => (
                  <li key={key} className="text-md">
                    {key.replace(/_/g, ' ')}: {value}
                  </li>
                ))}
              </ul> */}
            </div>
          </div>
        ) : (
          <div className="text-2xl font-bold font-sans">
            <p>Welcome to EpiRecipeSearch!</p>
            <p>This is a recipe search application where you can find information</p>
            <p>about any recipe you are interested in.</p>
            <br />
            <p>Simply enter any keyword or spelling in the search bar</p>
            <p>at the top to discover the recipe you want........</p>
            <br />
            <img src="/anim.gif" alt="Logo" className="ml-64 h-32 w-auto" />
          </div>
        )}
      </div>
    </div>
  );
}

function Skeleton() {
  return (
    <div className="w-full max-w-md">
      <div className="animate-pulse">
        {/* Skeleton block 1 with text */}
        <p className="text-orange-800 mb-2">Loading Recipe...</p>
        <div className="h-6 bg-yellow-500 rounded mb-4"></div>

        {/* Skeleton block 2 with text */}
        <p className="text-orange-800 mb-2">Loading Description...</p>
        <div className="h-6 bg-yellow-600 rounded mb-4"></div>

        {/* Skeleton block 3 with text */}
        <p className="text-orange-800 mb-2">Loading Additional Info...</p>
        <div className="h-6 bg-yellow-700 rounded mb-4"></div>
      </div>
    </div>
  );
}
