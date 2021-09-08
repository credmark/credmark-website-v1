import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'

const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'White Paper', href: '#', current: false },
    { name: 'Blog', href: '/blog', current: false },
    { name: 'Media/CCR', href: '#', current: false },
    { name: 'FAQ', href: '#', current: false },
    { name: 'The Team', href: '#', current: false },
    { name: 'Buy CMK', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className="h-screen flex overflow-hidden bg-gray-100">
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
                        <Dialog.Overlay className="fixed bg-purple inset-0 bg-gray-600 bg-opacity-75" />
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
                        <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
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
                                        className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                        onClick={() => setSidebarOpen(false)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" enable-background="new 0 0 40 40">
                                            <line x1="15" y1="15" x2="25" y2="25" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-miterlimit="10"></line>
                                            <line x1="25" y1="15" x2="15" y2="25" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-miterlimit="10"></line>
                                            <circle cx="20" cy="20" r="19" opacity="0" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-miterlimit="10" fill="none"></circle>
                                            <path d="M20 1c10.45 0 19 8.55 19 19s-8.55 19-19 19-19-8.55-19-19 8.55-19 19-19z" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-miterlimit="10" fill="none"></path>
                                        </svg>
                                        <span className="sr-only">Close sidebar</span>
                                    </button>
                                </div>
                            </Transition.Child>
                            <div className="flex-shrink-0 flex items-center px-4">
                                <img
                                    className="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                                    alt="Workflow"
                                />
                            </div>
                            <div className="mt-5 flex-1 h-0 overflow-y-auto">
                                <nav className="px-2 space-y-1">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current
                                                    ? 'bg-gray-100'
                                                    : 'hover:bg-gray-50',
                                                'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                                            )}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
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
                    <div className="flex flex-col flex-grow pt-5 pb-4 bg-white overflow-y-auto">
                        <div className="mt-5 flex-grow flex flex-col">
                            <nav className="flex-1 px-2 pt-16 bg-white space-y-1 text-right">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-gray-100' : 'hover:bg-gray-50 hover:text-gray-900',
                                            'group flex flex-row-reverse pr-5 px-2 py-2 text-sm font-medium rounded-md'
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-0 flex-1 overflow-hidden">
                <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
                    <button
                        type="button"
                        className="px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <svg viewBox="0 0 100 80" width="40" height="40">
                            <rect width="100" height="10"></rect>
                            <rect y="30" width="100" height="10"></rect>
                            <rect y="60" width="100" height="10"></rect>
                        </svg>
                        <span className="sr-only">Open sidebar</span>
                    </button>
                    <div className="flex-1 px-4 flex justify-between">
                        <div className="flex-1 flex">
                            <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                                <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <main className="flex-1 relative overflow-y-auto focus:outline-none rounded-md">
                    <div className="rounded-md">
                        <img src="./assets/swirls.png" alt="colored swirls" />
                        <div className="px-5">
                            <div className="text-center text-xl">
                                <h1 className="pt-5 font-bold text-5xl md:pt-0">
                                    CREDMARK
                                </h1>
                            </div>
                            <div className="max-w-md block m-auto pb-12 md:pb-24">
                                <p className="pt-10 pb-5 text-center">Credmark provides high-integrity data through a community-driven platform. Our data and models will help users make better investment decisions. </p>
                                <p className="text-center"> Read our White Paper and then join us in Discord for discussion and,feedback around our Product, Token, and soon-to-come Platform!</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}