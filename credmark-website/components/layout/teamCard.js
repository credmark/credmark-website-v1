import * as React from 'react';

const TeamCard = (props) => {
    return (
        <>
        <div className="py-10">
            <img className="block m-auto" src={props.img} alt={props.alt} />  
            <p className="credmark py-5 text-center text-sm text-lg">{props.name} I {props.title}</p>
        </div>
        </>
    );
}

export default TeamCard;
