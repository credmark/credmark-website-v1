import * as React from 'react';

const MediaCard = (props) => {
    return (
        <>
                    <div className="pt-10">
                    <img width={200} src="/assets/DailyNews.png" alt="Daily News" />
                        <div className="grid grid-cols-1 md:grid-cols-2 border-t-2 border-b-2 border-black py-0.5 mx-4">
                            <p className="text-xs text-black text-center md:text-right font-bold">CREDMARK IN THE MEDIA</p>
                            <p className="text-xs text-black text-center font-bold">{props.date}</p>
                        </div>
                        <h3 className="credmark text-center text-4xl pt-2">{props.title}</h3>
                        <a href={props.link} target="_blank" rel="noreferrer">
                            <img
                                alt={props.alt}
                                src={props.img}
                                className='cursor-pointer px-5'
                            />
                        </a>
                        <a href={props.link} target="_blank" rel="noreferrer"><p className="cursor-pointer credmark text-center text-black text-2xl">{props.description}</p></a>
                    </div>
        </>
    );
}

export default MediaCard;
