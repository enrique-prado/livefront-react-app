import { useQuery } from '@tanstack/react-query'
import { Link } from '@tanstack/react-router'

function NasaTable() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['data'],
    queryFn: fetchData,
  })

  if (isLoading) return <p>Loading...</p>
  if (error instanceof Error) return <p>Error: {error.message}</p>

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Image Title</th>
          <th className="border px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item: { date: string; title: string; url: string }) => (
          <tr key={item.url}>
            <td>{item.date}</td>
            <td>{item.title}</td>
            <td className="border px-4 py-2">
							<div className="relative">
								<span className="invisible group-hover:visible">
                  <Link to="/details" className="px-2 hover:bg-gray-200" >
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

async function fetchData() {
  const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=15')
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

export default NasaTable