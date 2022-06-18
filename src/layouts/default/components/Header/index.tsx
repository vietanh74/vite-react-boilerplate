import { Link, NavLink } from 'react-router-dom';
import cx from 'classnames';

import styles from './styles.module.scss';

import ArrowIcon from './icons/arrowicon.svg?component';
import ShopIcon from './icons/ShopIcon.svg?component';
import BillIcon from './icons/BillIcon.svg?component';
import TruckIcon from './icons/TruckIcon.svg?component';
import TicketIcon from './icons/TicketIcon.svg?component';
import UserIcon from './icons/UserIcon.svg?component';
import OtherIcon from './icons/OtherIcon.svg?component';

const Header = () => {
  const MENUS = [
    { name: 'Shop', path: '/', icon: <ShopIcon /> },
    { name: 'Đơn hàng', path: '/about', icon: <BillIcon /> },
    { name: 'COD', path: '/about', icon: <TruckIcon /> },
    { name: 'Tickets', path: '/about', icon: <TicketIcon /> },
    { name: 'Nhân sự', path: '/about', icon: <UserIcon /> },
    { name: 'Khác', path: '/about', icon: <OtherIcon /> },
  ];

  return (
    <header className="flex h-14 bg-ghtk">
      <Link to="/">
        <div className="logo flex items-center justify-center w-44 h-full">
          <img src="/images/logo.png" alt="Logo" />
        </div>
      </Link>

      <div className="h-full flex items-center">
        <div className="h-4/6 w-px bg-white"></div>
      </div>

      <div className="flex my-0 ml-6 p-0 list-none text-white mr-auto">
        {MENUS.map((menu, index) => (
          <NavLink
            key={index}
            to={menu.path}
            className={({ isActive }) =>
              cx(
                'h-full flex items-center px-4 text-lg font-medium text-white hover:text-white',
                isActive && styles.linkActive
              )
            }
          >
            <div className="mr-2 flex">{menu.icon}</div>
            {menu.name}
          </NavLink>
        ))}
      </div>

      <div className="w-56 flex items-center cursor-pointer">
        <div className="mr-[14px]">
          <img className="text-white w-10 h-10 object-cover rounded-full" src="/images/avatar.jpg" />
        </div>

        <div className="text-white">
          <div className="font-medium max-w-[126px] whitespace-nowrap overflow-hidden text-ellipsis">
            Phạm Minh Anh
          </div>
          <div className="uppercase text-xs">nhân viên bưu cục</div>
        </div>

        <div className="flex text-white ml-2">
          <ArrowIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
