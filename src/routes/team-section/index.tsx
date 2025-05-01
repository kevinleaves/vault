import { createFileRoute } from '@tanstack/react-router'
import TeamMemberList from './-components/TeamList'

export const Route = createFileRoute('/team-section/')({
  component: RouteComponent,
})

const teamMembers = [
  {
    name: 'Joe Jackson',
    role: 'Founder & CEO',
    description:
      'Joe leads with a strategic vision for innovation and growth. With a passion for combining artistry with technology, he drives our mission to deliver cutting-edge solutions.',
    img: '/marketing/joe.jpg',
  },
  {
    name: 'Ash Karter',
    role: 'Founder & CFO',
    description:
      'Ash brings financial acumen and a keen eye for detail to our operations. Her leadership ensures sustainable growth and operational excellence.',
    img: '/marketing/ash.png',
  },
  {
    name: 'Farias Amed',
    role: 'Front End AI Engineer',
    description:
      'Farias is at the forefront of AI-driven design, developing interfaces that blend intuitive usability with advanced functionality.',
    img: '/marketing/farias.png',
  },
  {
    name: 'Sarah Haust',
    role: 'Dev Ops',
    description:
      'Sarah orchestrates our development pipelines with precision, ensuring seamless deployment cycles and system reliability.',
    img: '/marketing/s.png',
  },
]

function RouteComponent() {
  return (
    <section className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-y-12 gap-x-8 py-12 px-4 lg:gap-y-16 md:py-16 lg:py-24 lg:px-14">
      <div className="col-span-4 md:col-span-6 lg:col-span-12 justify-self-center text-center">
        <div className="text-base text-indigo-700 font-semibold mb-3">Team</div>
        <h2 className="text-3xl md:text-5xl text-neutral-900 font-semibold mb-4">
          Meet our Team
        </h2>
        <p className="text-xl text-neutral-600">
          From skilled designers to tech-savvy developers, each member brings a
          unique perspective and expertise to the table.
        </p>
      </div>
      <TeamMemberList list={teamMembers} />
    </section>
  )
}
