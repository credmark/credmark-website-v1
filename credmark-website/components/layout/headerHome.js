import * as React from 'react';

const HeaderHome = (props) => {
    return (
        <>
            <div className="bg-lightpink pt-20">
                <div className="max-w-6xl px-5 block m-auto">
                    <h1 className="credmark text-5xl py-5">{props.title}</h1>
                    <h2 className="text-pink font-bold">{props.description}</h2>
                    <button
                        type="button"
                        className="credmark mt-5 inline-flex items-center px-4 py-2 shadow-sm text-sm font-medium rounded-md text-white bg-purple"
                    >
                        Learn more
                    </button>           
                </div>
            </div>
        </>
    );
}

export default HeaderHome;