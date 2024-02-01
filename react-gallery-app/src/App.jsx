import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import axios from 'axios';
import apiKey from "./config";
import "./index.css";
import Nav from './components/Nav';
import Search from './components/Search'
import PhotoList from "./components/PhotoList";
import { BrowserRouter } from "react-router-dom"

function App() {
    const navigate = useNavigate()

    const searchText = useRef

    // State variables to manage the query and photo data
    const [query, setQuery] = useState("cats");
    const [photos, setPhotos] = useState([]);

    // URL for Flickr API with the initial query and API key
    const [url, setUrl] = useState(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)

    // useEffect to fetch data when the component mounts or when the URL changes
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch data from Flickr API using Axios
                const response = await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
                
                // Update the state with the fetched photos
                setPhotos(response.data.photos.photo)
            } 
            catch (error) {
                console.error('Error fetching data', error)
            }
        }
        
        // Call the fetchData function
        fetchData();
    }, [url])

    // Handler function to update the query state when the search input changes
    const handleQueryChange = (searchText) => {
      setQuery(searchText)
    };

    return (
        <div>
            {/* Search component for user input */}
            <Search />

            {/* Navigation component for default topics */}
            <Nav />

            {/* React Router Routes for different endpoints */}
            <Routes>
                {/* Redirect to 'cats' when visiting the home route */}
                <Route path= "/" element={<Navigate to = "cats" />} />

                {/* Route for '/cats' that renders the PhotoList component with 'cats' as the topic */}
                <Route path= "/cats" element={<PhotoList photos = {photos} title = 'cats' />} />

                {/* Route for '/dogs' that renders the PhotoList component with 'photos' as the topic */}
                <Route path= "/dogs" element={<PhotoList photos = {photos} title = 'dogs' />} />

                {/* Route for '/computers' that renders the PhotoList component with 'photos' as the topic */}
                <Route path= "/computers" element={<PhotoList photos = {photos} title = 'computers'/>} />

                {/* Route for '/search/:query' that renders the PhotoList component with 'photos' as the data */}
                <Route path= "/search/:query" element={<PhotoList photos = {photos} title = {`Search Results for ${query}`}/>} />
            </Routes>
        </div>
    )
}

export default App;
