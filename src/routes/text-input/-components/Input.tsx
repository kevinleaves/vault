import React from 'react'
import type { HTMLInputTypeAttribute } from 'react'
import { cn } from '@/lib/utils'

export interface InputProps {
  labelText: string
  subText: string
  placeholder: string
  disabled: boolean
  error?: boolean
  id: string
  iconLeading?: React.ReactElement
  iconTrailing?: React.ReactElement
  type: HTMLInputTypeAttribute
  name: string
}

export function Input({
  labelText,
  placeholder,
  disabled,
  subText,
  error,
  id,
  iconLeading,
  iconTrailing,
  type,
  name,
}: InputProps) {
  return (
    <div className="flex flex-col relative">
      <label className="text-sm font-normal mb-1.5" htmlFor={id}>
        {labelText}
      </label>
      <div className="absolute left-3 top-9">{iconLeading}</div>
      <div
        className={cn(
          'absolute right-3.5 top-9 text-neutral-400',
          error && 'text-red-600',
        )}
      >
        {iconTrailing}
      </div>
      <input
        className={cn(
          'border-1 border-neutral-200 bg-neutral-50 px-3.5 py-2.5 rounded-sm focus:shadow-[0_0_0_1px_#444CE7,0_1px_2px_0px_rgba(16,24,40,0.05),0_0_0_4px_rgba(68,76,231,0.12)] outline-hidden',
          iconLeading && 'pl-10',
          iconTrailing && 'pr-10',
          error &&
            'focus:shadow-[0_1px_2px_0px_rgba(217,45,32,1),0_0_0_4px_rgba(212,45,32,0.12)]',
        )}
        placeholder={placeholder}
        disabled={disabled}
        id={id}
        name={name}
        type={type}
        aria-describedby={id}
      />
      <p
        id={error ? `${id}-error` : `${id}-hint`}
        className={cn(
          'text-sm font-normal',
          error ? 'text-red-600' : 'text-neutral-500',
        )}
      >
        {subText}
      </p>
    </div>
  )
}
