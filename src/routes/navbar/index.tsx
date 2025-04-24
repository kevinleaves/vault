import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Button, buttonVariants } from '../button'
import { cn } from '@/lib/utils'

export const Route = createFileRoute('/navbar/')({
  component: RouteComponent,
})

function RouteComponent() {
  const linkVariant = buttonVariants({ variant: 'link_gray', size: 'medium' })
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="h-full flex">
      <header className="flex grow pt-4 px-4 items-center justify-between h-[84px] gap-24">
        <img src="/abstractly.svg" alt="logo" className="h-8" />
        <nav className="hidden lg:flex lg:flex-row lg:justify-between lg:items-center lg:grow">
          <div className="flex flex-col lg:flex-row lg:gap-8">
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
          </div>
          <div className="flex gap-4">
            <Button
              variant="secondary"
              size="large"
              ariaLabel="Hello"
              className="text-neutral-900"
            >
              <span>Learn More</span>
            </Button>
            <Button variant="primary" size="large" ariaLabel="Hello">
              <span>See Pricing</span>
            </Button>
          </div>
        </nav>
        <Button
          variant="tertiary"
          size="large"
          ariaLabel="Hello"
          icon={<i className="ri-menu-line"></i>}
          className="lg:hidden text-neutral-600 bg-transparent"
          aria-label="open mobile menu"
          onClick={() => setIsMobileMenuOpen(true)}
        ></Button>
      </header>

      <nav
        className={cn(
          'lg:hidden pt-8 pb-4 px-4 w-[96vw] h-full flex flex-col gap-8 bg-white fixed top-0 left-0 z-50 transition-all duration-300',
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <div className="flex justify-between items-center">
          <img src="/abstractly.svg" alt="logo" className="h-8" />
          <Button
            variant="tertiary"
            size="medium"
            ariaLabel="Hello"
            icon={<i className="ri-close-line" />}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-neutral-600 bg-transparent"
          ></Button>
        </div>
        <div className="flex flex-col grow lg:flex-row gap-2 lg:gap-8">
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
        </div>
        <div className="flex flex-col gap-4 ">
          <Button
            variant="secondary"
            size="large"
            ariaLabel="Hello"
            className="justify-center"
          >
            Learn More
          </Button>
          <Button
            variant="primary"
            size="large"
            ariaLabel="Hello"
            className="justify-center"
          >
            Try it out
          </Button>
        </div>
      </nav>
      <div className="credits" data-gfe-screenshot-exclude="true">
        A challenge by
        <a
          href="https://www.greatfrontend.com/projects?ref=challenges"
          target="_blank"
        >
          GreatFrontEnd Projects
        </a>
        . Built by
        <a
          href="https://www.greatfrontend.com/projects/u/kevinleaves"
          target="_blank"
        >
          Kevin Le
        </a>
        .
      </div>
    </div>
  )
}
