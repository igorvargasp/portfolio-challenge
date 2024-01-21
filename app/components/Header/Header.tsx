import { NavItemsProps, navItems } from "@/utils/NavItems";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <header className="w-full flex p-4 justify-center">
            <div className="flex w-9/12 justify-between">
                <section className="flex w-1/2 justify-start items-center space-x-5">
                    <span className="flex bg-[#202023] p-5 rounded-full border-solid border-[#8A8A8A] border-[0.5px] ">
                        <Image width="20" height="20" alt="Mail icon to get in touch" src="/icons/mail.svg" />
                    </span>
                    <Link href="#contact">
                        <span className="text-[#8A8A8A] hover:text-white cursor-pointer">Get in touch</span>
                    </Link>
                </section>
                <nav className="flex w-1/2 justify-end items-center">
                    <ul className="flex space-x-5 list-none pr-6 m-0">
                        {navItems.map((item: NavItemsProps, index) => (
                            <React.Fragment key={index}>
                                <li>
                                    <Link href={item.url} target={"_blank"}>
                                        <span className="text-title hover:text-white">{item.name}</span>
                                    </Link>
                                </li>
                                {item.hasSeparator && <div className="border-l border-l-[#8A8A8A]" aria-hidden="true" />}
                            </React.Fragment>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
