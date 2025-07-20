'use client'

import { useId } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { FaRobot, FaClock } from 'react-icons/fa'
import { MdOutlineNoteAlt } from 'react-icons/md'
import clsx from 'clsx'
import { Container } from '@/components/Container'

const features = [
  {
    name: 'Powered by AI',
    summary: 'Captions that sound like you.',
    description:
      'Our AI turns your thoughts into scroll-worthy captions in seconds. No fluff, no filler.',
    // image: screenshotAI,
    icon: function AIIcon() {
      let id = useId()
      return (
        <>
          <FaRobot size={35} color='magenta' />
        </>
      )
    },
  },
  {
    name: 'Custom Instructions',
    summary:
      'Got a vibe in mind? Tell us.',
    description:
      'Whether it’s “make it funny” or “sound poetic,” you can guide the AI to match your unique voice.',
    // image: screenshotCustom,
    icon: function CustomIcon() {
      return (
        <>
          <MdOutlineNoteAlt size={35} color='magenta' />
        </>
      )
    },
  },
  {
    name: 'Fresh Daily Limits',
    summary:
      'Generate up to 40 captions a day.',
    description:
      'Plenty of room to experiment, revise, or build an entire week’s content in one sitting.',
    // image: screenshotLimit,
    icon: function LimitIcon() {
      return (
        <>
          <FaClock size={35} color='magenta' />
        </>
      )
    },
  },
]

function Feature({ feature, isActive, className, ...props }) {
  return (
    <div
      className={clsx(className, !isActive && 'opacity-75 hover:opacity-100')}
      {...props}
    >
      <div
        className={clsx(
          'w-9 rounded-lg',
          // isActive ? 'bg-blue-600' : 'bg-slate-500',
        )}
      >
        <svg aria-hidden="true" className="h-9 w-9" fill="none">
          <feature.icon />
        </svg>
      </div>
      <h3
        className={clsx(
          'mt-6 text-sm font-medium',
          // isActive ? 'text-blue-600' : 'text-slate-600',
        )}
      >
        {feature.name}
      </h3>
      <p className="mt-2 font-lexend text-xl text-slate-900 dark:text-blue-200">
        {feature.summary}
      </p>
      <p className="mt-4 text-sm text-slate-700 dark:text-gray-400">{feature.description}</p>
    </div>
  )
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.summary}>
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
        </div>
      ))}
    </div>
  )
}

function FeaturesDesktop() {
  return (
    <TabGroup className="hidden lg:mt-20 lg:block">
      {({ selectedIndex }) => (
        <>
          <TabList className="grid grid-cols-3 gap-x-8">
            {features.map((feature, featureIndex) => (
              <Feature
                key={feature.summary}
                feature={{
                  ...feature,
                  name: (
                    <Tab className="data-selected:not-data-focus:outline-hidden">
                      <span className="absolute inset-0" />
                      {feature.name}
                    </Tab>
                  ),
                }}
                isActive={featureIndex === selectedIndex}
                className="relative"
              />
            ))}
          </TabList>
        </>
      )}
    </TabGroup>
  )
}

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for generating engaging captions"
      className="pt-20 pb-14 sm:pt-32 sm:pb-20 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-lexend text-3xl tracking-tight text-slate-900 dark:text-text sm:text-4xl">
            Effortless captions, every single day.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700 dark:text-gray-400">
            Because writing the perfect caption shouldn't take longer than creating the content itself.
          </p>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
