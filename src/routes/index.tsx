import { createFileRoute } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import '../App.css'
import NasaTable from '../components/NasaTable'

const queryClient = new QueryClient()

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <NasaTable />
      </div>
    </QueryClientProvider>
  )
}