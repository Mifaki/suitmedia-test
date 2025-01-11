import { CloseOutlined } from '@ant-design/icons';
import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import { Button, Drawer } from 'antd';
import { INavItem } from '../../models/type';
import HeaderLink from '../header-link';

interface IMobileHeader {
  items: INavItem[];
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileDesktop = ({ items, isOpen, setIsOpen }: IMobileHeader) => {
  return (
    <Drawer
      placement="right"
      title={
        <div className="flex items-center justify-between">
          <Image
            src={'/img/suitmedia-logo.png'}
            alt="Suitmedia Logo"
            width={160}
            height={80}
          />
          <Button
            onClick={() => setIsOpen(false)}
            type="text"
            icon={<CloseOutlined className="!text-white" />}
            size="large"
          />
        </div>
      }
      width={'100%'}
      closable={false}
      onClose={() => setIsOpen(false)}
      open={isOpen}
    >
      <ul className="space-y-10 text-center">
        {items.map((dx) => (
          <li key={dx.href}>
            <HeaderLink {...dx} />
          </li>
        ))}
      </ul>
    </Drawer>
  );
};

export default MobileDesktop;
