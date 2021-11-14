import CenteredHeader from "../layout/centeredHeader"
import Culture from '../careers/culture'
import OpenRoles from "../careers/openRoles"
import Subscribe from "../layout/subscribe"
import Footer from "../layout/footer"


export default function Careers() {

    return (
        <>
            <main className="max-w-full flex-1 relative overflow-y-auto focus:outline-none rounded-md bg-white">
                <div className="blogGradient rounded-md">
                    <CenteredHeader
                        title="Build the Future of DeFi With us"
                        description="Our mission is to de-risk the DeFi industry to enable users to make better informed investment decisions."
                        descriptionTwo="We believe the key to mainstream adoption lies in reducing risk for users."
                        button="Join us"
                    />
                    <div className="px-5 py-10">
                        <h3 className="credmark text-center py-5 text-5xl md:text-4xl pb-10 md:pt-10">
                            Our Culture
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 block m-auto">

                            <Culture
                                img="../assets/heiki.jpg"
                                alt="Heikki Vänttinen"
                                title="Decentralized Ideas"
                                description="We understand everyone has their own expertise and unique experiences. All voices are heard so every person can develop ownership as long as they can back up what they say."
                            />
                            <Culture
                                img="../assets/renner.jpg"
                                alt="Renan Feldman"
                                title="Global"
                                description="We're aiming to become a DAO. Naturally that means our team is very distributed. We're situated across
                                    various time zones and our differences
                                    bring together fresh new ideas."
                            />
                            <Culture
                                img="../assets/serge.png"
                                alt="Serge Ugarte"
                                title="Turbo-charged learning"
                                description="DeFi moves at lightning fast speed, but so does being at Credmark. We're paving the path for data integrity and reducing risk so we can increase DeFi adoption."
                            />
                        </div>
                        <div className="px-5 py-10 bg-pinkextralight">
                            <h3 className="credmark text-center py-5 text-5xl md:text-4xl pb-10 md:pt-10">
                                Open Roles
                            </h3>
                            <OpenRoles
                                jobtitle="Front End Developer"
                            />
                        </div>
                        <div className="px-5 py-10">
                            <h3 className="credmark text-center py-5 text-5xl md:text-4xl pb-10 md:pt-10">
                                Our mission
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 block m-auto">

                                <Culture
                                    img="../assets/heiki.jpg"
                                    alt="Heikki Vänttinen"
                                    title="Develop risk management tools"
                                />
                                <Culture
                                    img="../assets/renner.jpg"
                                    alt="Publish industry leading research"
                                    title="Global"

                                />
                                <Culture
                                    img="../assets/serge.png"
                                    alt="Serge Ugarte"
                                    title="Curate crypto data"
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