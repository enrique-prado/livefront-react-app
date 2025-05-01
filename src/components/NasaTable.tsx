import { useQuery } from '@tanstack/react-query'
import { Link } from '@tanstack/react-router'

const API_KEY = 'MetHYfQ8KJ7rodhMY82Kd320QG7mmer4L8Q5L0xC'

function NasaTable() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['data'],
    queryFn: fetchImagesData,
  })

  if (isLoading) return <p>Loading...</p>
  if (error instanceof Error) return <p>Error: {error.message}</p>

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Image Title</th>
          <th className="border px-4">Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item: { date: string; title: string; url: string }) => (
          <tr key={item.url}>
            <td>{item.date}</td>
            <td>{item.title}</td>
            <td className="border px-4">
							<div className="relative">
								<span className="invisible group-hover:visible">
                  <Link to='/photoDetails/$date' params={{ date: item.date }} className="px-2 hover:bg-gray-200" >
                    Details
                  </Link>
								</span>
							</div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

async function fetchImagesData() {
  const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=30`)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

export default NasaTable