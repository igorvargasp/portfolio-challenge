
import Image from "next/image"

const HeroSection = () => {
    return (
        <section className="flex flex-col md:flex md:flex-row w-full justify-center items-center mt-20"> 
        <div className="flex flex-col-reverse md:flex-row md:w-9/12 w-full  justify-between">
        <section className="flex flex-col md:w-[70%] w-full pl-8 md:pl-2 space-y-10 mt-10 md:mt-0">
        <h1 className="bg-gradient-to-r from-[#E9E9E9] to-[#515151] text-transparent bg-clip-text lg:text-8xl text-6xl font-bold">Building digital prodcuts, brands, and experience.</h1>
        <p className="text-2xl text-[#8A8A8A] text-justify w-[95%]">Passionate Fullstack Developer dedicated to creating innovative and impactful digital experiences. Solid experience in development with React.js, Next.js, and Node.js. Committed to driving results through technical excellence and collaboration within multidisciplinary teams.</p>
        <button className="font-bold text-[16px] text-[#9A9A9A] border border-[#242424]  p-5 rounded-md lg:w-[25%] w-[60%]">Explore</button>
        </section>
        <section className="flex flex-col md:w-[30%] w-full md:items-end items-center justify-center md:space-y-2 space-y-6 ">
            <Image quality={100} width="250" height="250" alt="igor`s profile picture" src="/profile.jpg" className="rounded-full opacity-35"/>
            <span className="items-end text-white md:pr-16 pr-0 animate-typing">Hi, I'm Igor 👋</span>
        </section>
        </div>
        </section>
    )
}


export default HeroSection;