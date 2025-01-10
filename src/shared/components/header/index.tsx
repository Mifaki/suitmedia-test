import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/shared/util/cn';
import HeaderLink from './components/header-link';
import { headerData } from './models/headerData';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar, { passive: true });

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={cn(
        'fixed left-0 top-0 z-50 w-full transition-all duration-500',
        isVisible ? 'translate-y-0' : '-translate-y-full',
        isScrolled ? 'bg-[#E15F26]/70 backdrop-blur-lg' : 'bg-[#E15F26]'
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="relative"
        >
          <Image
            src="/img/suitmedia-logo.png"
            alt="Suitmedia Logo"
            width={80}
            height={40}
            priority
            className="h-auto w-20"
          />
        </Link>

        <ul className="flex items-center gap-5 text-white">
          {headerData.map((dx) => (
            <li key={dx.href}>
              <HeaderLink {...dx} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
