export default function Homepage() {

    return (
        <main className="flex-1 relative overflow-y-auto focus:outline-none rounded-3xl bg-white">
            <div className="homeTop rounded-md">
                <img src="/assets/swirls.png" alt="colored swirls" />
                <div className="max-w-5xl block m-auto">
                    <div className="px-5">
                        <div className="text-center">
                            <h1 className="py-5 text-5xl md:text-7xl md:pt-10">
                                CREDMARK
                            </h1>
                        </div>
                        <div className="rounded-full border-2 max-w-xl block m-auto">
                            <div className="hidden md:flex flex-wrap py-5 credmark justify-center text-2xl">
                                <p className="text-right">HIGH INTEGRITY
                                    <br></br>
                                    DEFI DATA</p>
                                <p className="px-2">+</p>
                                <p>HIGH INTEGRITY
                                    <br></br>
                                    DEFI DATA</p>
                            </div>
                            <div className="md:hidden flex flex-wrap py-5 credmark justify-center text-xl">
                                <p className="text-center">
                                    HIGH INTEGRITY
                                    <br></br>
                                    DEFI DATA
                                    <br></br>
                                    +
                                    <br></br>
                                    HIGH INTEGRITY
                                    <br></br>
                                    DEFI DATA</p>
                            </div>
                        </div>
                        <div className="max-w-lg pb-12 md:mb-10 block m-auto">
                            <p className="pt-10 pb-5 text-center">Credmark provides high-integrity data through a community-driven platform. Our data and models will help users make better investment decisions.</p>
                            <p className="text-center"> Read our White Paper and then join us in Discord for discussion and,feedback around our Product, Token, and soon-to-come Platform!</p>
                        </div>
                        <div className="grid grid-cols-2 max-w-lg block m-auto jutify-center pb-16">
                            <a href="https://discord.com/invite/BJbYSRDdtr" target="_blank" rel="noreferrer"><img width={300} alt="Discord channel link" className="block m-auto" src="/assets/discord.png" /></a>
                            <a href="https://credmarkhq.gitbook.io/credmark/" target="_blank" rel="noreferrer"><img width={300} alt="Credmark white paper link" className="block m-auto" src="/assets/credmark-white-paper-image.png" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-20 pt-10 homeBackground border-2">
                <div className="max-w-xl block m-auto">

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 max-w-2xl block m-auto">
                    <img />
                    <a href="https://blog.credmark.com/credmarks-uniswap-v3-hackathon-announcement-70dd71cb60e9" target="_blank" rel="noreferrer"><img className="md:pt-80" src="/assets/hackathon-button.png" alt="Credmark hackathon button" /></a>
                </div>
            </div>
            <div className="py-20 homeBottom">
                <h3 className="credmark text-center text-2xl md:text-3xl pb-5">THE ROADMAP TO
                    <br></br>
                    <span className="text-2xl md:text-5xl">DECENTRALIZATION </span></h3>
                <img src="/assets/roadmap.png" alt="Credmark 3 year roadmap" />
            </div>
        </main>

    )
}