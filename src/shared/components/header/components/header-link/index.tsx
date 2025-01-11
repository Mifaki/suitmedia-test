import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/shared/util/cn';

interface IHeaderLink {
  href: string;
  label: string;
  className?: string;
}

const HeaderLink = ({ href, label, className }: IHeaderLink) => {
  const pathname = usePathname();
  const isActive = pathname?.startsWith(href) && href !== '/' ? true : pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        'block w-full rounded-md px-3 py-2 text-xl text-black transition-colors duration-200 hover:!text-black md:w-fit md:text-base md:text-white md:hover:!text-white',
        'hover:bg-white/10',
        isActive && 'bg-black/10 font-medium md:bg-white/20',
        className
      )}
    >
      {label}
    </Link>
  );
};

export default HeaderLink;
