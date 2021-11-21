import TeamCard from '../layout/teamCard'
import AdvisorCard from '../layout/advisorCard'
import Header from "../layout/Header"
import Footer from "../layout/footer"
import Subscribe from "../layout/subscribe"
import CCRCard from '../ccr/ccr-card'

export default function Reports() {

    return (
        <>
            <main className="max-w-full flex-1 relative overflow-y-auto focus:outline-none rounded-md bg-white">
                <div className="blogGradient rounded-md">
                    <Header
                        title="Reports"
                        description="Check out the latest insights regarding risk in the DeFi industry" />
                    <div className="px-5 py-10 md:px-10 max-w-6xl md:m-auto">
                        <div className="pt-10 border-b-1 border-gray-700 block m-auto md:m-auto space-x-5 md:space-x-20">
                            <button className="border-b-2 border-transparent hover:border-purple pb-5 pl-5" onClick={() => { setSelectedCategory("all") }}>All</button>
                            <button className="border-b-2 border-transparent hover:border-purple pb-5" onClick={() => { setSelectedCategory("historical-reports") }}>Historical Reports</button>
                            <button className="border-b-2 border-transparent hover:border-purple pb-5" onClick={() => { setSelectedCategory("commisioned-reports") }}>Commisioned Reports</button>
                        </div>
                    </div>
                    <div className="px-5 py-10 md:px-10 max-w-7xl block m-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 block m-auto">
                            <CCRCard
                                title="Idle Finance Report"
                                url="https://docs.credmark.com/credmark-risk-library/yield-aggregators/idle-finance" />
                            <CCRCard
                                title="2020 Year End Report"
                                url="https://s3.amazonaws.com/reports.credmark.com/TheCryptoCreditReport-Q4-2020.pdf" />
                            <CCRCard
                                title="2020 Q3"
                                url="https://s3.amazonaws.com/reports.credmark.com/TheCryptoCreditReport-Q3-2020.pdf" />
                            <CCRCard
                                title="2020 Q2"
                                url="https://s3.amazonaws.com/reports.credmark.com/TheCryptoCreditReport-Q2-2020.pdf" />
                            <CCRCard
                                title="2020 Q1"
                                url="https://s3.amazonaws.com/reports.credmark.com/TheCryptoCreditReport-Q1-2020.pdf" />
                               <CCRCard
                                title="2019 Year End Report"
                                url="https://s3.amazonaws.com/reports.credmark.com/TheCryptoCreditReport-Q4-2019.pdf" />
                               <CCRCard
                                title="2019 Q3"
                                url="https://s3.amazonaws.com/reports.credmark.com/TheCryptoCreditReport-Q3-2019.pdf" />
                                <CCRCard
                                title="2019 Q2"
                                url="https://s3.amazonaws.com/reports.credmark.com/TheCryptoCreditReport-Q2-2019.pdf" />
                        </div>
                    </div>
                    <Subscribe />
                    <Footer />
                </div>
            </main>
        </>

    )
}