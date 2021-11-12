import Link from 'next/link'

export default function Homepage() {

    return (
        <main className="max-w-full flex-1 relative overflow-y-auto focus:outline-none rounded-3xl bg-white">
            <div className="homeTop rounded-md bg-white">
                <img src="/assets/swirls.png" alt="colored swirls" />
                <div className="max-w-5xl block m-auto">
                    <div className="px-5">
                        <div className="text-center">
                            <h1 className="text-5xl md:text-7xl md:pt-10">
                                CREDMARK
                            </h1>
                        </div>
                        <div className="max-w-xl block m-auto">
                            <div className="flex flex-wrap credmark justify-center text-2xl">
                            <img className="px-5" src="/assets/ModelPlatform.png" alt="Image saying 'High integrity data and risk modeling platform'" />
                            </div>
                        </div>
                        <div className="max-w-lg pb-7 block m-auto">
                            <p className="pt-5 text-center"><strong>Credmark</strong> aims to provide <strong>high integrity data</strong> and <strong>risk metrics</strong> through a <strong>transparent, community-driven platform.</strong> By leveraging our community, we provide transparent models and data that can be used to <strong>make better investment decisions.</strong></p>
                            <br/>
                            <p className="text-center"> Read our <Link href="/whitepaper" rel="noreferrer"><span className="cursor-pointer"><strong>White Paper</strong></span></Link> and then join us in <a href="https://discord.com/invite/3dSfMqP3d4" target="_blank" rel="noreferrer"><strong>Discord</strong></a> for discussion and feedback around our <strong>Product, Token,</strong> and soon-to-come <strong>Platform!</strong></p>
                        </div>
                        <div className="grid grid-cols-2 max-w-lg block m-auto jutify-center pb-16">
                            <a href="https://discord.com/invite/BJbYSRDdtr" target="_blank" rel="noreferrer"><img width={300} alt="Discord channel link" className="block m-auto" src="/assets/discord.png" /></a>
                            <a href="https://credmarkhq.gitbook.io/credmark/" target="_blank" rel="noreferrer"><img width={300} alt="Credmark white paper link" className="block m-auto" src="/assets/credmark-white-paper-image.png" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-20 homeBottom">
                <h3 className="credmark text-center text-2xl md:text-3xl pb-5">THE ROADMAP TO
                    <br></br>
                    <span className="text-2xl md:text-5xl">DECENTRALIZATION </span></h3>
                <img className="px-5" src="/assets/roadmap.png" alt="Credmark 3 year roadmap" />
            </div>
        </main>

    )
}