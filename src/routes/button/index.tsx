import { createFileRoute } from '@tanstack/react-router'
import { cva } from 'class-variance-authority'

export const Route = createFileRoute('/button/')({
  component: RouteComponent,
})

interface Props {
  children?: React.ReactNode
  variant:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'link_color'
    | 'link_gray'
    | 'destructive'
  size: 'medium' | 'large' | 'xl' | '2xl'
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
  ariaLabel: string
  iconPosition?: 'left' | 'right' | 'both'
  icon: React.ReactNode
}

const button = cva('shadow-lg inline-flex  rounded', {
  variants: {
    variant: {
      primary:
        'bg-indigo-700 text-white  hover:bg-indigo-800 focus:shadow-[#444CE7] disabled:bg-neutral-100 disabled:text-neutral-400',
      secondary: 'bg-gray-500 text-white',
      tertiary: 'bg-white text-indigo-700 border border-gray-500',
      link_color: 'text-blue-500 hover:underline',
      link_gray: 'text-gray-500 hover:underline',
      destructive: 'bg-red-500 text-white',
    },
    size: {
      medium: 'py-2.5 px-3.5 text-sm gap-x-1',
      large: 'py-2.5 px-4 gap-x-1.5 text-base',
      xl: 'py-3 px-5 gap-x-1.5 text-base',
      '2xl': 'py-4 px-6 gap-x-2.5 text-lg',
    },
    state: {
      normal: '',
      hover: '',
      focus: '',
      disabled: '',
    },
    icons: {
      left: '',
      right: '',
      both: '',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
    state: 'normal',
  },
})
function Button({
  children,
  variant,
  size,
  onClick,
  disabled = false,
  ariaLabel,
  icon,
  iconPosition = 'left',
}: Props) {
  return (
    <button
      className={button({ variant, size })}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {(iconPosition === 'left' || iconPosition === 'both') && icon && (
        <span className="">{icon}</span>
      )}
      {children}
      {(iconPosition === 'right' || iconPosition === 'both') && icon && (
        <span className="">{icon}</span>
      )}
    </button>
  )
}

function RouteComponent() {
  return (
    <div>
      <h1 className="text-5xl text-center font-semibold pt-20">
        Hello world! Write your content here.
      </h1>
      <div className="">
        <div>
          <Button
            variant="primary"
            size="medium"
            onClick={(e) => {
              console.log(e.currentTarget.value)
            }}
            icon={<i className="ri-star-line"></i>}
            iconPosition="both"
            ariaLabel="Medium primary button"
          >
            <span>medium primary</span>
          </Button>
          <Button
            variant="primary"
            size="large"
            onClick={(e) => {
              console.log(e.currentTarget.value)
            }}
            icon={<i className="ri-star-line"></i>}
            iconPosition="both"
            ariaLabel="Large primary button"
          >
            <span>large primary</span>
          </Button>
          <Button
            variant="primary"
            size="xl"
            onClick={(e) => {
              console.log(e.currentTarget.value)
            }}
            icon={<i className="ri-star-line"></i>}
            iconPosition="both"
            ariaLabel="XL primary button"
          >
            <span>xl primary</span>
          </Button>
          <Button
            variant="primary"
            size="2xl"
            onClick={(e) => {
              console.log(e.currentTarget.value)
            }}
            icon={<i className="ri-star-line"></i>}
            iconPosition="both"
            ariaLabel="2XL primary button"
          >
            <span>2xl primary</span>
          </Button>
          <Button
            variant="primary"
            size="medium"
            icon={<i className="ri-star-line"></i>}
            ariaLabel="medium primary button icon only"
          ></Button>
          <Button
            variant="primary"
            size="large"
            icon={<i className="ri-star-line"></i>}
            ariaLabel="large primary button icon only"
          ></Button>
          <Button
            variant="primary"
            size="xl"
            icon={<i className="ri-star-line"></i>}
            ariaLabel="xl primary button icon only"
          ></Button>
          <Button
            variant="primary"
            size="2xl"
            icon={<i className="ri-star-line"></i>}
            ariaLabel="2xl primary button icon only"
          ></Button>
        </div>
        <div>
          <Button variant="tertiary" size="medium">
            <span> medium destructive </span>
          </Button>
          <Button variant="tertiary" size="large">
            <span> large tertiary </span>
          </Button>
          <Button variant="tertiary" size="xl">
            <span> xl destructive </span>
          </Button>
          <Button variant="tertiary" size="2xl">
            <span> 2xl tertiary </span>
          </Button>
        </div>
      </div>

      <div className="credits">
        A challenge by
        <a
          href="https://www.greatfrontend.com/projects?ref=challenges"
          target="_blank"
        >
          GreatFrontEnd Projects
        </a>
        . Built by{' '}
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
