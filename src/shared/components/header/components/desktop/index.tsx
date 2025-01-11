import { INavItem } from '../../models/type';
import HeaderLink from '../header-link';

interface IDesktopHeader {
  items: INavItem[];
}

const DesktopHeader = ({ items }: IDesktopHeader) => {
  return (
    <ul className="hidden items-center gap-5 md:flex">
      {items.map((dx) => (
        <li key={dx.href}>
          <HeaderLink {...dx} />
        </li>
      ))}
    </ul>
  );
};

export default DesktopHeader;
