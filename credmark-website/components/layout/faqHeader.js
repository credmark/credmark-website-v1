import * as React from 'react';

const FaqHeader = (props) => {
    return (
        <>
            <div className="pt-20">
                <div className="max-w-3xl px-5 block m-auto">
                    <h1 className="credmark text-center text-5xl py-5">{props.title}</h1>
                    <h2 className="text-lg credmark text-pink text-center">{props.description}</h2>
                    <br />
                    <h3 className="text-pink credmark text-center">{props.descriptionTwo}</h3>
                </div>
            </div>
        </>
    );
}

export default FaqHeader;