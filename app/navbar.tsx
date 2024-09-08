'use client';

import React from 'react'
import Link  from 'next/link';
import { FaBug } from "react-icons/fa";
import { usePathname } from 'next/navigation';

const NavbarTab = () => {

    const links = [
        { label: 'Dashboard', href: '/' },
        { label: 'Issues', href: '/issues' }
    ];

    const currentPath = usePathname();
    console.log(currentPath);

  return (
    <nav className="flex mb-5 space-x-6 border-b px-5 h-14 items-center">
        <Link href="/"><FaBug /></Link>
        <ul className="flex space-x-6">
            {links.map(link =>
                <Link key={link.href} href={link.href}>{link.label}</Link>
            )}
        </ul>
    </nav>
  )
}

export default NavbarTab