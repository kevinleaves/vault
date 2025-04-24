import { createFileRoute } from '@tanstack/react-router'
import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva('inline-flex items-center rounded-2xl', {
  variants: {
    variant: {
      neutral: 'bg-gray-50 border-1 border-neutral-200 text-neutral-600',
      error: 'bg-red-50 border-1 border-red-200 text-red-600',
      warning: 'bg-amber-50 border-1 border-amber-200 text-amber-600',
      success: 'bg-green-50 border-1 border-green-200 text-green-600',
      brand: 'bg-indigo-50 border-1 border-indigo-200 text-indigo-600',
    },
    size: {
      small: 'px-1.5 py-0.5 text-xs',
      medium: 'px-2 py-0.5 text-sm',
      large: 'px-2.5 py-1 text-sm',
    },
  },
  defaultVariants: {
    variant: 'neutral',
    size: 'medium',
  },
})

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  children?: React.ReactNode
}

function Badge({ className, children, variant, size }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)}>
      {children}
    </div>
  )
}

export const Route = createFileRoute('/badge/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="inline-flex p-8 justify-center w-full">
      <div className="flex flex-col gap-6">
        <div className="flex gap-16">
          <Badge variant="neutral" size="small">
            <span>Label</span>
          </Badge>
          <Badge variant="neutral" size="medium">
            <span>Label</span>
          </Badge>
          <Badge variant="neutral" size="large">
            <span>Label</span>
          </Badge>
        </div>
        <div className="flex gap-16">
          <Badge variant="error" size="small">
            <span>Label</span>
          </Badge>
          <Badge variant="error" size="medium">
            <span>Label</span>
          </Badge>
          <Badge variant="error" size="large">
            <span>Label</span>
          </Badge>
        </div>
        <div className="flex gap-16">
          <Badge variant="warning" size="small">
            <span>Label</span>
          </Badge>
          <Badge variant="warning" size="medium">
            <span>Label</span>
          </Badge>
          <Badge variant="warning" size="large">
            <span>Label</span>
          </Badge>
        </div>
        <div className="flex gap-16">
          <Badge variant="success" size="small">
            <span>Label</span>
          </Badge>
          <Badge variant="success" size="medium">
            <span>Label</span>
          </Badge>
          <Badge variant="success" size="large">
            <span>Label</span>
          </Badge>
        </div>
        <div className="flex gap-16">
          <Badge variant="brand" size="small">
            <span>Label</span>
          </Badge>
          <Badge variant="brand" size="medium">
            <span>Label</span>
          </Badge>
          <Badge variant="brand" size="large">
            <span>Label</span>
          </Badge>
        </div>
      </div>
    </div>
  )
}
