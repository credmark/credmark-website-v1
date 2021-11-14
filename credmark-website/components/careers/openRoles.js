import * as React from 'react';

const openRoles = (props) => {
    return (
        <>
                    <div className="bg-white py-5 max-w-xl block m-auto border-2 border-gray rounded-lg hover:shadow-xl">
                        <a href={props.link} target="_blank" rel="noreferrer">
                        <p className="credmark cursor-pointer text-center text-md">{props.jobtitle}</p>
                        <img alt="arrow right" src="../assets/arrow-right.svg" />
                        </a>
                    </div>
        </>
    );
}

export default openRoles;