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
        'block w-full rounded-md px-3 py-2 text-xl text-white transition-colors duration-200 md:w-fit md:text-base',
        'hover:bg-white/10',
        isActive && 'bg-white/20 font-medium',
        className
      )}
    >
      {label}
    </Link>
  );
};

export default HeaderLink;
