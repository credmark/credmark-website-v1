import * as React from 'react';

const CenteredHeader = (props) => {
    return (
        <>
        <div className="bg-lightpink py-20">
            <div className="max-w-6xl px-5 block m-auto">
            <h1 className="credmark text-center text-5xl py-5">{props.title}</h1>
            <h2 className="text-pink text-center font-bold">{props.description}</h2>
            </div>
        </div>
        </>
    );
}

export default CenteredHeader;
