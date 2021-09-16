import * as React from 'react';
import Link from 'next/link';

const AdvisorCard = (props) => {
    return (
        <>
        <div className="md:pt-10 text-center py-10">
            <img className="block m-auto" src={props.img} alt={props.alt} />  
            <p className="font-bold py-2.5">{props.name}</p>
            <p className="text-sm">{props.role} I {props.company}</p>
        </div>
        </>
    );
}

export default AdvisorCard;