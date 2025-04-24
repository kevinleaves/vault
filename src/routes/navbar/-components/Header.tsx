import Navbar from './Navbar'
import { Button } from '@/routes/button'

export default function Header() {
  return (
    <header className="flex grow pt-4 px-4 items-center">
      <img src="/abstractly.svg" alt="logo" className="h-8 w-[163px]" />
      <Navbar />
      <Button
        variant="tertiary"
        size="large"
        ariaLabel="Hello"
        icon={<i className="ri-menu-line"></i>}
        className="lg:invisible"
      ></Button>
    </header>
  )
}
