import CareerHeader from "../layout/centeredHeader"
import Culture from '../careers/culture'
import OpenRoles from "../careers/openRoles"
import Subscribe from "../layout/subscribe"
import Footer from "../layout/footer"


export default function Careers() {

    return (
        <>
            <main className="max-w-full flex-1 relative overflow-y-auto focus:outline-none rounded-md bg-white">
                <div className="blogGradient rounded-md">
                    <CareerHeader
                        title="Build the Future of DeFi With us"
                        description="Our mission is to de-risk the DeFi industry to enable users to make better informed investment decisions."
                        descriptionTwo="We believe the key to mainstream adoption lies in reducing risk for users."
                        button="Join us"
                    />
                    <div className="px-5 py-10">
                        <h3 className="credmark text-center py-5 text-5xl md:text-4xl md:pt-10">
                            Our Culture
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 block m-auto pb-10">
                            <Culture
                                img="../assets/decentralized.svg"
                                alt="Decentralized Ideas"
                                title="Decentralized Ideas"
                                description="We understand everyone has their own expertise and unique experiences. All voices are heard so every person can develop ownership as long as they can back up what they say."
                            />
                            <Culture
                                img="../assets/global.svg"
                                alt="Global Team"
                                title="Global"
                                description="We're aiming to become a DAO. Naturally that means our team is very distributed. We're situated across
                                    various time zones and our differences
                                    bring together fresh new ideas."
                            />
                            <Culture
                                img="../assets/turbo-learning.svg"
                                alt="Turbo-charged learning"
                                title="Turbo-charged learning"
                                description="DeFi moves at lightning fast speed, but so does being at Credmark. We're paving the path for data integrity and reducing risk so we can increase DeFi adoption."
                            />
                        </div>
                        <div className="py-10 bg-pinkextralight">
                            <h3 className="credmark text-center py-5 text-5xl md:text-4xl pb-10 md:pt-10">
                                Open Roles
                            </h3>
                            <OpenRoles
                                jobtitle="Senior Backend Developer"
                            />
                            <OpenRoles
                                jobtitle="Senior Cloud Architect"
                            />
                            <OpenRoles
                                jobtitle="Senior Frontend Developer"
                            />
                            <OpenRoles
                                jobtitle="Senior Risk Manager"
                            />
                            <OpenRoles
                                jobtitle="Senior Solidity Engineer"
                            />
                        </div>
                        <div className="px-5 py-10">
                            <h3 className="credmark text-center py-5 text-5xl md:text-4xl pb-10 md:pt-10">
                                Our mission
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 block m-auto">
                                <Culture
                                    img="../assets/curate-crypto-data.svg"
                                    alt="Heikki Vänttinen"
                                    title="Curate crypto data"
                                />
                                <Culture
                                    img="../assets/publish-research.svg"
                                    alt="Publish industry leading research"
                                    title="Publish industry leading research"

                                />
                                <Culture
                                    img="../assets/risk-management-tool.svg"
                                    alt="Develop risk management tools"
                                    title="Develop risk management tools"
                                />
                            </div>
                        </div>
                        </div>
                        <Subscribe />
                        <Footer />
                </div>
            </main>
        </>

    )
}