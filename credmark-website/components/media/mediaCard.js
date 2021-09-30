import * as React from 'react';
import Link from 'next/link';

const MediaCard = (props) => {
    return (
        <>
                    <div className="pt-10 px-2 px-10 lg:px-0">
                        <p className="text-black font-semibold text-2xl text-center pb-2">Daily News</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 border-t-2 border-b-2 border-black py-0.5 mx-2">
                            <p className="text-xs text-black text-center md:text-right font-bold">CREDMARK IN THE MEDIA</p>
                            <p className="text-xs text-black text-center font-bold">{props.date}</p>
                        </div>
                        <h3 className="credmark text-center text-4xl pt-2">{props.title}</h3>
                        <Link href={props.link}>
                            <img
                                alt={props.alt}
                                src={props.img}
                                className='cursor-pointer'
                            />
                        </Link>
                        <p className="credmark text-center text-black text-2xl">{props.description}</p>
                    </div>
        </>
    );
}

export default MediaCard;
