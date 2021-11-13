import { getAllPosts } from "../lib/api"
import BlogCard from '../components/blog/blogCard'
import Nav from '../components/layout/nav'
import moment from 'moment'
import Header from '../components/layout/header'

import FilteringMenu from "../components/blog/fiterMenu"
import { useState } from "react"
import { useGetPosts } from "../actions"
import Head from 'next/head'
import Footer from "../components/layout/footer"
import Subscribe from "../components/layout/subscribe"

export default function BlogPage({ posts }) {

    return (
        <>
            <Head>
                <title>Blog | CREDMARK</title>
                <meta content="Blog | Credmark" property="og:title" key="og:title" />
                <meta name="description" content="Welcome to the Credmark blog. Subscribe to find out about company updates and industry research." />
                <link rel="icon" href="/favicon.ico" />
                {/* Global Site Tag (gtag.js) - Google Analytics */}
                <script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
                    }}
                />
            </Head>
            <div className="nav">
                <Nav page={<BlogPageContent />} />
            </div>
        </>
    )
}

function BlogPageContent() {
    const [filter, setFilter] = useState({
        view: { list: 0 }
    });

    const { data: blogsData, error } = useGetPosts();

    return (
        <div>
            <Header
                title="Credmark Blog"
                description="For the latest technical analysis, partnerships, and community updates"
            />
            <FilteringMenu
                filter={filter}
                onChange={(option, value) => {
                    setFilter({ ...filter, [option]: value });
                }}
            />
        <div className="px-5 max-w-5xl md:m-auto pt-10 md:pt-16">
        <div className="pt-10 border-b-1 border-gray-700 block m-auto md:m-auto space-x-5 md:space-x-20">
              <button className="border-b-2 border-transparent hover:border-purple pb-5 pl-5" onClick={()=>{setSelectedCategory("all")}}>All</button>
              <button className="border-b-2 border-transparent hover:border-purple pb-5" onClick={()=>{setSelectedCategory("press")}}>Technical Analysis</button>
              <button className="border-b-2 border-transparent hover:border-purple pb-5" onClick={()=>{setSelectedCategory("announcements")}}>Partnerships</button>
              <button className="border-b-2 border-transparent hover:border-purple pb-5" onClick={()=>{setSelectedCategory("new-features")}}>Community Updates</button>
          </div>
          </div>
            <div className="container-xl mt-10 md:mt-0 block m-auto max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-3 space-x-8 py-10">
                    {blogsData?.map(posts =>
                        filter.view.list ?
                            <div key={`${posts.slug}-list`}>
                                <BlogCard
                                    title={posts.title}
                                    date={moment(posts.date).format('MM/DD/YYYY')}
                                    author={posts.author}
                                    slug={posts.slug}
                                    link={{
                                        href: `/blog/${posts.slug}`
                                    }} />
                            </div>
                            :
                            <BlogCard
                                key={`${posts.slug}-list`}
                                title={posts.title}
                                date={moment(posts.date).format('MM/DD/YYYY')}
                                img={posts.mainImage}
                                author={posts.author}
                                slug={posts.slug}
                                link={{
                                    href: `/blog/${posts.slug}`
                                }}
                            />
                    )
                    }
                </div>
            </div>
            <Subscribe />
            <Footer />
        </div>
    );
}

// this function is called during build time (always called on the server)
//provides props to the page
export async function getStaticProps() {
    const posts = await getAllPosts({ offset: 0 });
    return {
        props: {
            posts
        }
    }
}