import React from 'react'

export interface FeatureProps {
  icon: React.ReactNode
  featureName: string
  description: string
}

export const Feature = ({ icon, featureName, description }: FeatureProps) => {
  return (
    <li
      aria-label="feature cell"
      className="flex flex-col h-full list-none gap-5 items-center col-span-4 md:col-span-3 lg:col-span-4"
    >
      {icon}
      <div className="text-center">
        <p className="font-semibold text-xl mb-2">{featureName}</p>
        <p className="font-normal text-base">{description}</p>
      </div>
    </li>
  )
}
