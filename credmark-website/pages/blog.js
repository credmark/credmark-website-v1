import { getAllPosts } from "../lib/api"
import BlogCard from '../components/blog/blogCard'
import Nav from '../components/layout/nav'
import moment from 'moment'

import FilteringMenu from "../components/blog/fiterMenu"
import { useState } from "react"
import { useGetPosts } from "../actions"

export default function BlogPage({posts}) {

    return (
        <>
            <Nav page={<BlogPageContent />} />
        </>
    )
}

function BlogPageContent() {
    const [filter, setFilter] = useState({
        view: { list: 0 }
    });

    const { data: blogsData, error } = useGetPosts();
    
    return (
            <div className="py-12 px-5">
                <div className="text-center">
                    <h1 className="text-5xl">BLOG</h1>
                    <p>News, stories, and announcements from the Credmark team.</p>
                    <p className="text-pink pb-5 hover:underline">Subscribe</p>
                </div>
                <FilteringMenu
                    filter={filter}
                    onChange={(option, value) => {
                        setFilter({...filter, [option]: value});
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
                     }}/>
                    </div>
                    :
                        <BlogCard
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
    );
}

// this function is called during build time (always called on the server)
//provides props to the page
export async function getStaticProps() {
    const posts = await getAllPosts({offset: 3});
    return {
        props: {
            posts
        }
    }
}