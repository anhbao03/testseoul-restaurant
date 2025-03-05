"use client"

import { usePathname, useRouter } from 'next/navigation';
import React from 'react'
import Image from 'next/image';

const BottomTab = () => {
    const pathname = usePathname();
    const router = useRouter();

    const iconTab = (url: string) => <Image
        loading="lazy"
        src={url}
        alt={'Restaurant'}
        width={15}
        height={15}
        className="size-6"
    />

    const tabs = [
        {
            id: 'home',
            icon: pathname === '/' ? iconTab('images/home.svg') : iconTab('images/home.svg'),
            label: '홈',
            path: '/',
        },
        {
            id: 'search',
            icon: pathname === '/search' ? iconTab('images/search.svg') : iconTab('images/search.svg'),
            label: '검색',
            path: '/search',
        },
        {
            id: 'feed',
            icon: pathname === '/feed' ? iconTab('images/message.svg') : iconTab('images/message.svg'),
            label: '피드',
            path: '/feed',
        },
        {
            id: 'reservations',
            icon: pathname === '/reservations' ? iconTab('images/calendar.svg') : iconTab('images/calendar.svg'),
            label: '내 예약',
            path: '/reservations',
        },
        {
            id: 'menu',
            icon: pathname === '/menu' ? iconTab('images/menu.svg') : iconTab('images/menu.svg'),
            label: '메뉴',
            path: '/menu',
        },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center py-2 h-16">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => router.push(tab.path)}
                    className="flex flex-col items-center"
                    aria-label={tab.label}
                >
                    {tab.icon}
                    <span className={`text-xs mt-1 ${pathname === tab.path ? 'text-orange-500' : 'text-gray-500'}`}>
                        {tab.label}
                    </span>
                </button>
            ))}
        </div>
    );
}

export default BottomTab
