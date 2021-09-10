export default function Whitepaper() {

    return (
        <>
            <div className="homeTop rounded-md">
                <img src="/assets/swirls.png" alt="colored swirls" />
                <div className="max-w-5xl block m-auto">
                    <div className="px-5">
                        <div className="text-center">
                            <h1 className="credmark py-5 font-bold text-7xl md:pt-10">
                                WHITEPAPER
                            </h1>
                        </div>
                        <div className="rounded-full border-2 max-w-2xl block m-auto">
                            <div className="flex flex-wrap py-5 credmark justify-center text-xl">
                                <p>HIGH INTEGRITY DEFI DATA</p>
                                <p className="px-2">+</p>
                                <p>HIGH INTEGRITY DEFI DATA</p>
                            </div>
                        </div>
                        <div className="max-w-lg pb-12 md:mb-10 block m-auto">
                            <p className="pt-10 pb-5 text-center">Credmark provides high-integrity data through a community-driven platform. Our data and models will help users make better investment decisions.</p>
                            <p className="text-center"> Read our White Paper and then join us in Discord for discussion and,feedback around our Product, Token, and soon-to-come Platform!</p>
                        </div>
                        <div className="grid grid-cols-2 max-w-lg block m-auto jutify-center pb-16">
                            <a href="https://discord.com/invite/BJbYSRDdtr" target="_blank" rel="norefferer"><img width={300} alt="Discord channel link" className="block m-auto" src="/assets/discord.png" /></a>
                            <a href="https://credmarkhq.gitbook.io/credmark/" target="_blank" rel="norefferer"><img width={300} alt="Credmark white paper link" className="block m-auto" src="/assets/credmark-white-paper-image.png" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-20 pt-10 homeBackground border-2">
                <div className="max-w-xl block m-auto">
                    <a href="https://www.credmark.com/blog/liquidity-swap-drop" rel="norefferer"><img src="/assets/releaseCMK.png" alt="Release of CMK" /></a>
                    <a href="https://credmarkhq.gitbook.io/credmark/tokenomics/cmk" target="_blank" rel="norefferer"><img src="/assets/utilityCMK.png" alt="Utility of CMK" /></a>
                </div>
                <p className="text-thin text-center text-xl">AVAILABLE MARKETS</p>
                <div className="grid grid-cols-2 max-w-2xl block m-auto">
                    <a href="https://app.uniswap.org/" rel="norefferer"><img src="/assets/ethCMK.png" alt="CMK ETH" /></a>
                    <a href="https://app.uniswap.org/" rel="norefferer"><img src="/assets/usdcCMK.png" alt="CMK ETH" /></a>
                </div>
            </div>
            <div className="py-20 homeBottom">
                <h3 className="credmark text-center text-lg md:text-3xl font-semibold pb-5">THE ROADMAP TO
                    <br></br>
                    <span className="font-bold text-2xl md:text-5xl">DECENTRALIZATION </span></h3>
                <img src="/assets/roadmap.png" alt="Credmark 3 year roadmap" />
            </div>
        </>

    )
}