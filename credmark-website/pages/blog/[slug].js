import { getBlogBySlug, getAllPosts } from '../../lib/api';

import BlockContent from '@sanity/block-content-to-react';
import sanity from '../../lib/sanity';

const serializers = {
    types: {
        code: () => {
            return <h1>Code Block</h1>
        }
    }
}

const BlogDetail = ({ post }) => {
    return (
        <div className="max-w-5xl block m-auto text-center px-5">
            <a href="/blog" rel="noreferrer">
                <img className="pt-10" width={40} src="/assets/arrow.svg" />
            </a>
            <img width={338} height={270} className="rounded-lg block m-auto my-10 mt-10" src={post.mainImage} />
            <h1 className="text-xl">{post.title}</h1>
            <BlockContent
                className="text-left leading-loose pt-10"
                serializers={serializers}
                blocks={post.content}
                {...sanity.config()}
            />
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

export default BlogDetail;