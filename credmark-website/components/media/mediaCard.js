import * as React from 'react';

const MediaCard = (props) => {
    return (
        <>
                    <div className="py-10 max-w-xl block m-auto">
                        <a href={props.link} target="_blank" rel="noreferrer">
                            <img
                                alt={props.alt}
                                src={props.img}
                                className='cursor-pointer px-5'
                            />
                        </a>
                        <p className="text-xs text-black font-bold px-5">{props.date}</p>
                        <a href={props.link} target="_blank" rel="noreferrer"><p className="px-5 credmark cursor-pointer text-black text-lg">{props.description}</p></a>
                        <a href={props.link} target="_blank" rel="noreferrer"><p className="px-5 cursor-pointer text-black text-base">Read more</p></a>
                    </div>
        </>
    );
}

export default MediaCard;
