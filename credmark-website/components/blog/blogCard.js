import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BlogCard = (props) => {
    return (
        <>
                <div className="box col-xs transform hover:scale-105">
                    <Link href={`/blog/${props.slug}`} passHref>
                        <Image
                            alt={props.alt}
                            src={props.img}
                            className='rounded-md w-auto h-52 flex justify-center cursor-pointer mb-5'
                            id="blogPage"
                        />
                    </Link>
                    <div className="pl-5 font-light pb-10">
                        <p>{props.date}</p>
                        <Link href={`/blog/${props.slug}`} passHref>
                        <p className="credmark cursor-pointer text-xl">{props.title}</p>
                        </Link>
                        <p>by {props.author}</p>
                    </div>
                </div>
        </>
    );
}

export default BlogCard;
