import CenteredHeader from "../layout/centeredHeader"
import Footer from "../layout/footer";
import Subscribe from "../layout/subscribe"
import QuestionsIntro from "../faq/questionsIntro";
import QuestionsPlatform from "../faq/questionsPlatform";
import QuestionsToken from "../faq/questionsToken";


export default function faq() {
    return (
        <>
            <main className="max-w-full flex-1 relative overflow-y-auto focus:outline-none rounded-md bg-white">
                <div>
                    <CenteredHeader
                        title="FAQ"
                    />
                </div>
                <div className="px-5 max-w-5xl md:m-auto">
                    <div className="pt-10 border-b-1 border-gray-700 block m-auto md:m-auto space-x-5 md:space-x-20">
                        <button className="border-b-2 border-transparent hover:border-purple pb-5 pl-5" onClick={() => { setSelectedCategory("all") }}>All</button>
                        <button className="border-b-2 border-transparent hover:border-purple pb-5" onClick={() => { setSelectedCategory("press") }}>Introduction</button>
                        <button className="border-b-2 border-transparent hover:border-purple pb-5" onClick={() => { setSelectedCategory("announcements") }}>Platform</button>
                        <button className="border-b-2 border-transparent hover:border-purple pb-5" onClick={() => { setSelectedCategory("new-features") }}>Token Related</button>
                    </div>
                    <div>
                        <h3 className="credmark text-center md:text-left text-3xl md:text-4xl pt-10">
                            Introduction
                        </h3>
                        <QuestionsIntro />
                    </div>
                    <div>
                        <h3 className="credmark text-center md:text-left text-3xl md:text-4xl pt-10">
                            Platform
                        </h3>
                        <QuestionsPlatform />
                    </div>
                    <div>
                        <h3 className="credmark text-center md:text-left text-3xl md:text-4xl pt-10">
                            Token
                        </h3>
                        <QuestionsToken />
                    </div>
                </div>
                <Subscribe />
                <Footer />
            </main>
        </>
    )
}