import { MenuOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'antd';
import { cn } from '@/shared/util/cn';
import DesktopHeader from './components/desktop';
import HeaderLink from './components/header-link';
import MobileDesktop from './components/mobile';
import { headerData } from './models/headerData';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
        isScrolled ? 'bg-[#E15F26]/70 backdrop-blur-lg' : 'bg-suit-primary'
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

        <div className="flex items-center md:hidden">
          <Button
            icon={<MenuOutlined />}
            type="text"
            className="!text-white"
            onClick={() => setIsDrawerOpen(true)}
          />
        </div>

        <DesktopHeader items={headerData} />

        <MobileDesktop
          items={headerData}
          isOpen={isDrawerOpen}
          setIsOpen={setIsDrawerOpen}
        />
      </div>
    </nav>
  );
};

export default Header;
