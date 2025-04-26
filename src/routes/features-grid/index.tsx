import { createFileRoute } from '@tanstack/react-router'
import { FeatureList } from './-components/FeatureList'

export const Route = createFileRoute('/features-grid/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 bg-white py-12 px-3 gap-y-8">
      <div className="col-span-4">
        <div>
          <p className="text-indigo-700 text-base font-semibold">
            Premium abstract images
          </p>
          <h2 className="font-semibold text-3xl lg:text-5xl">
            Easy Access to top quality images
          </h2>
        </div>
        <p className="text-neutral-600 text-lg lg:text-xl font-normal">
          In a world where storytelling constantly evolves, we lead with
          groundbreaking images designed for your presentation excellence.
        </p>
      </div>
      <div className="col-span-4 md:col-span-3 justify-center items-center">
        <FeatureList />
      </div>
    </div>
  )
}
