import * as React from 'react';
import Link from 'next/link';

const BlogCard = (props) => {
    return (
        <>
                <div className="py-2.5 max-w-lg block m-auto">
                    <Link href={`/blog/${props.slug}`}>
                        <img
                            alt={props.alt}
                            src={props.img}
                            className='rounded-3xl cursor-pointer max-h-64'
                            id="blogPage"
                        />
                    </Link>
                    <div className="pl-5 font-light py-10">
                        <p>{props.date}</p>
                        <Link href={`/blog/${props.slug}`}>
                        <p className="credmark cursor-pointer text-xl">{props.title}</p>
                        </Link>
                        <p>by {props.author}</p>
                    </div>
                </div>
        </>
    );
}

export default BlogCard;
