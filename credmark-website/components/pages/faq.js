import CenteredHeader from "../layout/faqHeader"
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
                <div className="px-5 max-w-5xl md:m-auto pb-10">
                    <div>
                    <div className="max-w-5xl md:m-auto">
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
                </div>
                <Subscribe />
                <Footer />
            </main>
        </>
    )
}