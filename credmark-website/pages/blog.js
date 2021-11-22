import { getAllPosts } from "../lib/api"
import BlogCard from '../components/blog/blogCard'
import Nav from '../components/layout/nav'
import moment from 'moment'

import FilteringMenu from "../components/blog/fiterMenu"
import { useState } from "react"
import Head from 'next/head'

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
            <Nav page={<BlogPageContent posts={posts} />} />
            </div>
        </>
    )
}

function BlogPageContent({posts: blogsData}) {
    const [filter, setFilter] = useState({
        view: { list: 0 }
    });

    return (
        <div>
            <div className="bg-lightpink py-20">
                <div className="max-w-6xl px-5 block m-auto">
                    <h1 className="credmark text-5xl py-5">Credmark Blog</h1>
                    <h2 className="credmark text-pink text-lg">For the latest technical analysis, partnerships, and community updates</h2>
                </div>
            </div>
            <FilteringMenu
                filter={filter}
                onChange={(option, value) => {
                    setFilter({ ...filter, [option]: value });
                }}
            />
            <div className="max-w-5xl block m-auto px-4 pt-10 pb-24">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-3 pt-10">
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