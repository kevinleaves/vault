import { Button, buttonVariants } from '@/routes/button'

export default function NavbarContent() {
  const linkVariant = buttonVariants({ variant: 'link_gray', size: 'medium' })
  return (
    <nav className="flex flex-col lg:flex-row lg:justify-between">
      <a className={linkVariant} href="#">
        Home
      </a>
      <a className={linkVariant} href="#">
        Features
      </a>
      <a className={linkVariant} href="#">
        Pricing
      </a>
      <a className={linkVariant} href="#">
        About Us
      </a>
      <a className={linkVariant} href="#">
        Contact
      </a>
      <div className="flex gap-4">
        <Button variant="secondary" size="large" ariaLabel="Hello">
          <span>Learn More</span>
        </Button>
        <Button variant="primary" size="large" ariaLabel="Hello">
          <span>Try it out</span>
        </Button>
      </div>
    </nav>
  )
}
