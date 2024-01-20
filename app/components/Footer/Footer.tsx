import { NavItemsProps, navItems } from "@/app/utils/NavItems"
import Link from "next/link"
import React from "react"




const Footer = () => {

    return (
    
        <footer className="flex w-full p-5 mt-10 justify-center">
            <section className="flex lg:w-9/12 w-11/12  justify-between items-center border-t boder-t-white">
            <span className="text-white pt-5">© 2023 All rights reserved.</span>
            <section className="flex lg:w-1/2 w-11/12 justify-end items-center pt-5">
                <ul className="flex space-x-5 list-none pr-6 m-0">
                    {
                        navItems.map((item: NavItemsProps, index) => {
                            return (
                                <React.Fragment key={index}>
                                <Link href={item.url}  className="text-title hover:text-white">
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
            </section>
            </section>
        </footer>

    )

}

export default Footer