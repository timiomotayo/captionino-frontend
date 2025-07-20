import Link from 'next/link'
import { Container } from '@/components/Container'
import { Logo } from './Logo'
import { NavLink } from '@/components/NavLink'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'

export function PageFooter() {
  return (
    <footer className="bg-slate-50 dark:bg-background">
      <Container>
        <div className="py-16">
          <Logo className="flex justify-center"/>
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <NavLink href="/about">About Us</NavLink>
              <NavLink href="/privacy-policy">Privary Policy</NavLink>
              <NavLink href="/terms">Terms & Condition</NavLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <Link href="https://www.linkedin.com/company/ninoapps" className="group" aria-label="NinoApps on LinkedIn">
              <FaLinkedin size={24} className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"/>
            </Link>
            <Link href="https://www.instagram.com/captionino" className="group" aria-label="NinoApps on Instagram">
              <FaInstagram size={24} className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"/>
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} NinoApps. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
