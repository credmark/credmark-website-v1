import Footer from '../layout/footer'

export default function Whitepaper() {

    return (
        <>
            <main className="flex-1 relative overflow-y-auto focus:outline-none rounded-md ">
                    <div className="rounded-md">
                        <div className="px-5 py-10 md:pt-28 md:px-40">
                                <h1 className="pt-5 font-light text-5xl md:pt-0">
                                    WHITE PAPER
                                </h1>
                                <p className="py-5">Click below to explore our White Paper and Lite Paper. </p>
                                <p>Our White Paper offers an in-depth look into the Credmark platform - how we generate high integrity data, how our models are built and delivered, and how community-driven governance oversees its maintenance and growth. </p>
                                <p className="italic pt-5">Published May 17, 2021</p>
                                <a href="https://reports.credmark.com/whitepaper.pdf" target="_blank" rel="norefferer"><img width={350} className="block m-auto" src="/assets/credmark-white-paper.png" alt="Credmark White Paper"></img></a>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 block m-auto">
                        <a href="https://reports.credmark.com/litepaper.pdf" target="_blank" rel="norefferer"><img width={350} className="block m-auto" src="/assets/credmark-english-white-paper.png" alt="Credmark White Paper"></img></a>
                        <a href="https://reports.credmark.com/whitepaper.pdf" target="_blank" rel="norefferer"><img width={350} className="block m-auto" src="/assets/credmark-tc-white-paper.png" alt="Credmark White Paper"></img></a>
                        <a href="https://storage.googleapis.com/credmark-cryptocreditreports/Credmark%20Litepaper%20Simplified%20Chinese%20%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87.pdf" target="_blank" rel="norefferer"><img width={350} className="block m-auto" src="/assets/credmark-sc-white-paper.png" alt="Credmark White Paper"></img></a>
                        </div>
                    </div>
                    <Footer />
                </main>
        </>

    )
}