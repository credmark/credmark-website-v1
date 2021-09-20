import Footer from '../layout/footer'
import Fade from "react-reveal/Fade";

export default function Media() {
    return (
        <main className="flex-1 absolute overflow-y-auto focus:outline-none rounded-md">
            <div className="rounded-md triangletest">
                <div className="px-5 py-10 md:pt-28 md:px-40">
                    <h1 className="text-center py-5 font-bold text-4xl md:text-6xl">
                        CREDMARK
                        <br></br>
                        IN THE MEDIA
                    </h1>
                    <div className="grid grid-cols-1 block m-auto bg-scroll h-80 md:pt-10">
                        <div className="border-2 rounded-3xl bg-white overflow-auto px-5">
                            <a href="https://www.coindesk.com/markets/2021/06/03/crypto-credit-rating-firm-credmark-pivots-to-modeling-defi-protocol-risks/" target="_blank" rel="noreferrer"><img width={450} className="block m-auto py-5" src="/assets/coindesk.jpg" alt="Coindesk article about Toucan"></img></a>
                            <a href="https://medium.com/api3/announcing-the-api3-partnership-with-credmark-72d45c976375" target="_blank" rel="noreferrer"><img width={450} className="block m-auto py-5" src="/assets/api3.jpg" alt="API3 article about Credmark"></img></a>
                            <a href="https://www.businesslive.co.za/bd/markets/2021-07-02-native-how-hedge-funds-are-earning-up-to-20-a-year-on-usd-deposits/" target="_blank" rel="noreferrer"><img width={450} className="block m-auto py-5" src="/assets/business-day.jpg" alt="Business Day article about Toucan"></img></a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 md:py-20">
                        <div>
                            <Fade>
                                <h2 className="text-center credmark py-5 font-bold text-4xl md:text-6xl md:text-left">
                                    CRYPTO
                                    <br></br>
                                    CREDIT
                                    <br></br>
                                    REPORT
                                </h2>
                            </Fade>
                            <p className="pb-5 md:text-left">Archive of Credmark&apos; s quarterly reports - definitive aggregate insights on the state of the cryptop credit industry.</p>
                        </div>
                        <Fade>
                            <div className="text-center">
                                <p className="text-2xl">2020</p>
                                <a href="https://reports.credmark.com/TheCryptoCreditReport-q4-2020.pdf" target="_blank" rel="noreferrer"><p className="py-1.5">Year End Report</p></a>
                                <a href="https://reports.credmark.com/TheCryptoCreditReport-q3-2020.pdf" target="_blank" rel="noreferrer"><p className="py-1.5">Q3 Report</p></a>
                                <a href="https://reports.credmark.com/TheCryptoCreditReport-q2-2020.pdf" target="_blank" rel="noreferrer"><p className="py-1.5">Q2 Report</p></a>
                                <a href="https://reports.credmark.com/TheCryptoCreditReport-q1-2020.pdf" target="_blank" rel="noreferrer"><p className="py-1.5">Q1 Report</p></a>
                                <p className="text-2xl pt-10">2019</p>
                                <a href="https://reports.credmark.com/TheCryptoCreditReport-q4-2019.pdf" target="_blank" rel="noreferrer"><p className="py-1.5">Year End Report</p></a>
                                <a href="https://reports.credmark.com/TheCryptoCreditReport-q3-2019.pdf" target="_blank" rel="noreferrer"><p className="py-1.5">Q3 Report</p></a>
                                <a href="https://reports.credmark.com/TheCryptoCreditReport-q2-2019.pdf" target="_blank" rel="noreferrer"><p className="py-1.5">Q2 Report</p></a>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}