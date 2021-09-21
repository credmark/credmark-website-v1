import { getBlogBySlug, getAllPosts } from '../../lib/api';

import BlockContent from '@sanity/block-content-to-react';
import sanity from '../../lib/sanity';

import Nav from '../../components/layout/nav'
import Link from 'next/link'
import Head from 'next/head'

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
            <Nav page={<BlogDetail post={post} />} />
        </>
    )
}

const BlogDetail = ({ post }) => {
    return (
        <div>
            <div className="max-w-5xl block m-auto text-center px-5">
                <Link href="/blog" rel="noreferrer">
                    <img id="blogbutton" className="pt-10 h-auto cursor-pointer" fill="#3B0065" width={30} height={30} src="/assets/BackButton.svg">
                    </img>
                </Link>
                <img id="blogPage" width={338} height={270} className="rounded-lg block m-auto mb-10" src={post.mainImage} />
                <h1 className="text-xl">{post.title}</h1>
                <BlockContent
                    className="text-left leading-loose pt-10"
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
