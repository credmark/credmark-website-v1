import * as React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <>
            <div className="nav py-10">
                <div className="block m-auto max-w-xs">
                    <div className="flex space-x-4 justify-center pb-5">
                        <a href="https://twitter.com/credmarkhq" target="_blank" rel="noreferrer"><img width={30} src="../assets/discordsingle.png" alt="Discord logo" target="_blank" rel="noreferrer" /></a>
                        <a href="https://t.me/credmark" target="_blank" rel="noreferrer"><img width={30} src="../assets/telegram.png" alt="Telegram logo" target="_blank" rel="noreferrer" /></a>
                        <a href="https://discord.com/invite/3dSfMqP3d4" target="_blank" rel="noreferrer"><img width={30} src="../assets/twitter.png" alt="Twitter logo" target="_blank" rel="noreferrer" /></a>
                    </div>
                    <div className="grid grid-cols-1">
                        <a className="block m-auto" href="mailto:info@credmark.com" rel="noreferrer noopener" target="_blank">info@credmark.com</a>
                        <p className="block m-auto text-center">
                            © 2021 Credmark. All rights
                            <br></br>
                            reserved
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;