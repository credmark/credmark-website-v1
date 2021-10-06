import Link from 'next/link'

export default function Whitepaper() {

    return (
        <main className="flex-1 relative overflow-y-auto focus:outline-none rounded-4xl bg-white">
            <div className="paperGradient rounded-md bg-white">
                <div className="max-w-5xl block m-auto">
                    <div className="md:pt-16 md:px-28">
                        <div className="text-center md:text-left px-10" >
                        <h1 className="pt-20 font-light text-4xl md:text-5xl md:pt-0">
                            WHITE PAPER
                        </h1>
                        <p className="py-5">Click below to explore our White Paper and Lite Paper. </p>
                        <p>Our White Paper offers an in-depth look into the Credmark platform - how we generate high integrity data, how our models are built and delivered, and how community-driven governance oversees its maintenance and growth. </p>
                        <p className="italic pt-5">Published May 17, 2021</p>
                        </div>
                        <div className="max-w-xl block m-auto">
                            <div className="flex flex-wrap py-5 credmark justify-center text-2xl">
                                <a href="https://reports.credmark.com/whitepaper.pdf" target="_blank" rel="noreferrer"><img width={300} className="block m-auto" src="/assets/credmark-white-paper.png" alt="Credmark White Paper"></img></a>
                            </div>
                        </div>
                        <div className="flex block m-auto md:pb-20 md:px-16">
                            <a href="https://reports.credmark.com/litepaper.pdf" target="_blank" rel="noreferrer"><img id="whitepaper" src="/assets/credmark-english-white-paper.png" alt="Credmark White Paper"></img></a>
                            <a href="https://storage.googleapis.com/credmark-cryptocreditreports/Credmark%20Litepaper%20Simplified%20Chinese%20%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87.pdf" target="_blank" rel="noreferrer"><img id="whitepaper" src="/assets/credmark-tc-white-paper.png" alt="Credmark White Paper"></img></a>
                            <a href="https://storage.googleapis.com/credmark-cryptocreditreports/Credmark%20Litepaper%20Simplified%20Chinese%20%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87.pdf" target="_blank" rel="noreferrer"><img id="whitepaper" src="/assets/credmark-sc-white-paper.png" alt="Credmark White Paper"></img></a>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}