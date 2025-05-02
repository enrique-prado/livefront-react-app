import { createFileRoute } from '@tanstack/react-router'
import ImageCard from '../components/ImageCard'
import { API_KEY } from "../types";



async function fetchImageDetails(date: string) {
  console.log('fetchImageDetails', date)
  // Validate the date format
  const datePattern = /^\d{4}-\d{2}-\d{2}$/;
  if (!datePattern.test(date)) {
    throw new Error('Invalid date format. Expected format: YYYY-MM-DD')
  }

    if (!date) {
      throw new Error('Date is required')
    }

  const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}&thumbs=true`)
  if (!response.ok) {
    throw new Error('A Network error occurred while fetching image details')
  }
  return response.json()
}

export const Route = createFileRoute('/photoDetails/$date')({
  component: ImageDetails,
  loader: async ({ params:{date} }) => fetchImageDetails(date),

})

function ImageDetails() {
  const imageData = Route.useLoaderData();
  return <ImageCard imageData={imageData} />
}
