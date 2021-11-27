import * as React from 'react';

const HeaderHome = (props) => {
    return (
        <>
            <div className="bg-lightpink pt-20 pb-40">
                <div className="max-w-6xl px-5 block m-auto">
                    <strong><h1 className="text-5xl py-5">{props.title}</h1></strong>
                    <h2 className="text-pink text-lg font-bold">{props.description}</h2>
                    <a href={props.url}>
                        <button
                            type="button"
                            className="transform hover:scale-110 credmark mt-5 inline-flex items-center px-4 py-2 shadow-sm text-sm font-medium rounded-md text-white bg-credmarkpurple"
                        >
                            Learn more
                        </button>
                    </a>

                </div>
            </div>
        </>
    );
}

export default HeaderHome;