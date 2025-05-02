import { createFileRoute } from '@tanstack/react-router'
import { Input } from './-components/Input'

export const Route = createFileRoute('/text-input/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="pt-[112px] w-[340px] mx-auto flex flex-col gap-12">
      <Input
        labelText="Email"
        disabled={false}
        subText={'This is a hint text.'}
        placeholder="name@email.com"
        id="email"
        iconLeading={<i className="ri-mail-line"></i>}
        iconTrailing={<i className="ri-question-line"></i>}
        type="email"
        name="email"
      />
      <Input
        labelText="Email"
        disabled={false}
        subText={'This is a hint text.'}
        placeholder="name@email.com"
        id="email"
        iconTrailing={<i className="ri-question-line"></i>}
        type="email"
        name="email"
      />
      <Input
        labelText="Email"
        disabled={false}
        subText={'This is a hint text.'}
        placeholder="name@email.com"
        id="email"
        iconTrailing={<i className="ri-question-line"></i>}
        type="email"
        name="email"
      />
      <Input
        labelText="Email"
        disabled={false}
        subText={'This is an error message'}
        placeholder="name@email.com"
        error={true}
        id="email"
        iconTrailing={<i className="ri-question-line"></i>}
        type="email"
        name="email"
      />
    </div>
  )
}
