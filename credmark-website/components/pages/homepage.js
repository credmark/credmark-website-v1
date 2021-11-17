import Link from 'next/link'
import HeaderHome from "../layout/headerHome"
import Subscribe from '../layout/subscribe'
import Footer from '../layout/footer'


export default function Homepage() {

    return (
        <>
            <div>
                <HeaderHome
                    title="Manage DeFi Risks"
                    description="DeFi is rife with hidden risks, but our tools help YOU navigate the sea of risk" />
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
                            <h3 className="credmark text-5xl md:text-4xl pt-10">
                                What is Credmark?
                            </h3>
                        </div>
                        <div className="max-w-3xl pb-7 block m-auto">
                            <p className="pt-5 text-center">Credmark is a community-driven project that connects data providers, risk modelers and DeFi users.
                                Our community curates crypto data, develop risk management tools, and publish industry leading research.</p>
                        </div>
                        <div className="grid grid-cols-2 max-w-lg block m-auto jutify-center pb-16">
                            <a href="https://discord.com/invite/BJbYSRDdtr" target="_blank" rel="noreferrer"><img width={300} alt="Discord channel link" className="block m-auto" src="/assets/discord.png" /></a>
                            <a href="https://credmarkhq.gitbook.io/credmark/" target="_blank" rel="noreferrer"><img width={300} alt="Credmark white paper link" className="block m-auto" src="/assets/credmark-white-paper-image.png" /></a>
                        </div>
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
                    <div className="max-w-3xl pb-7 block m-auto">
                        <p className="pt-5 text-center">Credmark’s ecosystem curates high integrity data and utilises the data to produce the risk encyclopedia and research on DeFi risks, protocol risks, and the overarching crypto credit industry.</p>
                    </div>
                </div>
            </div>
            <div className="riskEncyclopedia">
                <div className="grid grid-cols-1 md:grid-cols-2 py-10 px-5 md:px-20 block m-auto max-w-7xl">
                    <div>
                        <p className="text-white">Research</p>
                        <p className="credmark text-2xl text-white py-5">Risk Encyclopedia</p>
                        <p className="text-white pt-5">Discover the industry standards for DeFi risks - learn how it is  assesed and matricized to safeguard your assets.</p>
                        <button
                            type="button"
                            className="border-2 border-white credmark my-5 md:mt-16 inline-flex items-center px-7 py-2 shadow-sm text-sm font-medium rounded-md text-white"
                        >
                            Open library
                        </button>
                    </div>
                    <div>
                        <a href="https://docs.credmark.com/credmark-risk-library/lending-protocols/aave-and-compound-defi-protocols" target="_blank" rel="noreferrer"><img alt="Discord channel link" className="max-h-80 block m-auto" src="/assets/defi-market-risk.png" /></a>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl block m-auto">
                <div className="px-5">
                    <div className="text-center">
                        <h3 className="credmark text-5xl md:text-4xl md:pt-10 py-5">
                            Reports
                        </h3>

                    </div>
                    <div>
                    </div>
                </div>
            </div>
            <div className="bg-purple py-10 px-5 md:px-20">
                <div>
                    <p className="credmark text-2xl text-center text-white py-5">DeFi Data Created For Industry Agnostic Application</p>
                    <p className="text-white text-center max-w-2xl block m-auto">Credmark’s Data is collected via proprietary blockchain ETL through the platform. All data is indexed so filters can be applied to optimize for accuracy.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 bg-purple pt-10 pb-20 px-5 md:px-20 md:space-x-8">
                <div>
                    <h5 className="text-white credmark text-lg">Risk Dashboard</h5>
                    <p className="text-white text-sm">View how our data is used in a risk context with analytics and visuals.</p>
                    <button
                        type="button"
                        className="credmark mt-5 inline-flex items-center px-7 py-2 shadow-sm text-sm font-medium rounded-md text-purple bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        View Dashboard
                    </button>
                </div>
                <div className="pt-10 md:pt-0">
                    <h5 className="text-white credmark text-lg">API Keys</h5>
                    <p className="text-white text-sm">Connect your wallet to access our data. At least holding one CMK token is required.</p>
                    <button
                        type="button"
                        className="credmark mt-5 inline-flex items-center px-7 py-2 shadow-sm text-sm font-medium rounded-md text-purple bg-white"
                    >
                        Access API Keys
                    </button>
                </div>
                <div className="pt-10 md:pt-0">
                    <h5 className="text-white credmark text-lg">Documentation</h5>
                    <p className="text-white text-sm">See how to integrate the API into your services or product.</p>
                    <button
                        type="button"
                        className="credmark mt-5 inline-flex items-center px-7 py-2 shadow-sm text-sm font-medium rounded-md text-purple bg-white"
                    >
                        View docs
                    </button>
                </div>
                <div className="col-span-2">
                    <img alt="Discord channel link" className="block m-auto md:pl-5 pt-5" src="/assets/crypto-data.png" />
                </div>
            </div>
            <div>
                <div className="px-5 py-10 md:pt-20 md:pb-10">
                    <h2 className="max-w-7xl block m-auto credmark text-center text-5xl md:text-4xl">
                        Partners
                    </h2>
                </div>
                <div className="max-w-4xl block m-auto">
                    <div className="grid grid-cols-2 m-auto block md:grid-cols-3 px-5 pb-10 md:pb-20">
                        <img className="py-5" width={150} src="../assets/dlab-logo.svg" alt="DLAB logo" />
                        <img className="py-5" width={150} src="../assets/long-hash-logo.svg" alt="SOSV logo" />
                        <img className="py-5" width={150} src="../assets/api-3-logo.svg" alt="Long Hash Ventures logo" />
                        <img className="py-5" width={200} src="../assets/steady-state-logo.svg" alt="Solidity Ventures logo" />
                        <img className="py-5" width={150} src="../assets/coinshift-logo.svg" alt="GBV logo" />
                        <img className="py-5" width={150} src="../assets/yieldapp-logo.svg" alt="Spark Digital Capital logo" />
                    </div>
                </div>
            </div>
            <Subscribe />
            <Footer />
        </>
    )
}