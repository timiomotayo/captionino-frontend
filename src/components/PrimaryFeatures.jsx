'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background_features.png'
import backgroundImageDark from '@/images/background_features_dark.png'
import screenshotChooseType from '@/images/screenshots/choose_type.png'
import screenshotChooseTypeDark from '@/images/screenshots/choose_type_dark.png'
import screenshotSelectImage from '@/images/screenshots/select_image.png'
import screenshotSelectImageDark from '@/images/screenshots/select_image_dark.png'
import screenshotRecentActivity from '@/images/screenshots/recent_activity.png'
import screenshotRecentActivityDark from '@/images/screenshots/recent_activity_dark.png'
import screenshotCopyCaption from '@/images/screenshots/copy_caption.png'
import screenshotCopyCaptionDark from '@/images/screenshots/copy_caption_dark.png'
import { useTheme } from '@/context/ThemeContext'


export function PrimaryFeatures() {
  
  const { theme } = useTheme();
  
  const features = [
    {
      title: 'Select image',
      description:
        "Choose an image with size up to 5mb for your caption generation. Select from your device or drag and drop.",
      image: theme === 'dark' ? screenshotSelectImageDark : screenshotSelectImage,
    },
    {
      title: 'Choose type',
      description:
        "You can choose different types of captions for your image, such as social media, product description, travel and food.",
      image: theme === 'dark' ? screenshotChooseTypeDark : screenshotChooseType,
    },
    {
      title: 'Copy caption',
      description:
        "Caption text can be copied and pasted for your usage. Click the copy button on the text to copy text.",
      image: theme === 'dark' ? screenshotCopyCaptionDark : screenshotCopyCaption,
    },
    {
      title: 'Recent activity',
      description:
        'Access your recent activities. View your recent caption generations on your profile.',
      image: theme === 'dark' ? screenshotRecentActivityDark : screenshotRecentActivity,
    },
  ]

  
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label="Features for generating your captions"
      className="relative overflow-hidden bg-pink-600 pt-20 pb-28 sm:py-32"
    >
      <Image
        className="absolute top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={theme === 'dark' ? backgroundImageDark : backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-lexend text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Everything you need to generate your captions.
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            Well everything you need if you are not that picky about minor
            details like captions.
          </p>
        </div>
        <TabGroup
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <TabList className="relative z-10 flex gap-x-4 px-4 whitespace-nowrap sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                        selectedIndex === featureIndex
                          ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-white/10 lg:ring-inset'
                          : 'hover:bg-white/10 lg:hover:bg-white/5',
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-lexend text-lg data-selected:not-data-focus:outline-hidden',
                            selectedIndex === featureIndex
                              ? 'text-blue-600 lg:text-white'
                              : 'text-blue-100 hover:text-white lg:text-white',
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-blue-100 group-hover:text-white',
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </TabList>
              </div>
              <TabPanels className="lg:col-span-7">
                {features.map((feature) => (
                  <TabPanel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 top-[-6.5rem] bottom-[-4.25rem] bg-white/10 ring-1 ring-white/10 ring-inset sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="mt-10 w-130 h-70 overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-271.25 sm:h-auto lg:h-150">
                      <Image
                        className="w-full h-full"
                        src={feature.image}
                        alt=""
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      />
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </>
          )}
        </TabGroup>
      </Container>
    </section>
  )
}
