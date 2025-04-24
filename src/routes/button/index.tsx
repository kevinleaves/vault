import { createFileRoute } from '@tanstack/react-router'
import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

export const Route = createFileRoute('/button/')({
  component: RouteComponent,
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
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
  icon?: React.ReactNode
}

const buttonVariants = cva(
  'inline-flex rounded disabled:text-neutral-400 focus:outline-none focus:shadow-[0_0_0_4px_rgba(68,76,231,0.12)]',
  {
    variants: {
      variant: {
        primary:
          'bg-indigo-700 text-white focus:shadow-[0_0_0_1px_rgba(68,76,231,1)] hover:bg-indigo-800 disabled:bg-neutral-100',
        secondary:
          'bg-white text-black hover:bg-neutral-50 border-[0.5px] border-neutral-200 shadow-[0_1_3_0px_rgba(0,0,0,0.01)] shadow-[0_1_2_0px_rgba(0,0,0,0.06)] disabled:bg-neutral-100',

        tertiary:
          'bg-white text-indigo-700 hover:bg-neutral-50 disabled:bg-white focus:shadow-[0_0_0_4px_rgba(68,76,231,0.12)]',
        link_color: 'text-indigo-700 disabled:bg-white',
        link_gray: 'text-neutral-600  disabled:bg-white',
        destructive:
          'bg-red-600 hover:bg-red-700 text-white  disabled:bg-white focus:shadow-[0_0_0_1px_rgba(217,45,32,1)] focus:shadow-[0_0_0_4px_rgba(217,45,32,0.12)]',
      },
      size: {
        medium: 'py-2.5 px-3.5 text-sm gap-x-1',
        large: 'py-2.5 px-4 gap-x-1.5 text-base',
        xl: 'py-3 px-5 gap-x-1.5 text-base',
        '2xl': 'py-4 px-6 gap-x-2.5 text-lg',
      },
    },
    compoundVariants: [],
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  },
)

export function Button({
  className,
  children,
  variant,
  size,
  onClick,
  disabled = false,
  ariaLabel,
  icon,
  iconPosition = 'left',
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
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
    <div className="p-4 flex flex-col lg:container mx-auto">
      <div className="mt-10">
        <h1 className="text-2xl font-bold">Primary</h1>
        <div className="flex flex-wrap gap-4 items-center">
          <Button
            variant="primary"
            size="medium"
            icon={<i className="ri-star-line"></i>}
            iconPosition="both"
            ariaLabel="Medium primary button"
          >
            <span>Button CTA</span>
          </Button>
          <Button
            variant="primary"
            size="large"
            icon={<i className="ri-star-line"></i>}
            iconPosition="both"
            ariaLabel="Large primary button"
          >
            <span>Button CTA</span>
          </Button>
          <Button
            variant="primary"
            size="xl"
            icon={<i className="ri-star-line"></i>}
            iconPosition="both"
            ariaLabel="XL primary button"
          >
            <span>Button CTA</span>
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
            <span>Button CTA</span>
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
        <h1 className="text-2xl font-bold mt-10">Secondary</h1>
        <div className="flex flex-wrap gap-4 items-center">
          <Button
            variant="secondary"
            size="medium"
            iconPosition="both"
            icon={<i className="ri-star-line"></i>}
            ariaLabel="Medium secondary button"
          >
            <span>Button CTA</span>
          </Button>
          <Button
            variant="secondary"
            size="large"
            iconPosition="both"
            icon={<i className="ri-star-line"></i>}
            ariaLabel="Large secondary button"
          >
            <span>Button CTA</span>
          </Button>
          <Button
            variant="secondary"
            size="xl"
            iconPosition="both"
            icon={<i className="ri-star-line"></i>}
            ariaLabel="XL secondary button"
          >
            <span>Button CTA</span>
          </Button>
          <Button
            variant="secondary"
            size="2xl"
            iconPosition="both"
            icon={<i className="ri-star-line"></i>}
            ariaLabel="2XL secondary button"
          >
            <span>Button CTA</span>
          </Button>
          <Button
            variant="secondary"
            size="medium"
            icon={<i className="ri-star-line"></i>}
            ariaLabel="Medium secondary button icon only"
          ></Button>
          <Button
            variant="secondary"
            size="large"
            icon={<i className="ri-star-line"></i>}
            ariaLabel="Large secondary button icon only"
          ></Button>
          <Button
            variant="secondary"
            size="xl"
            icon={<i className="ri-star-line"></i>}
            ariaLabel="XL secondary button icon only"
          ></Button>
          <Button
            variant="secondary"
            size="2xl"
            icon={<i className="ri-star-line"></i>}
            ariaLabel="2XL secondary button icon only"
          ></Button>
          <Button
            variant="secondary"
            size="medium"
            icon={<i className="ri-star-line"></i>}
            ariaLabel="Medium secondary button disabled"
            iconPosition="both"
            disabled
          >
            <span>Button CTA</span>
          </Button>
        </div>
        <h1 className="text-2xl font-bold mt-10">Tertiary</h1>
        <div className="flex flex-wrap gap-4 items-center">
          <Button
            variant="tertiary"
            size="medium"
            iconPosition="both"
            icon={<i className="ri-star-line"></i>}
            ariaLabel="Medium tertiary button"
          >
            <span>Button CTA</span>
          </Button>
          <Button
            variant="tertiary"
            size="large"
            iconPosition="both"
            icon={<i className="ri-star-line"></i>}
            ariaLabel="Large tertiary button"
          >
            <span>Button CTA</span>
          </Button>
          <Button
            variant="tertiary"
            size="xl"
            iconPosition="both"
            icon={<i className="ri-star-line"></i>}
            ariaLabel="XL tertiary button"
          >
            <span>Button CTA</span>
          </Button>
          <Button
            variant="tertiary"
            size="2xl"
            iconPosition="both"
            icon={<i className="ri-star-line"></i>}
            ariaLabel="2XL tertiary button"
          >
            <span>Button CTA</span>
          </Button>
          <Button
            variant="tertiary"
            size="medium"
            icon={<i className="ri-star-line"></i>}
            ariaLabel="medium primary button icon only"
          ></Button>
          <Button
            variant="tertiary"
            size="large"
            icon={<i className="ri-star-line"></i>}
            ariaLabel="large primary button icon only"
          ></Button>
          <Button
            variant="tertiary"
            size="xl"
            icon={<i className="ri-star-line"></i>}
            ariaLabel="xl primary button icon only"
          ></Button>
          <Button
            variant="tertiary"
            size="2xl"
            icon={<i className="ri-star-line"></i>}
            ariaLabel="2xl primary button icon only"
          ></Button>
          <Button
            variant="tertiary"
            size="medium"
            icon={<i className="ri-star-line"></i>}
            ariaLabel="2xl primary button icon only"
            iconPosition="both"
            disabled
          >
            <span>Button CTA</span>
          </Button>
        </div>
        <h1 className="text-2xl font-bold mt-10">Link Color</h1>
        <div className="flex flex-wrap gap-4 items-center">
          <Button
            variant="link_color"
            size="medium"
            iconPosition="both"
            icon={<i className="ri-star-line"></i>}
            ariaLabel="Medium link color button"
          >
            <span>Button CTA</span>
          </Button>
          <Button
            variant="link_color"
            size="large"
            iconPosition="both"
            icon={<i className="ri-star-line"></i>}
            ariaLabel="Large link color button"
          >
            <span>Button CTA</span>
          </Button>
          <Button
            variant="link_color"
            size="xl"
            iconPosition="both"
            icon={<i className="ri-star-line"></i>}
            ariaLabel="XL link color button"
          >
            <span>Button CTA</span>
          </Button>
          <Button
            variant="link_color"
            size="2xl"
            iconPosition="both"
            icon={<i className="ri-star-line"></i>}
            ariaLabel="2XL link color button"
          >
            <span>Button CTA</span>
          </Button>
          <Button
            variant="link_color"
            size="medium"
            icon={<i className="ri-star-line"></i>}
            ariaLabel="Medium link color button icon only"
          ></Button>
          <Button
            variant="link_color"
            size="large"
            icon={<i className="ri-star-line"></i>}
            ariaLabel="Large link color button icon only"
          ></Button>
          <Button
            variant="link_color"
            size="xl"
            icon={<i className="ri-star-line"></i>}
            ariaLabel="XL link color button icon only"
          ></Button>
          <Button
            variant="link_color"
            size="2xl"
            icon={<i className="ri-star-line"></i>}
            ariaLabel="2XL link color button icon only"
          ></Button>
          <Button
            variant="link_color"
            size="medium"
            icon={<i className="ri-star-line"></i>}
            ariaLabel="Medium link color button disabled"
            iconPosition="both"
            disabled
          >
            <span>Button CTA</span>
          </Button>
        </div>
        <h1 className="text-2xl font-bold mt-10">Link Gray</h1>
        <div className="flex flex-wrap gap-4 items-center">
          <Button
            variant="link_gray"
            size="medium"
            iconPosition="both"
            icon={<i className="ri-star-line"></i>}
            ariaLabel="Medium link gray button"
          >
            <span>Button CTA</span>
          </Button>
          <Button
            variant="link_gray"
            size="large"
            iconPosition="both"
            icon={<i className="ri-star-line"></i>}
            ariaLabel="Large link gray button"
          >
            <span>Button CTA</span>
          </Button>
          <Button
            variant="link_gray"
            size="xl"
            iconPosition="both"
            icon={<i className="ri-star-line"></i>}
            ariaLabel="XL link gray button"
          >
            <span>Button CTA</span>
          </Button>
          <Button
            variant="link_gray"
            size="2xl"
            iconPosition="both"
            icon={<i className="ri-star-line"></i>}
            ariaLabel="2XL link gray button"
          >
            <span>Button CTA</span>
          </Button>
          <Button
            variant="link_gray"
            size="medium"
            icon={<i className="ri-star-line"></i>}
            ariaLabel="Medium link gray button icon only"
          ></Button>
          <Button
            variant="link_gray"
            size="large"
            icon={<i className="ri-star-line"></i>}
            ariaLabel="Large link gray button icon only"
          ></Button>
          <Button
            variant="link_gray"
            size="xl"
            icon={<i className="ri-star-line"></i>}
            ariaLabel="XL link gray button icon only"
          ></Button>
          <Button
            variant="link_gray"
            size="2xl"
            icon={<i className="ri-star-line"></i>}
            ariaLabel="2XL link gray button icon only"
          ></Button>
          <Button
            variant="link_gray"
            size="medium"
            icon={<i className="ri-star-line"></i>}
            ariaLabel="Medium link gray button disabled"
            iconPosition="both"
            disabled
          >
            <span>Button CTA</span>
          </Button>
        </div>
        <h1 className="text-2xl font-bold mt-10">Destructive</h1>
        <div className="flex flex-wrap  gap-4 items-center">
          <Button
            variant="destructive"
            size="medium"
            iconPosition="both"
            icon={<i className="ri-star-line"></i>}
            ariaLabel="Medium destructive button"
          >
            <span>Button CTA</span>
          </Button>
          <Button
            variant="destructive"
            size="large"
            iconPosition="both"
            icon={<i className="ri-star-line"></i>}
            ariaLabel="Large destructive button"
          >
            <span>Button CTA</span>
          </Button>
          <Button
            variant="destructive"
            size="xl"
            iconPosition="both"
            icon={<i className="ri-star-line"></i>}
            ariaLabel="XL destructive button"
          >
            <span>Button CTA</span>
          </Button>
          <Button
            variant="destructive"
            size="2xl"
            iconPosition="both"
            icon={<i className="ri-star-line"></i>}
            ariaLabel="2XL destructive button"
          >
            <span>Button CTA</span>
          </Button>
          <Button
            variant="destructive"
            size="medium"
            icon={<i className="ri-star-line"></i>}
            ariaLabel="Medium destructive button icon only"
          ></Button>
          <Button
            variant="destructive"
            size="large"
            icon={<i className="ri-star-line"></i>}
            ariaLabel="Large destructive button icon only"
          ></Button>
          <Button
            variant="destructive"
            size="xl"
            icon={<i className="ri-star-line"></i>}
            ariaLabel="XL destructive button icon only"
          ></Button>
          <Button
            variant="destructive"
            size="2xl"
            icon={<i className="ri-star-line"></i>}
            ariaLabel="2XL destructive button icon only"
          ></Button>
          <Button
            variant="destructive"
            size="medium"
            icon={<i className="ri-star-line"></i>}
            ariaLabel="Medium destructive button disabled"
            iconPosition="both"
            disabled
          >
            <span>Button CTA</span>
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
