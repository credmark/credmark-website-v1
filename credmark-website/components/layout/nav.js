import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import Footer from '../layout/footer'
import SimpleBar from 'simplebar-react'

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

export default function Nav(props) {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
             <div>
                    <main className="max-w-8xl scrollbar flex-1 mb-2.5 relative overflow-y-scroll focus:outline-none bg-white">
                                {props.page}
                    </main>
                    <Footer />
                </div>
    )
}

