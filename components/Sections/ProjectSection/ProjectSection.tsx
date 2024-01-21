import { carrerItems } from "@/utils/carrerItems"
import ProjectCard from "../../Card/ProjectCard"



const ProjectSection = () => {

    return (
     <>
        <h1 className="bg-gradient-to-r from-[#E9E9E9] to-[#515151] text-transparent bg-clip-text text-6xl font-bold text-center lg:mt-60 mt-20">Carrer</h1>
            <section className="w-full flex justify-center items-center mt-60">
                <article className="flex flex-col lg:w-3/4 w-11/12 space-y-20 ">     
                    {carrerItems.map((item, index) => (
                        <ProjectCard
                        company={item.company}
                        description={item.description}
                        technologies={item.technologies}
                        key={item.company}
                        itensAlign={index % 2 ? "start" : "end"}
                        date={item.date}
                        />
                      ))}
                </article>
            </section>
    </>
    )
}

export default ProjectSection;