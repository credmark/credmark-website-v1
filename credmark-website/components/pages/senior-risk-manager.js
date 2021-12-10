import Subscribe from "../subscribe/subscribe"
import Footer from "../layout/footer"
import Description from "../careers/description"


export default function SeniorRiskManager() {

    return (
        <>
            <main className="max-w-full flex-1 relative overflow-y-auto focus:outline-none rounded-md bg-white">
                <div className="blogGradient rounded-md">
                    <Description
                        title="Senior Risk Manager"
                        description="Our mission is to de-risk the DeFi industry to enable users to make better informed investment decisions."
                        experience="10+ Years"
                        location="Anywhere"
                        job="Full-time"
                        summary="You’ve spent the past 10-20 years in traditional finance risk management. You love risk. You understand it. You can explain complicated risk concepts to a five year old. 

                        But there’s a problem.
                        
                        You know DeFi is the future of finance, and you want to be part of that future."
                        responsibilities="Establish a risk framework."
                        responsibilitiesOne="Manage the day-to-day work of our internal data and risk teams."
                        responsibilitiesTwo="Work with the CTO to ensure that the platform is fit for purpose."
                        responsibilitiesThree="Engage and lead the builder community."
                        responsibilitiesFour="Support clients of the platform."
                        responsibilitiesFive="Write and publish research about risk standards in DeFi."
                        responsibilitiesSix="Represent Credmark at industry events."
                        responsibilitiesSeven="Keep upper management in the loop."
                        responsibilitiesEight="Can explain complicated risk concepts"
                        responsibilitiesNine="Design a risk framework"
                        skills="Has worked in the traditional finance risk area for 10-20 years."
                        skillsOne="Has a firm understanding of financial risk modeling."
                        skillsTwo="Believes that DeFi is the future of finance."
                        skillsThree="Has experience delivering models to an engineering team."
                        skillsFour="Has experience working with model consumers."
                        skillsFive="Owns crypto."
                        skillsSix="Has used DeFi protocols."
                        skillsSeven="Speaks and communicates well in English."
                        skillsEight="Can work with our community of builders"
                        skillsNine="Can engage with model consumers"
                    />
                        <Subscribe />
                        <Footer />
                </div>
            </main>
        </>

    )
}