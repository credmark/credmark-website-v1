import * as React from 'react';

const HeaderHome = (props) => {
    return (
        <>
            <div className="bg-lightpink pt-20 pb-40">
                <div className="max-w-6xl px-5 block m-auto">
                    <h1 className="credmark text-5xl py-5">{props.title}</h1>
                    <h2 className="credmark text-pink text-lg">{props.description}</h2>
                    <a href={props.url}>
                        <button
                            type="button"
                            className="transform hover:shadow-xl credmark mt-5 inline-flex items-center px-4 py-2 shadow-sm text-sm font-medium rounded-md text-white bg-credmarkpurple"
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