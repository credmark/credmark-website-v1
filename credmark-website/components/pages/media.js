export default function Media() {
    return (
        <main className="flex-1 mb-10 relative overflow-y-auto focus:outline-none rounded-3xl bg-white">
            <div className="homeTop rounded-md text-center px-5">
                <div className="max-w-3xl block m-auto">
                    <h1 className="credmark py-5 font-bold text-2xl md:text-6xl md:pt-10">
                        CREDMARK
                                <br></br>
                                IN THE PRESS
                                </h1>
                    <div className="grid grid-cols-1 block m-auto max-w-5xl block m-auto bg-scroll h-80 md:pt-10">
                        <div className="border-2 rounded-3xl bg-white overflow-auto px-5">
                            <a href="https://www.coindesk.com/markets/2021/06/03/crypto-credit-rating-firm-credmark-pivots-to-modeling-defi-protocol-risks/" target="_blank" rel="norefferer"><img width={450} className="block m-auto py-5" src="/assets/coindesk.jpg" alt="Coindesk article about Toucan"></img></a>
                            <a href="https://medium.com/api3/announcing-the-api3-partnership-with-credmark-72d45c976375" target="_blank" rel="norefferer"><img width={450} className="block m-auto py-5" src="/assets/api3.jpg" alt="API3 article about Toucan"></img></a>
                            <a href="https://www.businesslive.co.za/bd/markets/2021-07-02-native-how-hedge-funds-are-earning-up-to-20-a-year-on-usd-deposits/" target="_blank" rel="norefferer"><img width={450} className="block m-auto py-5" src="/assets/business-day.jpg" alt="Business Day article about Toucan"></img></a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:pt-10">
                        <div>
                            <h2 className="credmark py-5 font-bold text-2xl md:text-6xl md:text-left">
                                CRYPTO
                                <br></br>
                                CREDIT
                                <br></br>
                                REPORT
                                </h2>
                            <p className="pb-5 md:text-left">Archive of Credmark's quarterly reports - definitive aggregate insights on the state of the cryptop credit industry.</p>
                        </div>
                        <div className="text-center"> 
                            <p className="text-2xl">2020</p>
                            <a href="https://reports.credmark.com/TheCryptoCreditReport-q4-2020.pdf" target="_blank" rel="norefferer"><p>Year End Report</p></a>
                            <a href="https://reports.credmark.com/TheCryptoCreditReport-q3-2020.pdf" target="_blank" rel="norefferer"><p>Q3 Report</p></a>
                            <a href="https://reports.credmark.com/TheCryptoCreditReport-q2-2020.pdf" target="_blank" rel="norefferer"><p>Q2 Report</p></a>
                            <a href="https://reports.credmark.com/TheCryptoCreditReport-q1-2020.pdf" target="_blank" rel="norefferer"><p>Q1 Report</p></a>
                            <p className="text-2xl pt-10">2019</p>
                            <a href="https://reports.credmark.com/TheCryptoCreditReport-q4-2019.pdf" target="_blank" rel="norefferer"><p>Year End Report</p></a>
                            <a href="https://reports.credmark.com/TheCryptoCreditReport-q3-2019.pdf" target="_blank" rel="norefferer"><p>Q3 Report</p></a>
                            <a href="https://reports.credmark.com/TheCryptoCreditReport-q2-2019.pdf" target="_blank" rel="norefferer"><p>Q2 Report</p></a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}