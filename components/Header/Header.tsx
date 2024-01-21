import { NavItemsProps, navItems } from "@/utils/NavItems";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <header className="w-full flex p-4 justify-center">
            <div className="flex lg:w-9/12 w-11/12 justify-between">
                <section className="flex w-1/2 justify-start items-center space-x-5">
                    <span className="flex dark:bg-black-primary bg-slate-100 p-5 rounded-full border-solid border-gray-primary border-[0.5px] ">
                        <Image width="20" height="20" alt="Mail icon to get in touch" src="/icons/mail.svg" />
                    </span>
                    <Link href="#contact">
                        <span className="text-gray-primary light-mode-text dark-mode-text cursor-pointer">Get in touch</span>
                    </Link>
                </section>
                <nav className="flex w-1/2 justify-end items-center">
                    <ul className="flex space-x-5 list-none pr-6 m-0">
                        {navItems.map((item: NavItemsProps, index) => (
                            <React.Fragment key={index}>
                                <li>
                                    <Link href={item.url} target={"_blank"}>
                                        <span className="text-gray-primary light-mode-text dark-mode-text">{item.name}</span>
                                    </Link>
                                </li>
                                {item.hasSeparator && <div className="border-l border-l-gray-8A" aria-hidden="true" />}
                            </React.Fragment>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
