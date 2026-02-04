import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-10 bg-background/80 backdrop-blur-sm">
      <Link
        href="/"
        className="font-medium text-white/90 hover:text-primary transition-colors tracking-wide"
      >
        Mikhail Wahib
      </Link>
      <nav className="flex items-center gap-6">
        <a
          href="https://github.com/MikhailWahib"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/50 hover:text-primary transition-colors"
          aria-label="GitHub"
        >
          <FaGithub className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/mikhail-wahib/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/50 hover:text-primary transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="w-5 h-5" />
        </a>
        <Link
          href="/resume"
          className="text-xs font-medium text-white/70 hover:text-primary border border-white/20 hover:border-primary/50 rounded px-3 py-1.5 transition-colors"
        >
          Resume
        </Link>
      </nav>
    </header>
  );
}
