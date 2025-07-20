import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background_call_to_action.png'
import backgroundImageDark from '@/images/background_call_to_action_dark.png'
import { useTheme } from '@/context/ThemeContext'

export function CallToAction() {
  const { theme } = useTheme();

  return (
    <section
      id="ready-to-get-started"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <Image
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={theme === 'dark' ? backgroundImageDark : backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-lexend text-3xl tracking-tight text-white sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg tracking-tight text-blue-100">
            Take control of your content. Create engaging captions for your content in seconds.
          </p>
          <Button href="/register" color="white" className="mt-10">
            Get 5 instant free trials 
          </Button>
        </div>
      </Container>
    </section>
  )
}
