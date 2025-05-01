import TeamMember from './TeamMember'
import type { TeamMemberProps } from './TeamMember'

export interface TeamMemberListProps {
  list: Array<TeamMemberProps>
}

export default function TeamMemberList({ list }: TeamMemberListProps) {
  return (
    <ul className="contents gap-y-12">
      {list.map(({ name, role, img, description }) => {
        return (
          <TeamMember
            name={name}
            role={role}
            img={img}
            description={description}
          />
        )
      })}
    </ul>
  )
}
