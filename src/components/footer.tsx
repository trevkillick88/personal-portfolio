import React from "react";
import { NavigationList, SocialList } from '../types/navigation.tsx';

const navigation = NavigationList;
const social = SocialList;

export default function Footer() {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className="">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 overflow-hidden py-20 sm:py-24">
                {navigation.length > 0 && (
                <nav aria-label="Footer" className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400">
                            {item.name}
                        </a>
                    ))}
                </nav>)}
                <div className="mt-16 flex justify-center gap-x-10">
                    {social.map((item) => (
                        <a key={item.name} href={item.href} className="text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400" title={item.label} aria-label={item.label} target="_blank" rel="nofollow">
                            <span className="sr-only">{item.name}</span>
                            <item.icon aria-hidden="true" className="size-6" />
                        </a>
                    ))}
                </div>
                <p className="mt-6 text-center text-sm/6 text-gray-600 dark:text-gray-400">&copy; {year} Trevor Killick. All rights reserved.</p>
            </div>
        </footer>
    )
}
