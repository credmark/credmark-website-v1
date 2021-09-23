export default function Media() {

    return (
        <>
            <main className="flex-1 relative overflow-y-auto focus:outline-none rounded-md bg-white h-screen pinkGradient">
                <div className="rounded-md">
                    <div className="px-5 md:pt-28 md:px-28">
                        <h1 className="text-center text-4xl md:text-6xl">
                            CREDMARK
                            <br></br>
                            IN THE MEDIA
                        </h1>
                        <a href="https://www.coindesk.com/markets/2021/06/03/crypto-credit-rating-firm-credmark-pivots-to-modeling-defi-protocol-risks/" target="_blank" rel="noreferrer"><img width={450} className="block m-auto py-2.5 px-10 pt-10" src="/assets/coindesk.jpg" alt="Coindesk article about Toucan"></img></a>
                        <a href="https://medium.com/api3/announcing-the-api3-partnership-with-credmark-72d45c976375" target="_blank" rel="noreferrer"><img width={450} className="block m-auto py-2.5 px-10" src="/assets/api3.jpg" alt="API3 article about Credmark"></img></a>
                        <a href="https://www.businesslive.co.za/bd/markets/2021-07-02-native-how-hedge-funds-are-earning-up-to-20-a-year-on-usd-deposits/" target="_blank" rel="noreferrer"><img width={450} className="block m-auto py-2.5 px-10" src="/assets/business-day.jpg" alt="Business Day article about Toucan"></img></a>
                    </div>
                </div>
            </main>
        </>

    )
}

