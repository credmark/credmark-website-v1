import Link from 'next/link'
import HeaderHome from "../layout/headerHome"
import Subscribe from '../layout/subscribe'
import Footer from '../layout/footer'
import CCRCard from '../ccr/ccr-card'
import React, { useState } from "react";



export default function Homepage() {

    return (
        <>
            <div>
                <HeaderHome
                    title="Manage DeFi Risks"
                    description="DeFi is rife with hidden risks, but our tools help YOU navigate the sea of risk"
                    url="#what-is" />
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
                            <h3 id="what-is" className="credmark text-5xl md:text-4xl pt-10">
                                What is Credmark?
                            </h3>
                        </div>
                        <div className="max-w-4xl pb-7 block m-auto">
                            <p className="pt-5 text-center">Credmark is a community-driven project that connects data providers, risk modelers and DeFi users.
                                Our community curates crypto data, develop risk management tools, and publish industry leading research.</p>
                        </div>
                        <div className="max-w-4xl block m-auto pb-16">
                            <img alt="What is Credmark graph" className="hidden md:flex block m-auto" src="/assets/what-is-credmark.png" />
                            <img alt="What is Credmark graph" className="flex md:hidden block m-auto" src="/assets/what-is-credmark-mobile.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl block m-auto">
                <div className="px-5">
                    <div className="text-center">
                        <h3 className="credmark text-5xl md:text-4xl pt-10">
                            How it works
                        </h3>
                    </div>
                    <div className="max-w-4xl pb-7 block m-auto">
                        <p className="pt-5 text-center">Access data, build risk applications and de-risk your DeFi experience in one ecosystem.</p>
                    </div>
                    <div className="max-w-4xl block m-auto pb-16">
                        <img alt="Discord channel link" className="hidden md:flex block m-auto" src="/assets/how-credmark-works.png" />
                        <img alt="Discord channel link" className="flex md:hidden block m-auto" src="/assets/how-credmark-works-mobile.png" />
                    </div>
                </div>
            </div>
            <div className="max-w-7xl block m-auto">
                <div className="px-5">
                    <div className="text-center">
                        <h3 className="credmark text-4xl md:pt-10">
                            Uncovering DeFi Risks
                        </h3>
                    </div>
                    <div className="max-w-3xl pb-16 md:pb-20 block m-auto">
                        <p className="pt-5 text-center">Credmark’s ecosystem curates high integrity data and utilises the data to produce the risk encyclopedia and research on DeFi risks, protocol risks, and the overarching crypto credit industry.</p>
                    </div>
                </div>
            </div>
            <div className="riskEncyclopedia">
                <div className="grid grid-cols-1 md:grid-cols-2 py-10 px-5 md:px-20 block m-auto max-w-7xl">
                    <div>
                        <p className="text-white">Research</p>
                        <p className="credmark text-2xl text-white py-5">Risk Library</p>
                        <p className="text-white pt-5">Discover the industry standards for DeFi risks - learn how it is  assesed and matricized to safeguard your assets.</p>
                        <a href="https://docs.credmark.com/credmark-risk-library/" target="_blank" rel="noreferrer">
                            <button
                                type="button"
                                className="border-2 border-white credmark my-5 md:mt-16 inline-flex items-center px-7 py-2 shadow-sm text-sm font-medium rounded-md text-white"
                            >
                                Open library
                            </button>
                        </a>
                    </div>
                    <div>
                        <a href="https://docs.credmark.com/credmark-risk-library/" target="_blank" rel="noreferrer"><img alt="Credmark Risk Library" className="md:max-h-80 block m-auto" src="/assets/encyclopedia.png" /></a>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl block m-auto py-20">
                <div className="px-5">
                    <div className="text-center">
                        <h3 className="credmark text-5xl md:text-4xl py-5">
                            Reports
                        </h3>
                        <div className="px-5 max-w-5xl md:m-auto">
                            <div className="pt-10 block m-auto md:m-auto space-x-5 pb-10">
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3">
                            <CCRCard
                                title="Idle Finance Report"
                                url="https://docs.credmark.com/credmark-risk-library/yield-aggregators/idle-finance" />
                            <CCRCard
                                title="2020 Year End Report"
                                url="https://s3.amazonaws.com/reports.credmark.com/TheCryptoCreditReport-Q4-2020.pdf" />
                            <CCRCard
                                title="2020 Q3"
                                url="https://s3.amazonaws.com/reports.credmark.com/TheCryptoCreditReport-Q3-2020.pdf" />
                        </div>
                        <div className="flex justify-center pt-10">
                            <Link href="/reports">
                                <p className="credmark cursor-pointer text-center text-md float-left">All reports<img width={40} className="float-right pt-0 pl-5" alt="arrow right" src="../assets/Arrow-1.svg" /></p>
                            </Link>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
            <div className="bg-purple pt-10 px-5 md:px-20">
                <div>
                    <p className="credmark text-2xl text-center text-white py-5">DeFi Data Created For Industry Agnostic Application</p>
                    <p className="text-white text-center max-w-2xl block m-auto">Credmark’s Data is collected via proprietary blockchain ETL through the platform. All data is indexed so filters can be applied to optimize for accuracy.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 max-w-5xl block m-auto pt-10 pb-20 px-5 md:px-20 lg:space-x-8">
                    <div>
                        <img alt="Discord channel link" className="h-80 mt-10 md:mt-0" src="/assets/crypto-data.png" />
                    </div>
                    <div className="pt-10 md:pt-20">
                        <h5 className="text-white credmark text-lg">Documentation</h5>
                        <p className="text-white text-sm">See how to integrate the API into your services <br /> or product.</p>
                        <a
                            href="https://app.gitbook.com/o/-MaWsKysgImxTlCSGQdb/s/-MaWoA0QFeF_cQL5NVcu/"
                            target="_blank"
                            rel="noreferrer">
                            <button
                                type="button"
                                className="credmark mt-5 inline-flex items-center px-7 py-2 shadow-sm text-sm font-medium rounded-md text-purple bg-white"
                            >
                                View docs
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <div className="riskEncyclopedia">
                    <div className="grid grid-cols-1 md:grid-cols-2 py-10 px-5 md:px-20 block m-auto max-w-7xl mt-10 lg:my-28">
                        <div className="order-2 md:order-1">
                            <a href="https://app.credmark.com/" target="_blank" rel="noreferrer"><img alt="Credmark App" className="app-image block m-auto md:pr-16" src="/assets/credmark-app.jpg" /></a>
                        </div>
                        <div className="order-1 md:order-2">
                            <p className="credmark text-4xl text-white pb-2.5 pt-10 md:pt-20">Community Powered
                                Risk Tools</p>
                            <p className="credmark text-white pb-2.5">Smartpool</p>
                            <p className="text-white">Our platform empowers modern data modelers to backtest when new models are submitted.  Leading models for various categories will replace older models once it underperforms.</p>
                            <a href="https://app.credmark.com/" target="_blank" rel="noreferrer">
                                <button
                                    type="button"
                                    className="border-2 border-white md:border-transparent md:border-0 credmark my-5 md:mt-5 bg-credmarkpurple inline-flex items-center px-7 py-2 shadow-sm text-sm font-medium rounded-md text-white"
                                >
                                    Enter App
                                </button>
                            </a>
                        </div>

                    </div>
                </div>
                <div className="px-5 py-10 md:pt-20 md:pb-10">
                    <h2 className="max-w-7xl block m-auto credmark text-center text-5xl md:text-4xl">
                        Partners
                    </h2>
                </div>
                <div className="max-w-4xl block m-auto">
                    <div className="grid grid-cols-1 m-auto block md:grid-cols-3 px-5 pb-10 md:pb-20">
                        <img className="py-5" width={150} src="../assets/dlab-logo.svg" alt="DLAB logo" />
                        <img className="py-5" width={150} src="../assets/longhash-logo.svg" alt="Long Hash Ventures logo" />
                        <img className="py-5" width={150} src="../assets/api3-logo.svg" alt="API3 logo" />
                        <img className="py-5" width={200} src="../assets/steady-state-logo.svg" alt="Solidity Ventures logo" />
                        <img className="py-5" width={150} src="../assets/Coinshift.svg" alt="Coinshift logo" />
                        <img className="py-5" width={150} src="../assets/yieldapp-logo.svg" alt="Spark Digital Capital logo" />
                    </div>
                </div>
            </div>
            <Subscribe />
            <Footer />
        </>
    )
}