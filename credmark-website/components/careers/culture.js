import * as React from 'react';

const Culture = (props) => {
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
                        <p className="pt-5 px-5 credmark cursor-pointer text-center text-lg">{props.title}</p>
                        <p className="px-5 cursor-pointer text-center text-base">{props.description}</p>
                    </div>
        </>
    );
}

export default Culture;
