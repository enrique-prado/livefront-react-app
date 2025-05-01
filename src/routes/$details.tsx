import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$details')({
  component: Details,
})

function Details() {
  return <div>Hello "/details"!</div>
}
