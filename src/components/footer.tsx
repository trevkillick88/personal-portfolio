import React from 'react'
import { NavigationList, SocialList } from '../types/navigation.tsx';
import { Link } from 'react-router-dom'

const navigation = NavigationList;
const social = SocialList;

/**
 * Footer Function
 * @returns {React.ReactElement} - React Element
 */
export default function Footer():React.ReactElement {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className="">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 overflow-hidden py-20 sm:py-24">
                {navigation.length > 0 && (
                <nav
                    aria-label="Footer"
                    className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6"
                >
                    {navigation.map((item) => (
                        <Link
                            className="text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400"
                            key={item.name}
                            to={item.href}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>)}

                <div className="mt-16 flex justify-center gap-x-10">
                    {social.map((item) => (
                        <a
                            aria-label={item.label}
                            className="text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400"
                            href={item.href}
                            key={item.name}
                            rel="noreferrer nofollow"
                            target="_blank"
                            title={item.label}
                        >
                            <span className="sr-only">
                                {item.name}
                            </span>

                            <item.icon
                                aria-hidden="true"
                                className="size-6"
                            />
                        </a>
                    ))}
                </div>

                <p className="mt-10 text-center text-sm/6 text-gray-600 dark:text-gray-400">
                    &copy;
                    {year}

                    {' '}
                    Trevor Killick. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
