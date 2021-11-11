import { getAllPosts } from "../lib/api"
import BlogCard from '../components/blog/blogCard'
import Nav from '../components/layout/nav'
import moment from 'moment'

import FilteringMenu from "../components/blog/fiterMenu"
import { useState } from "react"
import { useGetPosts } from "../actions"
import Head from 'next/head'

export default function BlogPage({ posts }) {

    return (
        <>
        <Head>
        <title>Blog | CREDMARK</title>
        <meta content="Blog | Credmark" property="og:title" key="og:title" />
        <meta name="description" content="Welcome to the Credmark blog. Subscribe to find out about company updates and industry research." />
        <meta property="og:title" content="Blog | Credmark" key="ogtitle" />
+       <meta property="og:description" content="Welcome to the Credmark blog. Subscribe to find out about company updates and industry research." key="ogdesc" />
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
            <div className="py-12 px-5 blogGradient bg-white">
                <div className="text-center">
                    <h1 className="text-5xl pb-2.5">BLOG</h1>
                    <p className="pb-2.5">News, stories, and announcements from the Credmark team.</p>
                    <a href="http://eepurl.com/gLAid9" target="_blank" rel="noreferrer"><p className="text-pink pb-5 hover:underline">Subscribe</p></a>
                </div>
                <FilteringMenu
                    filter={filter}
                    onChange={(option, value) => {
                        setFilter({ ...filter, [option]: value });
                    }}
                />
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