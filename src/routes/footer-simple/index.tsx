import { createFileRoute } from '@tanstack/react-router'
import { buttonVariants } from '../button'
import { cn } from '@/lib/utils'

export const Route = createFileRoute('/footer-simple/')({
  component: RouteComponent,
})

const links = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About us', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const icons = [
  {
    className: 'ri-youtube-line',
    href: 'https://youtube.com',
    ariaLabel: 'Visit our YouTube channel',
  },
  {
    className: 'ri-instagram-line',
    href: 'https://instagram.com',
    ariaLabel: 'Follow us on Instagram',
  },
  {
    className: 'ri-facebook-box-line',
    href: 'https://facebook.com',
    ariaLabel: 'Like us on Facebook',
  },
  {
    className: 'ri-github-line',
    href: 'https://github.com',
    ariaLabel: 'Star us on GitHub',
  },
  {
    className: 'ri-twitter-x-line',
    href: 'https://x.com',
    ariaLabel: 'Follow us on Twitter',
  },
]

const linkVariant = buttonVariants({ variant: 'link_gray', size: 'medium' })
function RouteComponent() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <footer className="flex flex-col flex-wrap py-24 my-auto items-center">
        <ul className="flex flex-wrap gap-4 mb-8">
          {links.map(({ label, href }) => (
            <li>
              <a
                className={cn(linkVariant, 'px-0 py-0')}
                href={href}
                target="_blank"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <ul className="inline-flex flex-wrap gap-6 h-6 md:w-[390px] justify-center mb-4 w-full items-center">
          {icons.map(({ className, href, ariaLabel }) => (
            <li className="">
              <a href={href} aria-label={ariaLabel} className="block h-full">
                <i
                  className={cn(className, 'text-[24px] text-neutral-400')}
                ></i>
              </a>
            </li>
          ))}
          <p className="text-sm text-neutral-900">
            &copy; {new Date().getFullYear()} Abstractly, Inc. All rights
            reserved.
          </p>
        </ul>
      </footer>
    </div>
  )
}
