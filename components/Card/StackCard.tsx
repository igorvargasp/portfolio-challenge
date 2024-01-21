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
        <div className={`flex border border-gray-primary dark:hover:border-white items-center justify-center gap-2 rounded-sm cursor-pointer py-10 shadow-lg`}>

            <figure>
                <Image src={icon} alt={alt} width={100} height={100} />
                <figcaption className={`hidden`}>{alt}</figcaption>
            </figure>
            <div className={`text-gray-primary text-2xl dark-mode-text light-mode-text`}>{title}</div>
        </div>
    );
};

export default StackCard;
