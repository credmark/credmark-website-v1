import * as React from 'react';

const TeamCard = (props) => {
    return (
        <>
        <div className="py-10">
            <img className="block m-auto" src={props.img} alt={props.alt} />  
            <p className="py-5 font-extrabold text-center text-sm">{props.name} I {props.title}</p>
            <p className="text-sm text-center font-light px-12">{props.description}</p>
            <br></br>
            <p className="text-sm text-center px-12">{props.descriptiontwo}</p>
        </div>
        </>
    );
}

export default TeamCard;
