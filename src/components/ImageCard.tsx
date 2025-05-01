import type { ImageData } from "../types";
import { Link } from "@tanstack/react-router";

function ImageCard({ imageData }: { imageData: ImageData }) {

    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-8">
          {/* Image Section */}
          <div className="flex justify-center">
            <img 
              src={imageData.url} 
              alt={imageData.title}
              className="max-h-[600px] rounded-lg shadow-lg"
            />
          </div>
  
          {/* Details Section */}
          <div className="space-y-4 text-left">
            <h1 className="text-3xl font-bold text-center">{imageData.title}</h1>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <p className="text-gray-600 mb-4">
                <strong>Date:</strong> {new Date(imageData.date).toLocaleDateString()}
              </p>
              
              <div className="prose max-w-none">
                <h2 className="text-xl font-semibold mb-2">Explanation</h2>
                <p className="text-gray-700 leading-relaxed">
                  {imageData.explanation}
                </p>
              </div>
            </div>
  
            <div className="text-center">
              <Link 
                to="/"
                className="inline-block bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                Back to Gallery
              </Link>
            </div>
          </div>
        </div>
      </div>
    )}

    export default ImageCard