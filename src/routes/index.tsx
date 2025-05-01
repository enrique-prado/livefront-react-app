import { createFileRoute } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import '../App.css'

const queryClient = new QueryClient()

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <DataTable />
      </div>
    </QueryClientProvider>
  )
}

function DataTable() {
  const { isPending, error, data } = useQuery({
    queryKey: ['data'], 
    queryFn:fetchData
  })

  if (isPending) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Image Title</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item: { date: string; title: string; url: string }) => (
          <tr key={item.url}>
            <td>{item.date}</td>
            <td>{item.title}</td>
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