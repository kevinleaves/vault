import React from 'react'
import { Feature } from './Feature'

const features = [
  {
    icon: (
      <i className="ri-download-2-line text-indigo-700 h-12 w-12 inline-flex justify-center items-center shadow-[0_1px_3px_0_rgba(0,0,0,0.1)] shadow-[0_1px_2px_0_rgba(0,0,0,0.06)] rounded-full"></i>
    ),
    featureName: 'Infinite Download',
    description:
      "Once you subscribe to our plans, they're all yours. Download as many as you want and use them for work presentations, wallpapers, and much more.",
  },
  {
    icon: (
      <i className="ri-brush-line text-indigo-700 h-12 w-12 inline-flex justify-center items-center shadow-[0_1px_3px_0_rgba(0,0,0,0.1)] shadow-[0_1px_2px_0_rgba(0,0,0,0.06)] rounded-full"></i>
    ),
    featureName: 'Purely Handcrafted',
    description:
      'No AI, no generic images. Crafted from various chemicals, fabrics, clouds, or even particles as small as dust.',
  },
  {
    icon: (
      <i className="ri-copyright-line text-indigo-700 h-12 w-12 inline-flex justify-center items-center shadow-[0_1px_3px_0_rgba(0,0,0,0.1)] shadow-[0_1px_2px_0_rgba(0,0,0,0.06)] rounded-full"></i>
    ),
    featureName: 'All Are Under licensed',
    description:
      'The only limitation with these abstract images is that you are not able to sell them in any form, whether digital or hard copy (such as paintings or prints on paper).',
  },
  {
    icon: (
      <i className="ri-refund-2-fill text-indigo-700 h-12 w-12 inline-flex justify-center items-center shadow-[0_1px_3px_0_rgba(0,0,0,0.1)] shadow-[0_1px_2px_0_rgba(0,0,0,0.06)] rounded-full"></i>
    ),
    featureName: 'Cancel Anytime',
    description:
      "Subscribe at your own pace, and cancel when you feel it's enough.",
  },
  {
    icon: (
      <i className="ri-team-line text-indigo-700 h-12 w-12 inline-flex justify-center items-center shadow-[0_1px_3px_0_rgba(0,0,0,0.1)] shadow-[0_1px_2px_0_rgba(0,0,0,0.06)] rounded-full"></i>
    ),
    featureName: 'Empowering For Team',
    description:
      'We support multiple seats at once, requiring only a single payment.',
  },
  {
    icon: (
      <i className="ri-refresh-line text-indigo-700 h-12 w-12 inline-flex justify-center items-center shadow-[0_1px_3px_0_rgba(0,0,0,0.1)] shadow-[0_1px_2px_0_rgba(0,0,0,0.06)] rounded-full"></i>
    ),
    featureName: 'No Limitations',
    description:
      'Use as many as you want, from Dribbble presentations to PowerPoint presentations.',
  },
]

export const FeatureList = () => {
  return (
    <ul className="grid justify-center items-center gap-8">
      {features.map(({ icon, featureName, description }) => {
        return (
          <Feature
            icon={icon}
            featureName={featureName}
            description={description}
          />
        )
      })}
    </ul>
  )
}
