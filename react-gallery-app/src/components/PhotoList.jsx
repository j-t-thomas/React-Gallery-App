import React from "react";
import Photo from "./Photo";

// Functional component representing a list of photos
const PhotoList = ({ photos, title }) => {
    // Render the list of photos and a title
    return (
        <div className="photo-container">
            {/* Display the title above the list of photos */}
            <h2>{title}</h2>

            {/* Unordered list to contain individual Photo components */}
            <ul>
                {/* Map through the 'photos' array and render a Photo component for each photo */}
                {photos.map(photo => (
                    <Photo key={photo.id} photo={photo} title={photo.title} />
                ))}
            </ul>
        </div>
    );
};

// Export the PhotoList component for use in other parts of the application
export default PhotoList;
