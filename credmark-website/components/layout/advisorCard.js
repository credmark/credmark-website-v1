import * as React from 'react';
import Link from 'next/link';

const AdvisorCard = (props) => {
    return (
        <>
        <div className="md:pt-10 text-center py-10">
            <img className="block m-auto max-w-xs" src={props.img} alt={props.alt} />  
            <strong><p className="credmark text-lg py-2.5">{props.name}</p></strong>
        </div>
        </>
    );
}

export default AdvisorCard;
