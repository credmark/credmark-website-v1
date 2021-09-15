import TeamCard from '../layout/teamCard'
import AdvisorCard from '../layout/advisorCard'
import Footer from '../layout/footer'

export default function Team() {

    return (
        <>
            <main className="flex-1 relative overflow-y-auto focus:outline-none rounded-md ">
                <div className="rounded-md">
                    <div className="px-5 py-10 md:px-10">
                        <h1 className="credmark text-center py-5 font-bold text-7xl pb-10 md:pt-10">
                            THE TEAM
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 block m-auto space-x-6">
                            <TeamCard
                                img="../assets/neil.jpg"
                                alt="Neil Zumwalde"
                                name="Neil Zumwalde"
                                title="Founder"
                                description="An Electrical/Software Engineer, Neil has developed products and provided technical advisement in blockchain, industrial automation, and renewable energy markets. To Neil, nothing is impossible."
                                descriptiontwo="In his spare time he writes music for children and podcasts."
                            />
                            <TeamCard
                                img="../assets/momin.jpg"
                                alt="Momin Ahmad "
                                name="Momin Ahmad"
                                title="Founder"
                                description="Momin is Credmark’s secret weapon. He is versatile, a quick study, and usually in a good mood after 10AM. Besides being responsible for the development of Credmark’s projects, Momin is the author of our Crypto Credit Report."
                                descriptiontwo="Outside of work, he enjoys playing bluegrass on his upright bass."
                            />
                            <TeamCard
                                img="../assets/paul.jpg"
                                alt="Paul Murphy"
                                name="Paul Murphy"
                                title="Founder"
                                description="Born in Argentina, Paul has lived and worked all over the world. He used to write a lot of code. Now he’s kind of rusty. He does whatever needs doing, whether or not it’s fun."
                                descriptiontwo="He believes the answer to most questions can be found in musical and opera scores."
                            />
                            <TeamCard
                                img="../assets/nisch.jpg"
                                alt="Nishchal Gaba"
                                name="Nishchal Gaba"
                                title="Technical Lead"
                                description="Nish eats data instead of food. Armed with a Master’s in AI from Edinburgh University, he has become one of India’s greatest technologists."
                                descriptiontwo="Outside of work he writes and reviews academic papers. For fun."
                            />
                            <TeamCard
                                img="../assets/emilie.jpg"
                                alt="Emilie Yeager"
                                name="Emilie Yeager"
                                title="CTO"
                                description="Emilie Yeager is a dev ops pro, engineering manager, and DIY aficionado. For the past 20+ years, Emilie has worked in tech- from systems administration to engineering to devops. Her specialties include AWS, Terraform, Bash, and Python automation. "
                                descriptiontwo="In her spare time, she enjoys the Austin music scene, rock climbing, two-stepping, and adding to her exotic plant collection."
                            />
                            <TeamCard
                                img="../assets/stijn.jpg"
                                alt="Stijn Dobbelaere"
                                name="Stijn Dobbelaere"
                                title="Designer"
                                description="From editing national ad campaigns for Capital One, to creating viral-ready memes for Southwest Airlines, to voicing Pizza Hut commercials, Stijn has  years of experience in design, advertising and marketing."
                                descriptiontwo="Outside of his work, he bangs loudly on drums."
                            />
                            <TeamCard
                                img="../assets/collier.jpg"
                                alt="Collier Gray"
                                name="Collier Gray"
                                title="Strategic Operations"
                                description="A native Austinite, Collier spent 6 years in technology and finance in NYC, working from Product to leading a Lean Governance group."
                                descriptiontwo="When he's not working through his substantial to-do list, you can find Collier reading and trying to keep his vegetable garden alive."
                            />
                            <TeamCard
                                img="../assets/joey.jpg"
                                alt="Joseph Hirsh"
                                name="Joseph Hirsh"
                                title="Mathematician"
                                description="After receiving a PhD in algebraic topology and postdoctoral fellowships at MIT and MSRI, Joe worked in blockchain/AI consulting and served as a mentor for dLab. "
                                descriptiontwo="Outside of work, Joe is either cooking, bodybuilding, or watching YouTube videos about non-duality."
                            />
                        </div>
                        <div className="px-5 py-10 md:px-10">
                            <h1 className="credmark text-center py-5 font-bold text-7xl pb-10 md:pt-10">
                               ADVISORS
                        </h1>
                            <div className="grid grid-cols-1 md:grid-cols-3 block m-auto space-x-4">
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
                                <AdvisorCard
                                    img="../assets/heiki.jpg"
                                    alt="Heikki Vänttinen"
                                    name="Heikki Vänttinen"
                                    role="Advisor"
                                    company="API3"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 block m-auto">
                                <AdvisorCard
                                    img="../assets/renner.jpg"
                                    alt="Renan Feldman"
                                    name="Renan Feldman"
                                    role="Advisor"
                                    company="UBS"
                                />
                                <AdvisorCard
                                    img="../assets/serge.jpg"
                                    alt="Serge Ugarte"
                                    name="Serge Ugarte"
                                    role="Advisor"
                                    company="FICO"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </>

    )
}