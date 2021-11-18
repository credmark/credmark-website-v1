import * as React from 'react';
import Link from 'next/link';

const CCRCard = (props) => {
    return (
        <>
        <div className="border-2 border-credmarkpurple rounded-lg text-center mb-10 py-10 mx-10 md:pt-10 drop-shadow-xl">
            <p className="text-left border-b-2 border-credmarkpurple mx-5 font-semibold text-lg">Crypto Credit <br /> Report</p>
            <img width={150} className="mx-5" src="../assets/credmark-logo-purple.png" alt="Credmark Logo" />
            <strong><p className="credmark text-left pl-5 text-lg py-2.5">{props.title}</p></strong>
        </div>
        </>
    );
}

export default CCRCard;
