import * as React from 'react';
import Link from 'next/link';

const Subscribe = () => {
    return (
        <>
            <div className="bg-black py-10 md:py-20">
                <div className="max-w-8xl block m-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 px-5">
                        <div className="pb-15">
                            <h4 className="text-white text-center text-2lg pb-5 pt-0">Learn more about Credmark</h4>
                            <div className="flex justify-center">
                            <Link href="/reports">
                            <button
                                type="button"
                                className="credmark mr-5 mt-5 inline-flex items-center px-4 py-2 shadow-sm text-sm font-medium rounded-md text-white bg-purple"
                            >
                                Documentation
                            </button>
                            </Link>
                            <a href="mailto:contact@credmark.com" target="_blank" rel="noreferrer">
                            <button
                                type="button"
                                className="credmark mt-5 inline-flex items-center px-4 py-2 shadow-sm text-sm font-medium rounded-md text-purple bg-white"
                            >
                                Get in touch
                            </button>
                            </a>
                            </div>
                        </div>
                        <div className="ml-15">
                            <p className="credmark text-center md:text-left text-white text-base pt-16 md:pt-0">Newsletter</p>
                            <p className="text-white text-center md:text-left text-base">For the latest partnerships, community updates and more</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Subscribe;