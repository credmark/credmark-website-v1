export default function Media() {
    return (
        <main className="flex-1 absolute overflow-y-auto focus:outline-none rounded-md bg-white h-screen">
                    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen md:p-40">
                        <div>
                            <h2 className="text-center credmark text-4xl md:text-5xl md:text-left">
                                CRYPTO
                                <br></br>
                                CREDIT
                                <br></br>
                                REPORT
                            </h2>
                            <p className="pb-5 md:text-left">Archive of Credmark&apos; s quarterly reports - definitive aggregate insights on the state of the cryptop credit industry.</p>
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
        </main>
    )
}