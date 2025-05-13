import Navbar from "@/components/NavBar"
import Footer from "@/components/Footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-background">
      <Navbar />

      <main className="flex-1 py-12">
        <div className="px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl text-text">Privacy Policy</h1>
              {/* <p className="text-gray-800 dark:text-gray-400">Last updated: {new Date().toLocaleDateString()}</p> */}
              <p className="text-gray-800 dark:text-gray-400">
                Last updated: {new Intl.DateTimeFormat("en-US", {
                  month: "numeric",
                  day: "numeric",
                  year: "numeric"
                }).format(new Date("2025-05-05"))}
              </p>
            </div>

            <div className="space-y-6 text-gray-600">
              <section>
                <h2 className="text-xl text-text font-bold mb-2">1. Introduction</h2>
                <p className="text-gray-800 dark:text-gray-400">
                  {"Welcome to Captionino (\"we,\" \"our,\" or \"us\"). We are committed to protecting your privacy and handling your data in an open and transparent manner. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our caption generation service."}
                </p>
              </section>

              <section>
                <h2 className="text-xl text-text font-bold mb-2">2. Information We Collect</h2>
                <p className="mb-2 text-gray-800 dark:text-gray-400">We collect the following types of information:</p>
                <ul className="list-circle dark:marker:text-white li pl-6 space-y-1">
                  <li>
                    <strong className="inline text-lg text-gray-800 dark:text-gray-400">Account Information:</strong> <p className="inline text-gray-800 dark:text-gray-400 font-normal">When you create an account, we collect your name, email
                    address, and password.</p>
                  </li>
                  <li>
                    <strong className="inline text-lg text-gray-800 dark:text-gray-400">User Content:</strong> <p className="inline text-gray-800 dark:text-gray-400 font-normal">We collect the images you upload for caption generation.</p>
                  </li>
                  <li>
                    <strong className="inline text-lg text-gray-800 dark:text-gray-400">Usage Data:</strong> <p className="inline text-gray-800 dark:text-gray-400 font-normal">We collect information about how you interact with our service,
                    including the types of captions you generate and your preferences.</p>
                  </li>
                  <li>
                    <strong className="inline text-lg text-gray-800 dark:text-gray-400">Device Information:</strong> <p className="inline text-gray-800 dark:text-gray-400 font-normal">We collect information about the device you use to access our
                    service, including IP address, browser type, and operating system.</p>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-text mb-2">3. How We Use Your Information</h2>
                <p className="mb-2 text-gray-800 dark:text-gray-400">We use your information for the following purposes:</p>
                <ul className="list-circle dark:marker:text-white pl-6 space-y-1">
                  <li ><p className="text-gray-800 dark:text-gray-400 font-normal">To provide and maintain our service</p></li>
                  <li><p className="text-gray-800 dark:text-gray-400 font-normal">To generate captions for your images</p></li>
                  <li><p className="text-gray-800 dark:text-gray-400 font-normal">To improve and personalize your experience</p></li>
                  <li><p className="text-gray-800 dark:text-gray-400 font-normal">To communicate with you about updates or changes to our service</p></li>
                  <li><p className="text-gray-800 dark:text-gray-400 font-normal">To detect, prevent, and address technical issues</p></li>
                  <li><p className="text-gray-800 dark:text-gray-400 font-normal">To comply with legal obligations</p></li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-text mb-2">4. Data Security</h2>
                <p className="text-gray-800 dark:text-gray-400">
                  We implement appropriate technical and organizational measures to protect your personal data against
                  unauthorized or unlawful processing, accidental loss, destruction, or damage. However, please note
                  that no method of transmission over the Internet or method of electronic storage is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-text mb-2">5. Data Retention</h2>
                <p className="text-gray-800 dark:text-gray-400">
                  We retain your personal data only for as long as necessary to fulfill the purposes for which it was
                  collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-text mb-2">6. Your Rights</h2>
                <p className="mb-2 text-gray-800 dark:text-gray-400">Depending on your location, you may have the following rights:</p>
                <ul className="list-circle dark:marker:text-white pl-6 space-y-1">
                  <li><p className="text-gray-800 dark:text-gray-400 font-normal">The right to access your personal data</p></li>
                  <li><p className="text-gray-800 dark:text-gray-400 font-normal">The right to rectify inaccurate personal data</p></li>
                  <li><p className="text-gray-800 dark:text-gray-400 font-normal">The right to request deletion of your personal data</p></li>
                  <li><p className="text-gray-800 dark:text-gray-400 font-normal">The right to restrict processing of your personal data</p></li>
                  <li><p className="text-gray-800 dark:text-gray-400 font-normal">The right to data portability</p></li>
                  <li><p className="text-gray-800 dark:text-gray-400 font-normal">The right to object to processing of your personal data</p></li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-text mb-2">7. Third-Party Services</h2>
                <p className="text-gray-800 dark:text-gray-400">
                  Our service may contain links to third-party websites or services that are not owned or controlled by
                  us. We have no control over and assume no responsibility for the content, privacy policies, or
                  practices of any third-party websites or services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-text mb-2">{"8. Children's Privacy"}</h2>
                <p className="text-gray-800 dark:text-gray-400">
                  {"Our service is not intended for use by children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us."}
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-text mb-2">9. Changes to This Privacy Policy</h2>
                <p className="text-gray-800 dark:text-gray-400">
                  {"We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the \"Last updated\" date."}
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-text mb-2">10. Contact Us</h2>
                {/* <p className="text-gray-800 dark:text-gray-400">If you have any questions about this Privacy Policy, please contact us at privacy@captionino.com.</p> */}
                <p className="text-gray-800 dark:text-gray-400">If you have any questions about this Privacy Policy, please contact us at captionino@gmail.com.</p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

