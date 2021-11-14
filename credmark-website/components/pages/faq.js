export default function faq() {
    return (
            <div className="faqBackground z-10 flex-1 flex">
                <div className="faqGradient z-0 flex-1 flex">
                    <div className="max-w-5xl py-10 flex-1 flex justify-center">
                        <div className="scrollbar flex-1 bg-white max-w-2xl rounded-4xl bg-scroll overflow-y-scroll">
                            <h1 className="credmark text-center py-5 text-5xl md:text-7xl md:pt-10">
                                FAQ
                            </h1>
                            <div className="px-10">
                                <p className="font-extrabold pb-5">What is Credmark?</p>
                                <p className="font-thin pb-10">Credmark is a risk modeling platform in the DeFi space. We leverage the community to build models - these models can be freely used by anyone to make better decisions when investing in DeFi. We do this through our token ($CMK) and a careful governance system. We aim to bring the risk tools used by traditional finance institutions to the average DeFi user. </p>
                                <p className="font-extrabold pb-5">Where can I buy or sell the Credmark token - $CMK?</p>
                                <p className="font-thin pb-10">Both buying and selling CMK is available on Uniswap <a href="https://app.uniswap.org/" className="underline" target="_blank" rel="noreferrer">here.</a></p>
                                <p className="font-extrabold pb-5">How is the $CMK token distributed to team and investors?</p>
                                <p className="font-thin pb-2.5">We are minting 100 million tokens, which will be distributed as follows -</p>
                                <ul className="list-disc list-inside pb-10">
                                    <li>10M distributed at our token launch.</li>
                                    <li>21.2M is preallocated to investors.</li>
                                    <li>24M is distributed to the core team and advisors (Partially distributed every month for 3 years, with the first distribution occurring 6 months after the token launch.) </li>
                                    <li>The remainder is owned by the DAO, for use to establish partnerships, pay for legal and development fees,  provide additional market liquidity, and used as rewards in our community treasury.</li>
                                </ul>
                                <p className="font-extrabold pb-5">What is the utility of the Credmark token $CMK?</p>
                                <ul className="list-decimal list-inside pb-10">
                                    <li>$CMK will be used in our governance platform and gives voting rights to the public - users can use their CMK to vote on the quality of models produced in the Credmark community.</li>
                                    <li>$CMK will be used to reward the community of data scientists for making models. Furthermore, modelers have to stake $CMK in order to submit their models.</li>
                                </ul>
                                <p className="font-extrabold pb-1-">How does Credmark encourage data model contributors?</p>
                                <p className="font-thin pb-10">Model contributors will be compensated based on the efficacy and use of their models. Once a model has been submitted and validated on our platform it will enter a leaderboard. The more effective and popular a model is, the higher it will go on the leaderboard- the model contributors at the top of the leaderboard are rewarded out of our community treasury. Because we funnel the fees from retail use back into our community treasury, there will always be rewards available for model contributors.</p>
                                <p className="font-extrabold pb-5">How can a Credmark user tell if a model is accurate or not?</p>
                                <p className="font-thin pb-10">Governance dictates the success metrics used by the models. Each category for models has its own metrics and the accuracy is determined by open and transparent ML backtesting methods. To avoid overfitting, we test the models against live data for a period of time.</p>
                                <p className="font-extrabold pb-5">I just bought CMK, why don’t I see it in my wallet?</p>
                                <p className="font-thin pb-10">Purchases on the Ethereum network are often slow, and will vary depending on the gas fee you pay. Check the status of the transaction on etherscan.io by searching your wallet ID- if it is pending, the transaction is still being processed, if it has failed, try again with a higher gas fee. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}