import * as React from 'react';
import Link from 'next/link';

const AdvisorCard = (props) => {
    return (
        <>
            <div className="md:pt-10 text-center py-10">
                <img className="block m-auto max-w-xs" src={props.img} alt={props.alt} />
                <strong><p className="credmark text-lg py-2.5">{props.name}</p></strong>
                <p className="credmark text-base pb-4">{props.role}</p>
                <div className="flex justify-center">
                    <a href={props.twitter} target="_blank" rel="noreferrer">
                        <svg className="twitter" width={25} fill="#7E5594" viewBox="0 0 24 24">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                    </a>
                    <svg className="mx-4" width="2" height="30" viewBox="0 0 2 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="2" height="30" fill="#7E5594" />
                    </svg>

                    <a href={props.linkedin} target="_blank" rel="noreferrer">
                        <svg className="linkedin" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.762 24 24 21.761 24 19V5C24 2.239 21.762 0 19 0ZM8 19H5V8H8V19ZM6.5 6.732C5.534 6.732 4.75 5.942 4.75 4.968C4.75 3.994 5.534 3.204 6.5 3.204C7.466 3.204 8.25 3.994 8.25 4.968C8.25 5.942 7.467 6.732 6.5 6.732ZM20 19H17V13.396C17 10.028 13 10.283 13 13.396V19H10V8H13V9.765C14.396 7.179 20 6.988 20 12.241V19Z" fill="#7E5594" />
                        </svg>
                    </a>
                </div>
            </div>
        </>
    );
}

export default AdvisorCard;
