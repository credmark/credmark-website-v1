import { getBlogBySlug, getAllPosts } from '../../lib/api';

import BlockContent from '@sanity/block-content-to-react';
import sanity from '../../lib/sanity';

import Nav from '../../components/layout/navWhite'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
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
                <title key="title">{post.title} | Blog | Credmark</title>
                <meta name="description" content={post.description} />
                <meta content={`${post.title} | Blog | Toucan Events`} property="og:title" key="og:title" />
                <meta content={`${post.title} | Blog | Toucan Events`} name="twitter:title" key="twitter:title" />
                <meta content={post.description} property="og:description" key="og:description" />
                <meta content={post.description} property="twitter:description" key="twitter:description" />
                <meta property="og:image" content={post.mainImage}/>
                {post.mainImage && (
                    <>
                        <meta content={post.mainImage} property="og:image" key="og:image" />
                        <meta
                            content={post.mainImage}
                            property="og:image:secure_url"
                            key="og:image:secure_url"
                        />
                        <meta content={post.mainImage} name="twitter:image" key="twitter:image" />
                    </>
                )}
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
            <div className="max-w-6xl block m-auto px-5 md:px-20">
                <h1 className="uppercase leading-snug pt-20 text-5xl pb-5 px-5 md:px-20">{post.title}</h1>
                <p className="text-pink credmark pb-5 px-5 md:px-20 text-base">{post.author} I {moment(post.date).format('MM.DD.YYYY')}</p>
                <Image className="px-5 md:px-20" id="blogPage" src={post.mainImage} />
                <BlockContent
                    className="blog text-left leading-loose pt-10 px-5 md:px-20"
                    serializers={serializers}
                    blocks={post.content}
                    {...sanity.config()}
                />
                <div className="flex">
                <Link href="/blog" rel="noreferrer" passHref>
                    <p className="cursor-pointer font-bold pt-10 pb-5 px-5 md:px-20"><Image width={40} className="float-left pt-0 pr-5" src="../assets/arrow.svg" />Back to blog</p>
                    </Link>
                </div>
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
