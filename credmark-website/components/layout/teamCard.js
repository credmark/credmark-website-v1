import * as React from 'react';
import Link from 'next/link';

const TeamCard = (props) => {
    return (
        <>
        <div className="py-10">
            <img className="block m-auto" src={props.img} alt={props.alt} />  
            <p className="py-5 font-bold text-center text-sm">{props.name} I {props.title}</p>
            <p className="text-sm">{props.description}</p>
            <br></br>
            <p className="text-sm">{props.descriptiontwo}</p>
        </div>
        </>
    );
}

export default TeamCard;
