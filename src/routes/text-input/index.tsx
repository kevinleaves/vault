import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/text-input/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/text-input/"!</div>
}
