import { stackItems } from "@/utils/stackItems";
import StackCard from "../../Card/StackCard";




const StackSection = () => {

    return (
        <section className="w-full flex flex-col justify-center items-center">
            <article className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:w-[75%] w-11/12 mt-16">
                {stackItems.map((item) => (
                    <StackCard
                    alt={item.alt}
                    icon={item.icon}
                    title={item.name}
                    key={item.name}
                    />
                ))}
            </article>
        </section>
    )
}

export default StackSection;
