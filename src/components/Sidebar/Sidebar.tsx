import React from 'react';


import {
  HomeIcon,
  ChartBarIcon,
  LoginIcon,
} from '@heroicons/react/outline';

import SidebarItem from './SidebarItem';


function Sidebar() {
  return (
    <nav
    className='z-50 w-16 h-screen px-2 py-3 border-r bg-zinc-800 text-slate-50 border-slate-50'
    >
        <header className="px-1 pb-2 mb-2">
        </header>

        <div className="h-[calc(100%-3.5rem)] flex flex-col justify-between">
            <div className="mt-5">
            <ul>
                <SidebarItem
                route={'/'}
                page={'Home'}
                icon={<HomeIcon />}
                />

                <SidebarItem
                route={'/dashboard'}
                page={'Dashboard'}
                icon={<ChartBarIcon />}
                />
            </ul>
            </div>

            <div className="pt-2 border-t-2 border-zinc-700">
            <ul>
                <SidebarItem
                route={'/logout'}
                page={'Logout'}
                icon={<LoginIcon />}
                />
            </ul>
            </div>
        </div>
    </nav>
  );
}

export default Sidebar;