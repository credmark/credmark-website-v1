import { getAllPosts } from "../lib/api"
import BlogCard from '../components/blog/blogCard'
import Nav from '../components/layout/nav'
import Whitepaper from '../components/pages/whitepaper'


export default function BlogPage({ posts }) {
    return (
        <>
            <Nav
                page={<Whitepaper />} />
            <div className="py-12 px-5">
                <div className="text-center">
                    <h1 className="text-5xl">BLOG</h1>
                    <p>News, stories, and announcements from the Credmark team.</p>
                    <p className="text-pink pb-5 hover:underline">Subscribe</p>
                </div>
                {posts.map(posts =>
                    <BlogCard
                        title={posts.title}
                        date={posts.date}
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
        </>
    )
}

// this function is called during build time (always called on the server)
//provides props to the page
export async function getStaticProps() {
    const posts = await getAllPosts()
    return {
        props: {
            posts
        }
    }
}