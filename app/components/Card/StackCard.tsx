
import Image from "next/image";

export interface StackCardProps {
    icon: string;
    title: string;
    alt: string,
 
}


const StackCard: React.FC<StackCardProps> = ({
    icon,
    title,
    alt,

}) => {

    return (
        <div className={`flex border border-[#8A8A8A] hover:border-white items-center justify-center gap-2 rounded-sm  cursor-pointer py-10 shadow-lg`}>
            <Image src={icon} alt={alt} width={100} height={100} />
            <span className={`text-[#8A8A8A] text-2xl hover:text-white`}>{title}</span>
        </div>
    )
}

export default StackCard;