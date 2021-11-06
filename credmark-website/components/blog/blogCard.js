import * as React from 'react';
import Link from 'next/link';

const BlogCard = (props) => {
    return (
        <>
            <div className="container-xl mt-10 md:mt-0 block m-auto max-w-3xl">
                <div className="grid grid-cols-1 md:grid-cols-2 py-2.5 max-w-lg block m-auto">
                    <Link href={`/blog/${props.slug}`}>
                        <img
                            alt={props.alt}
                            src={props.img}
                            className='w-56 h-52 rounded-3xl cursor-pointer'
                            id="blogPage"
                        />
                    </Link>

                    <div className="pl-5 font-light py-10">
                        <p>{props.date}</p>
                        <Link href={`/blog/${props.slug}`}>
                        <p className="font-extrabold cursor-pointer text-xl">{props.title}</p>
                        </Link>
                        <p>by {props.author}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlogCard;
