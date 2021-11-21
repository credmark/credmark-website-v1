import TeamCard from '../layout/teamCard'
import AdvisorCard from '../layout/advisorCard'
import CenteredHeader from "../layout/centeredHeader"
import Footer from "../layout/footer"
import Subscribe from "../layout/subscribe"

export default function Team() {

    return (
        <>
            <main className="max-w-full flex-1 relative overflow-y-auto focus:outline-none rounded-md bg-white">
                <div className="blogGradient rounded-md">
                    <CenteredHeader
                        title="Contributors"
                        description="Our team speaks numerous languages and are distributed across multiple regions around the world" />
                    <div className="px-5 py-10 md:px-10 max-w-5xl block m-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 block m-auto">
                            <TeamCard
                                img="../assets/neil.png"
                                alt="Neil Zumwalde"
                                name="Neil Zumwalde"
                                title="Founder"
                                description="An Electrical/Software Engineer, Neil has developed products and provided technical advisement in blockchain, industrial automation, and renewable energy markets. To Neil, nothing is impossible."
                                descriptiontwo="In his spare time he writes music for children and podcasts."
                                twitter="https://twitter.com/neilzum"
                                linkedin="https://www.linkedin.com/in/neilzumwalde/"
                            />
                            <TeamCard
                                img="../assets/momin.jpg"
                                alt="Momin Ahmad "
                                name="Momin Ahmad"
                                title="Founder"
                                description="Momin is Credmark’s secret weapon. He is versatile, a quick study, and usually in a good mood after 10AM. Besides being responsible for the development of Credmark’s projects, Momin is the author of our Crypto Credit Report."
                                descriptiontwo="Outside of work, he enjoys playing bluegrass on his upright bass."
                                twitter="https://twitter.com/mostarz93"
                                linkedin="https://www.linkedin.com/in/momin-ahmad/"
                            />
                            <TeamCard
                                img="../assets/paul.jpg"
                                alt="Paul Murphy"
                                name="Paul Murphy"
                                title="Founder"
                                description="Born in Argentina, Paul has lived and worked all over the world. He used to write a lot of code. Now he’s kind of rusty. He does whatever needs doing, whether or not it’s fun."
                                descriptiontwo="He believes the answer to most questions can be found in musical and opera scores."
                                twitter="https://twitter.com/prmurphy"
                                linkedin="https://www.linkedin.com/in/prmurphy/"
                            />
                             <TeamCard
                                img="../assets/emilie.jpg"
                                alt="Emilie Yeager"
                                name="Emilie Yeager"
                                title="CTO"
                                description="Emilie Yeager is a dev ops pro, engineering manager, and DIY aficionado. For the past 20+ years, Emilie has worked in tech- from systems administration to engineering to devops. Her specialties include AWS, Terraform, Bash, and Python automation. "
                                descriptiontwo="In her spare time, she enjoys the Austin music scene, rock climbing, two-stepping, and adding to her exotic plant collection."
                                twitter="https://twitter.com/emilieyeager"
                                linkedin="https://www.linkedin.com/in/emilieyeager/"
                            />
                            <TeamCard
                                img="../assets/Asan.png"
                                alt="Asan Tulemis"
                                name="Asan Tulemis"
                                title="Head of Risk Solutions"
                                description="Asan has worked in the risk departments of two of Australia’s largest banks. He has a PhD in applied math. He loves risk strategy and building the most complicated risk models."
                                twitter="https://twitter.com/atulemis1"
                                linkedin="https://www.linkedin.com/in/atulemis/"
                            />
                            <TeamCard
                                img="../assets/nisch.jpg"
                                alt="Nishchal Gaba"
                                name="Nishchal Gaba"
                                title="Technical Lead"
                                description="Nish eats data instead of food. Armed with a Master’s in AI from Edinburgh University, he has become one of India’s greatest technologists."
                                descriptiontwo="Outside of work he writes and reviews academic papers. For fun."
                                twitter="https://twitter.com/gaba_nishchal"
                                linkedin="https://www.linkedin.com/in/nishchal-gaba-295701a5/"
                            />
                             <TeamCard
                                img="../assets/collier.jpg"
                                alt="Collier Gray"
                                name="Collier Gray"
                                title="Strategic Operations"
                                description="A native Austinite, Collier spent 6 years in technology and finance in NYC, working from Product to leading a Lean Governance group."
                                descriptiontwo="When he's not working through his substantial to-do list, you can find Collier reading and trying to keep his vegetable garden alive."
                                twitter="https://twitter.com/JoeCollierGray"
                                linkedin="https://www.linkedin.com/in/joseph-collier-gray-7a323054/"
                            />
                            <TeamCard
                                img="../assets/stijn.jpg"
                                alt="Stijn Dobbelaere"
                                name="Stijn Dobbelaere"
                                title="Designer"
                                description="From editing national ad campaigns for Capital One, to creating viral-ready memes for Southwest Airlines, to voicing Pizza Hut commercials, Stijn has  years of experience in design, advertising and marketing."
                                descriptiontwo="Outside of his work, he bangs loudly on drums."
                                twitter="https://twitter.com/S7IJN"
                                linkedin="https://www.linkedin.com/in/stijn-dobbelaere-5b9a476b/"
                            />
                            <TeamCard
                                img="../assets/joey.jpg"
                                alt="Joseph Hirsh"
                                name="Joseph Hirsh"
                                title="Mathematician"
                                description="After receiving a PhD in algebraic topology and postdoctoral fellowships at MIT and MSRI, Joe worked in blockchain/AI consulting and served as a mentor for dLab. "
                                descriptiontwo="Outside of work, Joe is either cooking, bodybuilding, or watching YouTube videos about non-duality."
                                twitter="https://twitter.com/corepresentable"
                                linkedin="https://www.linkedin.com/in/joseph-hirsh/"
                            />
                            <TeamCard
                                img="../assets/when.png"
                                alt="Wen-Chiao"
                                name="Wen-Chiao"
                                title="Marketing"
                                description="Originally from Taiwan,  Wen-Chiao grew up in the US, went back to Taiwan for high school, and then moved to Japan for university. He’s worked in both Taipei and Tokyo in tech and innovation. In his spare time, he likes reading and asking questions."
                                twitter="https://twitter.com/wc_su95"
                                linkedin="https://www.linkedin.com/in/wen-chiao-su/"
                            />
                        </div>
                    </div>
                    <div className="bg-lightgray">
                        <div className="px-5 py-10">
                            <h1 className="credmark text-center py-5 text-3xl md:text-4xl pb-10 md:pt-10">
                                ADVISORS
                            </h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 block m-auto max-w-4xl">
                                <AdvisorCard
                                    img="../assets/alberto.jpg"
                                    alt="Alberto Ornaghi"
                                    name="Alberto Ornaghi"
                                    role="Advisor"
                                    company="Coinbase"
                                />
                                <AdvisorCard
                                    img="../assets/jonah.jpg"
                                    alt="Jonah Lau"
                                    name="Jonah Lau"
                                    role="Advisor"
                                    company="Crypto.com"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 block m-auto">

                                <AdvisorCard
                                    img="../assets/heiki.jpg"
                                    alt="Heikki Vanttinen"
                                    name="Heikki Vanttinen"
                                    role="Advisor"
                                    company="API3"
                                />
                                <AdvisorCard
                                    img="../assets/renner.jpg"
                                    alt="Renan Feldman"
                                    name="Renan Feldman"
                                    role="Advisor"
                                    company="UBS"
                                />
                                <AdvisorCard
                                    img="../assets/serge.png"
                                    alt="Serge Ugarte"
                                    name="Serge Ugarte"
                                    role="Advisor"
                                    company="FICO"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="credmark text-4xl text-center pt-10 md:pt-32 pb-9">Looking to de-risk DeFi together?</h4>
                        <div className="flex justify-center">
                            <a href="/careers">
                                <button
                                    type="button"
                                    className="credmark inline-flex items-center md:mb-32 px-7 py-2 shadow-sm text-sm rounded-md text-white bg-credmarkpurple"
                                >
                                    See open positions
                                </button>
                            </a>
                        </div>
                    </div>
                    <Subscribe />
                    <Footer />
                </div>
            </main>
        </>

    )
}