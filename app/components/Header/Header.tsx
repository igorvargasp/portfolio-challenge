
import { NavItemsProps, navItems } from "@/utils/NavItems";
import Image from "next/image";
import Link from "next/link";
import React from "react";







const Header = () => {

    return (
        <header className="w-full flex p-4  justify-center ">
        <div className="flex w-9/12  justify-between">
            <section className="flex w-1/2 justify-start items-center space-x-5">
                <div className="flex bg-[#202023] p-5 rounded-full border-solid border-[#8A8A8A] border-[0.5px] ">
                    <Image width="20" height="20" alt="Mail icon to get in touch" src="/icons/mail.svg" />
                    
                </div>
                <Link className="text-[#8A8A8A] hover:text-white cursor-pointer" href="#contact">Get in touch</Link>
            
            </section>
            <nav className="flex w-1/2 justify-end items-center">
                <ul className="flex space-x-5 list-none pr-6 m-0">
                    {
                        navItems.map((item: NavItemsProps, index) => {
                            return (
                                <React.Fragment key={index}>
                                <Link href={item.url} target="_blank" className="text-title hover:text-white">
                                <li>
                                {item.name}
    
                                </li>
                                </Link>
                                {item.hasSeparator && <div className="border-l border-l-[#8A8A8A]"/>}
                                </React.Fragment>
                            )
                        })
                    }
                </ul>
            </nav>
            </div>
        </header>
    )
}

export default Header;