import TeamCard from '../layout/teamCard'
import AdvisorCard from '../layout/advisorCard'
import CenteredHeader from "../layout/centeredHeader"
import Footer from "../layout/footer"
import Subscribe from "../layout/subscribe"
import items from "../../styles/teamData"
import { useState } from 'react'
import Menu from '../filters/Menu'
import Button from '../filters/Button'

const allCategories = ['All', ...items.map(item => item.category)];

export default function Team() {
    const [menuItem, setMenuItem] = useState(items);
    const [buttons, setButtons] = useState([allCategories]);

    const filter = (button) => {

        if(button === 'All') {
            setMenuItem(items);
            return;
        }

        const filteredData = items.filter(item => item.category === button);
        setMenuItem(filteredData)
    }

    return (
        <>
            <main className="max-w-full flex-1 relative overflow-y-auto focus:outline-none rounded-md bg-white">
                <div className="blogGradient rounded-md">
                    <CenteredHeader
                        title="Contributors"
                        description="Our team speaks numerous languages and are distributed across multiple regions around the world" />
                    <Button className="hover:border-purple pb-5" button={buttons} filter={filter} />
                    <div className="px-5 py-10 md:px-10 max-w-5xl block m-auto">
                            <Menu menuItem={menuItem} />
                    </div>
                    <div className="bg-lightgray">
                        <div className="px-5 py-10">
                            <h1 className="credmark text-center py-5 text-3xl md:text-4xl pb-10 md:pt-10">
                                ADVISORS
                            </h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 block m-auto max-w-4xl">
                            <AdvisorCard
                                    img="../assets/renner.png"
                                    alt="Renan Feldman"
                                    name="Renan Feldman"
                                    role="Advisor"
                                    company="UBS"
                                />
                                <AdvisorCard
                                    img="../assets/jonah.png"
                                    alt="Jonah Lau"
                                    name="Jonah Lau"
                                    role="Advisor"
                                    company="Crypto.com"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 block m-auto">

                                <AdvisorCard
                                    img="../assets/heiki.png"
                                    alt="Heikki Vanttinen"
                                    name="Heikki Vanttinen"
                                    role="Advisor"
                                    company="API3"
                                />
                                 <AdvisorCard
                                    img="../assets/alberto.png"
                                    alt="Alberto Ornaghi"
                                    name="Alberto Ornaghi"
                                    role="Advisor"
                                    company="Coinbase"
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
                    <div className="pb-10 md:pb-0">
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