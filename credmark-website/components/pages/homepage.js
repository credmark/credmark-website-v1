import Link from 'next/link'
import HeaderHome from "../layout/headerHome"
import Subscribe from '../subscribe/subscribe'
import Footer from '../layout/footer'
import React, { useState } from "react";
import HomeReportsMenu from '../filters/homeReportsMenu'
import HomeReportsButton from '../filters/homeReportsButton'
import items from "../../styles/homeReportsData"

const allCategories = ['All', ...items.map(item => item.category)];

export default function Homepage() {
    const [menuItem, setMenuItem] = useState(items);
    const [buttons, setButtons] = useState([allCategories]);

    const filter = (button) => {

        if (button === 'All') {
            setMenuItem(items);
            return;
        }

        const filteredData = items.filter(item => item.category === button);
        setMenuItem(filteredData)
    }

    return (
        <>
            <div>
                <HeaderHome
                    title="MANAGE DEFI RISK"
                    description="A risk ecosystem powered by reliable data, original research, and an engaged community reducing risk for everyone."
                    url="#what-is-credmark" />
                <div className="swirls">
                    <img src="/assets/swirls-transparent.png" alt="colored swirls" />
                </div>
            </div>
            <div>
            </div>
            <div>
                <div className="max-w-7xl block m-auto">
                    <div className="px-5">
                        <div className="text-center">
                            <strong><h3 id="what-is-credmark" className="font-extrabold text-5xl md:text-4xl pt-10">
                                WHAT IS CREDMARK?
                            </h3>
                            </strong>
                        </div>
                        <div className="max-w-4xl pb-7 block m-auto">
                            <p className="pt-5 text-center text-base">Credmark is a community-driven project that connects data providers, risk modelers and DeFi users.</p>
                            <p className="text-center text-base">Our community curates crypto data, develop risk management tools, and publish industry leading research.</p>
                        </div>
                        <div className="max-w-4xl block m-auto pb-16">
                            <img alt="What is Credmark graph" className="hidden md:flex block m-auto" src="/assets/what-is-credmark.png" />
                            <img alt="What is Credmark graph" className="flex md:hidden block m-auto" src="/assets/what-is-credmark-mobile.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="light-pink-bg">
                <div className="max-w-7xl block m-auto">
                    <div className="px-5">
                        <div className="text-center">
                            <strong><h3 className="font-extrabold text-5xl md:text-4xl pt-10">
                                HOW IT WORKS
                            </h3>
                            </strong>
                        </div>
                        <div className="max-w-4xl pb-7 block m-auto">
                            <p className="pt-5 text-center text-base">Access data, build risk applications and de-risk your DeFi experience.</p>
                        </div>
                        <div className="max-w-4xl block m-auto pb-16">
                            <img alt="Discord channel link" className="hidden md:flex block m-auto" src="/assets/how-credmark-works.png" />
                            <img alt="Discord channel link" className="flex md:hidden block m-auto" src="/assets/how-it-works-mobile.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl block m-auto">
                <div className="px-5">
                    <div className="text-center">
                        <strong>
                            <h3 className="font-extrabold text-4xl pt-20 md:pt-10">
                                UNCOVERING DEFI RISKS
                            </h3>
                        </strong>
                    </div>
                    <div className="max-w-3xl block m-auto">
                        <p className="pt-5 text-center text-base">Credmark&apos;s community curates high-integrity data, develops risk tools, and produces research on crypto assets, protocols, and markets.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 py-10 px-5 md:px-20 block m-auto max-w-6xl pt-16 md:py-20">
                    <div className="order-2 md:order-1">
                        <a href="https://app.credmark.com/" target="_blank" rel="noreferrer"><img alt="Credmark Risk Terminal" className="md:pr-10 max-h-80 md:max-h-full" src="/assets/risk-terminal-test.svg" /></a>
                    </div>
                    <div className="md:pt-5 order-1 md:order-2">
                        <p>Risk Platform</p>
                        <p className="credmark text-2xl py-5 text-base">Risk Terminal</p>
                        <p className="pt-5 text-base">Visualize risk levels across different protocols with intuitive graphs to stay informed on solvency and liquidity risks.</p>
                        <a href="https://app.credmark.com/" target="_blank" rel="noreferrer">
                            <button
                                type="button"
                                className="border-2 uppercase my-5 inline-flex items-center px-7 py-2 shadow-sm text-sm font-medium rounded-md text-white bg-credmarkpurple hover:text-credmarkpurple hover:bg-white"
                            >
                                View Terminal
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="riskEncyclopedia">
                <div className="grid grid-cols-1 md:grid-cols-2 py-10 px-5 md:px-20 block m-auto max-w-6xl">
                    <div>
                        <p className="text-white">Research</p>
                        <p className="credmark text-2xl text-white py-5 text-base">Risk Library</p>
                        <p className="text-white pt-5 text-base">Discover how to evaluate risks in DeFi by applying traditional and updated metrics to assets, protocols, and markets.</p>
                        <a href="https://docs.credmark.com/credmark-risk-library/" target="_blank" rel="noreferrer">
                            <button
                                type="button"
                                className="border-2 border-white uppercase my-5 inline-flex items-center px-7 py-2 shadow-sm text-sm font-medium rounded-md text-white hover:bg-white hover:text-credmarkpurple"
                            >
                                Open library
                            </button>
                        </a>
                    </div>
                    <div>
                        <a href="https://docs.credmark.com/credmark-risk-library/" target="_blank" rel="noreferrer"><img alt="Credmark Risk Library" className="max-h-72 md:max-h-80 block m-auto" src="/assets/encyclopedia.png" /></a>
                    </div>
                </div>
            </div>
            <div>
                <div className="px-5 py-10 md:pt-20 md:pb-10">
                    <strong>
                        <h2 className="max-w-7xl block m-auto font-extrabold text-center text-5xl md:text-4xl">
                            PARTNERS
                        </h2>
                    </strong>
                </div>
                <div className="max-w-4xl block m-auto">
                    <div className="grid grid-cols-1 m-auto block md:grid-cols-3 px-5 pb-0 md:pb-10">
                    <a href="https://dlab.vc/" target="_blank" rel="noreferrer"><img className="py-5" width={150} src="../assets/dlab-logo.svg" alt="DLAB logo" /></a>
                    <a href="https://www.longhash.com/en" target="_blank" rel="noreferrer"><img className="py-5 md:py-10" width={150} src="../assets/longhash-logo.svg" alt="Long Hash Ventures logo" /></a>
                    <a href="https://api3.org/" target="_blank" rel="noreferrer"><img className="py-5 md:py-10" width={150} src="../assets/API3-logo.svg" alt="API3 logo" /></a>
                    </div>
                    <div className="grid grid-cols-1 m-auto block md:grid-cols-4 px-5 pb-10 md:pb-20 md:px-0">
                    <a href="https://steadystate.finance/" target="_blank" rel="noreferrer"><img className="py-5" width={200} src="../assets/steady-state-logo.svg" alt="Steady State logo" /></a>
                    <a href="https://coinshift.xyz/" target="_blank" rel="noreferrer"><img className="py-5" width={150} src="../assets/Coinshift.svg" alt="Coinshift logo" /></a>
                    <a href="https://www.yield.app/" target="_blank" rel="noreferrer"><img className="py-5" width={150} src="../assets/yieldapp-logo.svg" alt="Yield App logo" /></a>
                    <a href="https://www.alchemist.wtf/" target="_blank" rel="noreferrer"><img className="py-5" width={180} src="../assets/alchemist.svg" alt="Alchemist logo" /></a>
                    </div>
                </div>
            </div>
            <Subscribe />
            <Footer />
        </>
    )
}