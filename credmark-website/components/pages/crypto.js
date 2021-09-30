export default function Media() {
    return (
        <main className="flex-1 overflow-y-auto focus:outline-none rounded-md bg-white">
            <div>
                <div className="grid grid-cols-1 xl:grid-cols-2 md:p-10 lg:pt-40 lg:px-40 2xl:pt-96">
                    <div>
                        <h2 className="text-center credmark text-4xl md:text-5xl xl:text-left pt-10 md:pt-0">
                            CRYPTO
                            <br></br>
                            CREDIT
                            <br></br>
                            REPORT
                        </h2>
                        <p className="pt-5 px-10 md:px-0 text-center xl:text-left pb-5">Archive of Credmark&apos; s quarterly reports - definitive aggregate insights on the state of the cryptop credit industry.</p>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl font-bold">2020</p>
                        <a href="https://reports.credmark.com/TheCryptoCreditReport-q4-2020.pdf" target="_blank" rel="noreferrer"><p className="py-1.5">Year End Report</p></a>
                        <a href="https://reports.credmark.com/TheCryptoCreditReport-q3-2020.pdf" target="_blank" rel="noreferrer"><p className="py-1.5">Q3 Report</p></a>
                        <a href="https://reports.credmark.com/TheCryptoCreditReport-q2-2020.pdf" target="_blank" rel="noreferrer"><p className="py-1.5">Q2 Report</p></a>
                        <a href="https://reports.credmark.com/TheCryptoCreditReport-q1-2020.pdf" target="_blank" rel="noreferrer"><p className="py-1.5">Q1 Report</p></a>
                        <p className="text-2xl pt-10 font-bold">2019</p>
                        <a href="https://reports.credmark.com/TheCryptoCreditReport-q4-2019.pdf" target="_blank" rel="noreferrer"><p className="py-1.5">Year End Report</p></a>
                        <a href="https://reports.credmark.com/TheCryptoCreditReport-q3-2019.pdf" target="_blank" rel="noreferrer"><p className="py-1.5">Q3 Report</p></a>
                        <a href="https://reports.credmark.com/TheCryptoCreditReport-q2-2019.pdf" target="_blank" rel="noreferrer"><p className="py-1.5">Q2 Report</p></a>
                    </div>
                    </div>
                    <div className="w-full">
                        <img id="whitepaper" src="/assets/sky.png" alt="Credmark White Paper"></img>
                    </div>
            </div>
        </main>
    )
}