import React from 'react';
import { Link } from 'react-router-dom'

type Props = {
  route: string;
  page: string;
  icon: any;
};

function SidebarItem({ route, page, icon }: Props) {
  return (
    <Link to={route}>
      <li
        className='flex items-center py-2 pl-2 rounded-md cursor-pointer hover:bg-zinc-700'
      >
        <div className="w-5 rounded-md">{icon}</div>
        </li>
    </Link>
  );
}

export default SidebarItem;