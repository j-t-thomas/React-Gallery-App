import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation, useNavigate } from "react-router";
import axios from 'axios';
import apiKey from "./config";
import "./index.css";
import Nav from './components/Nav';
import Search from './components/Search'
import PhotoList from "./components/PhotoList";

function App() {

    // State variables to manage the query and photo data
    const [query, setQuery] = useState("cats");
    const [photos, setPhotos] = useState([]);
    
    const location = useLocation()
    const key = apiKey
    const navigate = useNavigate()
    
    // useEffect to fetch data when the component mounts or when the URL changes
    useEffect(() => {
      let path = location.pathname.slice(1)
      console.log(path)
      if (path === "cats" || path === "dogs" || path === "computers") {
        fetchData(path)
      }
    }, [location]
    )

    function fetchData(query) {
      axios
        .get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
        .then((response) => {
          setPhotos(response.data.photos.photo)
        })
        .catch(
          (error) => {
            console.log("Error fetching and parsing data", error)
          }, [query] 
        )
    }

    // Handler function to update the query state when the search input changes
    const handleQueryChange = (searchText) => {
      setQuery(searchText)
      fetchData(searchText)
      navigate(`/search/${searchText}`)
    };

    return (
        <div className="container">
            {/* Search component for user input */}
            <Search changeQuery={handleQueryChange} />

            {/* Navigation component for default topics */}
            <Nav />

            {/* React Router Routes for different endpoints */}
            <Routes>
                {/* Redirect to 'cats' when visiting the home route */}
                <Route path= "/" element={<Navigate to = "cats" />} />

                {/* Route for '/cats' that renders the PhotoList component with 'cats' as the topic */}
                <Route path= "/cats" element={<PhotoList data = {photos} />} />

                {/* Route for '/dogs' that renders the PhotoList component with 'photos' as the topic */}
                <Route path= "/dogs" element={<PhotoList data = {photos} />} />

                {/* Route for '/computers' that renders the PhotoList component with 'photos' as the topic */}
                <Route path= "/computers" element={<PhotoList data = {photos} />} />

                {/* Route for '/search/:query' that renders the PhotoList component with 'photos' as the data */}
                <Route path= "/search/:query" element={<PhotoList data = {photos} />} />
            </Routes>
        </div>
    )
}

export default App;
