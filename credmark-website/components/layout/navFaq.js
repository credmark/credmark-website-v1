import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import Footer from '../layout/footer'

import { XIcon } from '@heroicons/react/outline'



const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'White Paper', href: '/whitepaper', current: false },
    { name: 'Blog', href: '/blog', current: false },
    { name: 'Media', href: '/media', current: false },
    { name: 'CCR', href: '/crypto-credit-report', current: false },
    { name: 'FAQ', href: '/faq', current: false },
    { name: 'The Team', href: '/team', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function NavFAQ(props) {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div>
            <div className="flex h-screen overflow-hidden max-w-7xl block m-auto">
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="fixed inset-0 flex z-40 md:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed bg-white inset-0 bg-gray-600 bg-opacity-75" />
                        </Transition.Child>
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                                        <button
                                            type="button"
                                            className="ml-1 flex items-center justify-center h-10 w-10"
                                            onClick={() => setSidebarOpen(false)}
                                        >
                                            <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                            <span className="sr-only">Close sidebar</span>
                                        </button>
                                    </div>
                                </Transition.Child>
                                <div className="mt-5 flex-1 h-0 overflow-y-auto">
                                    <nav className="px-2 space-y-1">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                            >
                                                <p className='cursor-pointer bg-gray-100 hover:bg-gray-50 group flex justify-center px-2 py-2 text-base font-medium rounded-md'>{item.name}</p>
                                            </Link>
                                        ))}
                                        <a href='https://app.uniswap.org/#/swap' target="_blank" rel="noreferrer" className='cursor-pointer bg-gray-100 hover:bg-gray-50 group flex justify-center px-2 py-2 text-base font-medium rounded-md'>Buy CMK</a>
                                    </nav>
                                </div>
                            </div>
                        </Transition.Child>
                        <div className="flex-shrink-0 w-14" aria-hidden="true">
                            {/* Dummy element to force sidebar to shrink to fit close icon */}
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}
                <div className="hidden md:flex md:flex-shrink-0">
                    <div className="flex flex-col w-64">
                        {/* Sidebar component, swap this element with another sidebar if you like */}
                        <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
                            <div className="mt-5 flex-grow flex flex-col">
                                <nav className="flex-1 px-2 pt-28 space-y-1 text-right">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                        >
                                            <p className='cursor-pointer group flex flex-row-reverse pr-5 px-2 py-2 text-sm hover:font-medium rounded-md'> {item.name}</p>
                                        </Link>
                                    ))}
                                    <a href='https://app.uniswap.org/#/swap' target="_blank" rel="noreferrer" className='cursor-pointer group flex flex-row-reverse pr-5 px-2 py-2 text-sm active:font-medium rounded-md'>Buy CMK</a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-0 flex-1 overflow-hidden md:mr-40">
                    <div className="relative z-10 h-16 md:h-24">
                        <button
                            type="button"
                            className="pt-2.5 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <svg fill="#3b0065" viewBox="0 0 100 80" width="30" height="30">
                                <rect width="100" height="10"></rect>
                                <rect y="30" width="100" height="10"></rect>
                                <rect y="60" width="100" height="10"></rect>
                            </svg>
                            <span className="sr-only">Open sidebar</span>
                        </button>
                        <div className="grid grid-cols-3 h-24">
                            <div>

                            </div>
                            <div className="hidden md:flex justify-center">
                                <a href="https://credmark.com/" rel="noreferrer"><img width={45} className="flex justify-right pt-6" src="/assets/credmark-logo.png" alt="Credmark Logo" /></a>
                            </div>
                            <div className="flex flex-1 hidden md:flex medium:flex-grow-0 items-center justify-end mr-10 md:pt-2.5 mr-16">
                                <a
                                    href="https://app.credmark.com/"
                                    rel="noopener"
                                >
                                    <img src="/assets/App.png" width={75} alt="App button" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <main className="max-w-full flex-1 mb-2.5 relative overflow-hidden focus:outline-none rounded-4xl bg-white flex">
                        {props.page}
                    </main>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

