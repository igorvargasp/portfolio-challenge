
import { NavItemsProps, navItems } from "@/app/utils/NavItems";
import Image from "next/image";
import Link from "next/link";







const Header = () => {

    return (
        <header className="w-full flex p-4  border-b-[#8A8A8A] justify-center ">
        <div className="flex w-9/12  justify-between">
            <section className="flex w-1/2 justify-start items-center space-x-5">
                <div className="flex bg-[#202023] p-5 rounded-full border-solid border-[#8A8A8A] border-[0.5px]">
                    <Image width="20" height="20" alt="Mail icon to get in touch" src="/icons/mail.svg" />
                    
                </div>
                <span className="text-[#8A8A8A] hover:text-white">Get in touch</span>
            
            </section>
            <section className="flex w-1/2 justify-end items-center">
                <ul className="flex space-x-5 list-none pr-6 m-0">
                    {
                        navItems.map((item: NavItemsProps, index) => {
                            return (
                                <>
                                <Link href={item.url} key={index} className="text-title hover:text-white">
                                <li>
                                {item.name}
    
                                </li>
                                </Link>
                                {item.hasSeparator && <div className="border-l border-l-[#8A8A8A]"/>}
                                </>
                            )
                        })
                    }
                </ul>
            </section>
            </div>
        </header>
    )
}

export default Header;