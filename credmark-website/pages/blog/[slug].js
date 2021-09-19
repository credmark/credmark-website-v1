import { getBlogBySlug, getAllPosts } from '../../lib/api';

import BlockContent from '@sanity/block-content-to-react';
import sanity from '../../lib/sanity';

import Nav from '../../components/layout/nav'
import Footer from "../../components/layout/footer"
import Link from 'next/link'

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
            <Nav page={<BlogDetail post={post} />} />
        </>
    )
}

const BlogDetail = ({ post }) => {
    return (
        <div>
            <div className="max-w-5xl block m-auto text-center px-5">
                <Link href="/blog" rel="noreferrer">
                    <img className="pt-10" width={40} src="/assets/arrow.svg" />
                </Link>
                <img width={338} height={270} className="rounded-lg block m-auto my-10 mt-10" src={post.mainImage} />
                <h1 className="text-xl">{post.title}</h1>
                <BlockContent
                    className="text-left leading-loose pt-10"
                    serializers={serializers}
                    blocks={post.content}
                    {...sanity.config()}
                />
            </div>
            <Footer />
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
