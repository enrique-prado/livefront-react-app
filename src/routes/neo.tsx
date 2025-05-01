import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/neo')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/neo"!</div>
}
