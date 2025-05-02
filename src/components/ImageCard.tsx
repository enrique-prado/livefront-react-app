import type { ImageData } from "../types";
import { Link } from "@tanstack/react-router";

function ImageCard({ imageData }: { imageData: ImageData }) {

    return (
      <div className="flex-container">

          {/* Image Section */}
            <img 
              src={imageData.media_type ==='image' ? imageData.url : imageData.thumbnail_url} 
              alt={imageData.title}
              className="big-image rounded-lg shadow-lg"
            />
  
          {/* Details Section */}
          <div>
            <h1>{imageData.title}</h1>
            
            <div className="rounded-lg">
              <p >
                <strong>Date:</strong> {new Date(imageData.date).toLocaleDateString()}
              </p>
              
              <div className="prose">
                <h2>Explanation</h2>
                <p className="leading-relaxed">
                  {imageData.explanation}
                </p>
              </div>
            </div>
  
            <div>
              <Link 
                to="/"
                className="link-button-lg"
              >
                Back to Gallery
              </Link>
            </div>
          </div>

      </div>
    )}

    export default ImageCard