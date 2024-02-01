import Photo from "./Photo.jsx";
import { useParams } from "react-router";


// Functional component representing a list of photos
const PhotoList = (props) => {
      const listOfPhotos = props.data
    
      let { query } = useParams()
    // Render the list of photos and a title
    return (
        <div className="photo-container">
            {/* Display the title above the list of photos */}
            <h2>Results</h2>

            {/* Unordered list to contain individual Photo components */}
            <ul>
                {/* Map through the 'photos' array and render a Photo component for each photo */}
                {listOfPhotos.map(photo => (
                    <Photo key={photo.id} photo={photo} />
                ))}
            </ul>
        </div>
    );
};

// Export the PhotoList component for use in other parts of the application
export default PhotoList;
