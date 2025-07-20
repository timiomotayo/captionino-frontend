import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background_faqs.png'
import backgroundImageDark from '@/images/background_faqs_dark.png'
import { useTheme } from '@/context/ThemeContext'

const faqs = [
  [
    {
      question: 'What happens after my free trial?',
      answer:
        `After you use your 5 free captions, you’ll need a subscription to keep generating. Anything you create afterwards gets saved.`,
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer:
        'Yes. Cancel whenever you want, your access will continue until the end of your current billing cycle.',
    },
    {
      question: 'How many captions can I generate each day?',
      answer:
        'Pro users can generate up to 40 captions per day. The count resets every midnight UTC.',
    },
  ],
  [
    {
      question: 'What payment methods are supported?',
      answer:
        'We accept major credit cards, PayPal and Apple Pay for subscription payments.',
    },
    {
      question: 'Can I guide how the captions sound?',
      answer:
        `Yes! Use the "Custom Instructions" field to tell the AI your vibe. Poetic, funny, serious, sarcastic, whatever fits your tone.`,
    },
    {
      question: 'Can I use Captionino for product descriptions too?',
      answer:
        `Totally. It’s not just for social media, you can select the “Product Description” type accordingly.`,
    },
  ],
  [
    {
      question: 'Do I need to save my captions manually?',
      answer:
        `No. If you’re on a Pro plan, your generated captions are saved automatically. No buttons, no hassle.`,
    },
    {
      question: 'Do I need any skill to use Captionino?',
      answer:
        `You don’t need any skill. Zero design knowledge required. If you can type a sentence, you can use Captionino.`,
    },
    {
      question: 'Will Captionino write my captions for me?',
      answer:
        'Yes. You provide the vibe or idea, and our AI turns it into ready-to-post captions. You stay in control while we just speed things up.',
    },
  ]
]

export function Faqs() {
  const { theme } = useTheme();

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 dark:bg-background py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={theme === 'dark' ? backgroundImageDark : backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-lexend text-3xl tracking-tight text-slate-900 dark:text-text sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700 dark:text-blue-100">
            {`Didn’t find what you need? Send us an email, we’ll try to answer before your next caption idea hits.`}
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-lexend text-lg/7 text-slate-900 dark:text-text">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700 dark:text-text/50">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
