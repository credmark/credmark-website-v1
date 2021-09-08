import * as React from 'react';
import Link from 'next/link';

const BlogCard = (props) => {
    return (
        <>
            <div className="mt-10 md:mt-0 block m-auto max-w-3xl">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <img
                        alt={props.alt}
                        src={props.img}
                        className='w-full object-cover'
                    />
                    <div className="pl-5 font-light py-10">
                        <p>{props.date}</p>
                        <p className="font-medium">{props.title}</p>
                        <p>by {props.author}</p>
                        <Link href={`/blog/${props.slug}`}>
                            <a><p>Read more</p></a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlogCard;
