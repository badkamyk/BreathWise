import React from 'react';

type AboutPersonProps = {
    name: string;
    imgFirst: string;
    imgSecond: string;
    alt: string;
}

function AboutPerson({name, imgFirst, imgSecond, alt} : AboutPersonProps) {
    return (
                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                    <img className="md:block hidden" src={imgFirst} alt={name} />
                    <img className="md:hidden block" src={imgSecond} alt={name} />
                    <p className="font-medium text-xl leading-5 text-gray-800 mt-4">{name}</p>
                </div>
    );
}

export default AboutPerson;
