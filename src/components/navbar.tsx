import { Dialog, DialogPanel, Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useTheme } from '../context/theme.tsx';
import { Theme } from '../types/theme.tsx';
import { useState } from 'react';
import { NavigationList } from '../types/navigation.tsx';
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

const navigation = NavigationList;




export default function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { theme, setTheme } = useTheme();
    const location = useLocation();

    //-- Active class for navigation
    const getClassNames = (href: string) => {
        if(location.pathname === href){
            return 'p-2 text-sm/6 font-semibold text-grey-900  dark:text-white border-b-2 border-b-2 border-sky-500';
        }else{
            return 'p-2 text-sm/6 font-semibold text-grey-900  dark:text-white border-b-2 border-transparent hover:border-b-2 hover:border-sky-500';
        }     
    }
    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Trev Killick</span>
                        <img
                            alt="Tailwind Logo - Placeholder Logo"
                            height="32px"
                            width="38px"
                            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=700"
                            className="h-8 w-auto"
                        />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                {navigation.length > 0 && (
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item,idx) => item.showInNavBar && (
                            <Link to={item.href} key={idx} className={getClassNames(item.href)}>
                                {item.name}
                            </Link>
                        ))}
                    </div>)}
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Menu as="div" className="relative ml-3">
                        <div className=" flex items-center">
                            <label className="sr-only" id="label-theme" htmlFor="theme-toggle">Theme</label>
                            <MenuButton id='theme-toggle' aria-labelledby='label-theme'>
                                <span className="dark:hidden">
                                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                                        <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" className="fill-sky-400/20 stroke-sky-500"></path>
                                        <path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" className="stroke-sky-500"></path>
                                    </svg>
                                </span>
                                <span className="hidden dark:inline">
                                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z" className="fill-sky-400/20"></path>
                                        <path d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z" className="fill-sky-500"></path>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z" className="fill-sky-500"></path>
                                    </svg>
                                </span>
                            </MenuButton>
                        </div>
                        <MenuItems
                            transition
                            className="absolute z-50 top-full right-0 bg-white rounded-lg ring-1 ring-slate-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-slate-700 font-semibold dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-300"
                        >
                            <MenuItem key="light" >
                                <div className={theme === Theme.Light ? 'py-1 px-2 flex items-center cursor-pointer data-[focus]:bg-slate-50 dark:data-[focus]:bg-slate-600/30 text-sky-500' : 'py-1 px-2 flex items-center data-[focus]:bg-slate-50 dark:data-[focus]:bg-slate-600/30'} onClick={() => setTheme(Theme.Light)} onKeyDown={() => setTheme(Theme.Light)}  role="button" tabIndex={0}>
                                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 mr-2">
                                        <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" className={theme === 'Light' ? "fill-sky-400/20 stroke-sky-500" : "stroke-slate-400 dark:stroke-slate-500"}></path>
                                        <path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" className={theme === Theme.Light ? "stroke-sky-500" : "stroke-slate-400 dark:stroke-slate-500"}></path>
                                    </svg>Light
                                </div>
                            </MenuItem>
                            <MenuItem>
                                <div className={theme === Theme.Dark ? 'py-1 px-2 flex items-center cursor-pointer data-[focus]:bg-slate-50 dark:data-[focus]:bg-slate-600/30 text-sky-500' : 'py-1 px-2 flex items-center data-[focus]:bg-slate-50 dark:data-[focus]:bg-slate-600/30'} onClick={() => setTheme(Theme.Dark)} onKeyDown={() => setTheme(Theme.Dark)}  role="button" tabIndex={0}>
                                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 mr-2">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z" className={theme === Theme.Dark ? "400/20" : "fill-transparant"}></path>
                                        <path d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z" className={theme === Theme.Dark ? "fill-sky-500" : "fill-slate-400 dark:fill-slate-500"}></path>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z" className={theme === Theme.Dark ? "fill-sky-500" : "fill-slate-400 dark:fill-slate-500"}></path>
                                    </svg>Dark
                                </div>
                            </MenuItem>
                            <MenuItem>
                                <div className={theme === Theme.System ? 'py-1 px-2 flex items-center cursor-pointer data-[focus]:bg-slate-50 dark:data-[focus]:bg-slate-600/30 text-sky-500' : 'py-1 px-2 flex items-center cursor-pointer  data-[focus]:bg-slate-50 dark:data-[focus]:bg-slate-600/30'} onClick={() => setTheme(Theme.System)} onKeyDown={() => setTheme(Theme.System)}  role="button" tabIndex={0}>
                                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 mr-2">
                                        <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z" strokeWidth="2" strokeLinejoin="round" className={theme === Theme.System ? "fill-sky-400/20 stroke-sky-500" : "stroke-slate-400 dark:stroke-slate-500"}></path>
                                        <path d="M14 15c0 3 2 5 2 5H8s2-2 2-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={theme === Theme.System ? "stroke-sky-500" : "stroke-slate-400 dark:stroke-slate-500"}></path>
                                    </svg>System
                                </div>
                            </MenuItem>
                        </MenuItems>
                    </Menu>
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Trev Killick</span>
                            <img
                                alt=""
                                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                                className="h-8 w-auto"
                            />
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-400"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/25">
                            <div className="space-y-2 py-6">
                                {navigation.map((item,idx) => (
                                    <Link to={item.href} key={idx} className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-800">
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>

    )
}