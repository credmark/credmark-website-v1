import { getBlogBySlug, getAllPosts } from '../../lib/api';

import BlockContent from '@sanity/block-content-to-react';
import sanity from '../../lib/sanity';

import Nav from '../../components/layout/nav'
import Link from 'next/link'
import Head from 'next/head'
import moment from 'moment'


const serializers = {
    types: {
        code: (serializer) => {
            return <h1>Code Block</h1>
        }
    }
}

export default function BlogPostPage({ post }) {

    return (
        <>
            <Head>
                <title>{post.title} | CREDMARK</title>
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
            <Nav page={<BlogDetail post={post} />} />
            </div>
        </>
    )
}

const BlogDetail = ({ post }) => {
    return (
        <div className="bg-white pb-10">
            <div className="max-w-5xl block m-auto px-5 md:px-20">
                <h1 className="pt-20 text-5xl pb-5 px-5 md:px-20">{post.title}</h1>
                <p className="text-pink credmark pb-5 px-5 md:px-20 text-base">{post.author} I {moment(post.date).format('MM.DD.YYYY')}</p>
                <img className="px-5 md:px-20" id="blogPage" src={post.mainImage} />
                <BlockContent
                    className="text-left leading-loose pt-10 px-5 md:px-20"
                    serializers={serializers}
                    blocks={post.content}
                    {...sanity.config()}
                />
            </div>
        </div>
    )
}

export async function getStaticProps({ params }) {
    const post = await getBlogBySlug(params.slug);
    return {
        props: { post }
    }
}

export async function getStaticPaths() {
    const posts = await getAllPosts();
    return {
        paths: posts?.map(posts => ({ params: { slug: posts.slug } })),
        fallback: false
    }
}
