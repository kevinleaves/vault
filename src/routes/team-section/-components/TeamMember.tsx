export interface TeamMemberProps {
  name: string
  role: string
  description: string
  img: string
}

export default function TeamMember({
  name,
  role,
  description,
  img,
}: TeamMemberProps) {
  return (
    <li className="col-span-4 md:col-span-3">
      {/* <li className=""> */}
      <img
        src={img}
        alt="Team Member"
        className="object-cover object-top w-full lg:w-auto mb-6 h-[296px] aspect-square"
      />
      <p className="text-xl text-neutral-900 font-semibold mb-1">{name}</p>
      <p className="text-lg text-indigo-700 font-medium mb-4">{role}</p>
      <p className="text-base text-neutral-600">{description}</p>
    </li>
  )
}
