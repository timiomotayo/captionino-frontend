import { Geist, Geist_Mono, Inter, Lexend, Josefin_Sans } from "next/font/google";
import "./globals.css";
import '../styles/styles.css';
import { AuthProvider } from "@/context/AuthContext";
import ThemeProvider from "@/context/ThemeContext";
// import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"


// Fonts
const inter = Inter({ subsets: ["latin"] })

// const inter = Inter({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-inter',s
// })

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

const josefin = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin',
  display: 'swap',
})



// New metadata;
export const metadata = {
  title: {
    template: '%s - CaptioNino',
    default: 'CaptioNino - Caption generation made easy for social media',
  },
  description: "Generate engaging captions for your images with AI Caption Generator",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
        <script>
          {`{(function() {
            const theme = localStorage.getItem('theme') || 'light';
            document.documentElement.classList.toggle("dark", theme === "dark");
          })();}`}
        </script>
        <meta name="google-site-verification" content="hbfAsKdNQKfe52ZSKPH_io-VfJaeRXJ2osvfRGad760" />
        </head>
        <body
          className={`${inter.className} ${geistSans.variable} ${geistMono.variable} ${lexend.variable} ${josefin.variable} antialiased`}
        >
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </AuthProvider>
  );
}