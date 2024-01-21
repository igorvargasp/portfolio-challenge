import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section className="flex flex-col lg:flex lg:flex-row w-full justify-center items-center mt-20">
            <div className="flex flex-col-reverse lg:flex-row lg:w-9/12 w-full justify-between">
                <section className="flex flex-col lg:w-[70%] w-full pl-8 lg:pl-2 space-y-10 mt-10 md:mt-0">
                    <h1 className="bg-gradient-to-r from-[#E9E9E9] to-[#515151] text-transparent bg-clip-text lg:text-8xl text-6xl font-bold">
                        Building digital products, brands, and experiences.
                    </h1>
                    <p className="text-2xl text-[#8A8A8A] text-justify w-[95%]">
                        Passionate Fullstack Developer dedicated to creating innovative and impactful digital experiences. Solid experience in development with React.js, Next.js, and Node.js. Committed to driving results through technical excellence and collaboration within multidisciplinary teams.
                    </p>
                    <Link href="https://drive.google.com/file/d/1zqeznKAg8Wx8Co3Bcr-5dENGajcV3lFQ/view?usp=sharing" target="_blank">
                        <button className="font-bold text-[16px] text-[#9A9A9A] border border-[#242424] p-5 rounded-md lg:w-[25%] w-[60%]">Download CV</button>
                    </Link>
                </section>
                <section className="flex flex-col lg:w-[50%] w-full lg:items-end items-center justify-center lg:space-y-2 space-y-6">
                    <Image quality={100} width="250" height="250" alt="Igor's profile picture" src="/profile.jpg" className="rounded-full opacity-35" />
                    <span className="text-white lg:pr-16">Hi, I'm Igor 👋</span>
                </section>
            </div>
        </section>
    );
};

export default HeroSection;
