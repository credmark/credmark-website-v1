import MediaCard from "../media/mediaCard"

export default function Media() {

    return (
        <main className="flex-1 overflow-y-auto focus:outline-none rounded-md mediaBackground">
            <div>
                <div className="pt-20">
                    <div>
                        <h1 className="text-center credmark text-4xl lg:text-5xl border-b-2 border-black max-w-2xl block m-auto mx-10 md:m-auto">
                            IN THE MEDIA
                        </h1>
                    </div>
                    <div className="block m-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-2xl block m-auto">
                            <MediaCard
                                link="https://www.coindesk.com/markets/2021/06/03/crypto-credit-rating-firm-credmark-pivots-to-modeling-defi-protocol-risks/"
                                alt="Coindesk article about Toucan"
                                img="/assets/coindesk.png"
                                title="COINDESK EXCLUSIVE"
                                description="CRYPTO PIVOTS TO MODELING DEFI PROTOCOL RISKS"
                                date="June 3rd, 2021"
                            />
                            <MediaCard
                                link="https://medium.com/api3/announcing-the-api3-partnership-with-credmark-72d45c976375"
                                alt="API 3 Partnership"
                                img="/assets/api3.png"
                                title="API 3 PARTNERSHIP"
                                description="ANNOUNCING THE API3 PARTNERSHIP WITH CREDMARK"
                                date="June 4th, 2021"
                            />
                            <MediaCard
                                link="https://www.businesslive.co.za/bd/markets/2021-07-02-native-how-hedge-funds-are-earning-up-to-20-a-year-on-usd-deposits/"
                                alt="Business Day article about Toucan"
                                img="/assets/business-day.png"
                                title="BUSINESS DAY"
                                description="HEDGEFUNDS ARE EARNING UP TO 20% ON DOLLAR DEPOSITS"
                                date="July 22nd, 2021"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

