import React from "react";

// Functional component representing an individual photo
const Photo = ({ photo }) => {
    return (
        // List item containing an image
        <li>
    
            

            {/* Image element with source (src) dynamically generated based on the photo object */}
            <img
                alt={photo.title} src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} />
        </li>
    );
};

// Export the Photo component for use in other parts of the application
export default Photo;