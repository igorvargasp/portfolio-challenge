import React from "react";
import Image from "next/image";

export interface StackCardProps {
    icon: string;
    title: string;
    alt: string;
}

const StackCard: React.FC<StackCardProps> = ({
    icon,
    title,
    alt,
}) => {
    return (
        <div className={`flex border border-[#8A8A8A] hover:border-white items-center justify-center gap-2 rounded-sm cursor-pointer py-10 shadow-lg`}>

            <figure>
                <Image src={icon} alt={alt} width={100} height={100} />
                <figcaption className={`hidden`}>{alt}</figcaption>
            </figure>
            <div className={`text-[#8A8A8A] text-2xl hover:text-white`}>{title}</div>
        </div>
    );
};

export default StackCard;
