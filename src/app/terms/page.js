import Navbar from "@/components/NavBar"
import Footer from "@/components/Footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-background">
      <Navbar />

      <main className="flex-1 py-12">
        <div className="px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl text-text">Terms and Conditions</h1>
              <p className="text-gray-800 dark:text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
            </div>

            <div className="space-y-6 text-gray-600">
              <section>
                <h2 className="text-2xl font-bold text-text mb-2">1. Acceptance of Terms</h2>
                <p className="text-gray-800 dark:text-gray-400">
                  By accessing or using Captionino, you agree to be bound by these Terms and Conditions and all
                  applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from
                  using or accessing this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text mb-2">2. Description of Service</h2>
                <p className="text-gray-800 dark:text-gray-400">
                  Captionino is an AI-powered caption generation service that allows users to upload images and receive
                  automatically generated captions for various purposes, including social media, product descriptions,
                  travel, and food content.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text mb-2">3. User Accounts</h2>
                <p className="mb-2 text-gray-800 dark:text-gray-400">
                  To use certain features of our service, you may be required to create an account. You are responsible
                  for:
                </p>
                <ul className="list-circle dark:marker:text-white pl-6 space-y-1">
                  <li><p className="text-gray-800 dark:text-gray-400 font-normal">Maintaining the confidentiality of your account information</p></li>
                  <li><p className="text-gray-800 dark:text-gray-400 font-normal">All activities that occur under your account</p></li>
                  <li><p className="text-gray-800 dark:text-gray-400 font-normal">Notifying us immediately of any unauthorized use of your account</p></li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text mb-2">4. User Content</h2>
                <p className="mb-2 text-gray-800 dark:text-gray-400">By uploading images to our service, you:</p>
                <ul className="list-circle dark:marker:text-white pl-6 space-y-1">
                  <li><p className="text-gray-800 dark:text-gray-400 font-normal">Retain all ownership rights to your content</p></li>
                  <li><p className="text-gray-800 dark:text-gray-400 font-normal">
                    Grant us a non-exclusive, worldwide, royalty-free license to use, store, and process your content
                    for the purpose of providing our service</p>
                  </li>
                  <li><p className="text-gray-800 dark:text-gray-400 font-normal">
                    Represent and warrant that you own or have the necessary rights to your content and that it does not
                    violate any third-party rights</p>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text mb-2">5. Prohibited Uses</h2>
                <p className="mb-2 text-gray-800 text-gray-800 dark:text-gray-400">You agree not to use our service:</p>
                <ul className="list-circle dark:marker:text-white pl-6 space-y-1">
                  <li><p className="text-gray-800 dark:text-gray-400 font-normal">For any unlawful purpose or to violate any laws</p></li>
                  <li><p className="text-gray-800 dark:text-gray-400 font-normal">
                    To upload, transmit, or distribute any content that is illegal, harmful, threatening, abusive,
                    harassing, defamatory, or otherwise objectionable</p>
                  </li>
                  <li><p className="text-gray-800 dark:text-gray-400 font-normal">
                    To impersonate any person or entity or falsely state or misrepresent your affiliation with a person
                    or entity</p>
                  </li>
                  <li><p className="text-gray-800 dark:text-gray-400 font-normal">To interfere with or disrupt the service or servers or networks connected to the service</p></li>
                  <li><p className="text-gray-800 dark:text-gray-400 font-normal">To attempt to gain unauthorized access to any part of the service</p></li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text mb-2">6. Intellectual Property</h2>
                <p className="text-gray-800 dark:text-gray-400">
                  The service and its original content (excluding user-uploaded content), features, and functionality
                  are and will remain the exclusive property of Captionino and its licensors. The service is protected
                  by copyright, trademark, and other laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text mb-2">7. Disclaimer of Warranties</h2>
                <p className="text-gray-800 dark:text-gray-400">
                  {"The service is provided \"as is\" and \"as available\" without warranties of any kind, either express or implied. We do not guarantee that the service will be uninterrupted, secure, or error-free."}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text mb-2">8. Limitation of Liability</h2>
                <p className="text-gray-800 dark:text-gray-400">
                  In no event shall Captionino, its directors, employees, partners, agents, suppliers, or affiliates be
                  liable for any indirect, incidental, special, consequential, or punitive damages, including without
                  limitation, loss of profits, data, use, goodwill, or other intangible losses.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text mb-2">9. Termination</h2>
                <p className="text-gray-800 dark:text-gray-400">
                  We may terminate or suspend your account and access to the service immediately, without prior notice
                  or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text mb-2">10. Changes to Terms</h2>
                <p className="text-gray-800 dark:text-gray-400">
                  We reserve the right to modify or replace these Terms at any time. It is your responsibility to review
                  these Terms periodically for changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text mb-2">11. Governing Law</h2>
                <p className="text-gray-800 dark:text-gray-400">
                  These Terms shall be governed and construed in accordance with the laws, without regard to its
                  conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text mb-2">12. Contact Us</h2>
                <p className="text-gray-800 dark:text-gray-400">If you have any questions about these Terms, please contact us at terms@captionino.com.</p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

