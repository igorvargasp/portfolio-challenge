
interface ProjectCardProps {
    company: string,
    description: string,
    technologies: string[],
    itensAlign: string;
    date: string;
}



const ProjectCard = ({
company,
description,
technologies,
itensAlign,
date
}: ProjectCardProps) => {

    return (
        <div className={`flex flex-col w-full gap-10  pb-10 items-center`}>
            
       
   
           <div className={`relative flex flex-row-reverse justify-center items-center lg:w-10/12 w-full ${itensAlign  === "start" ? "border-l" :" border-r"}`}>
           <span className={`text-white  absolute   ${itensAlign  === "start" ? "left-10" :" right-10"}`}>{date}</span>
           <h3 className=" text-justify text-[#8A8A8A] text-2xl flex hover:text-white ">{company}</h3>
           </div>
           <p className=" lg:w-1/2 w-full text-[#8A8A8A] hover:text-white ">{description}</p>
         <div className="flex space-x-3">
            
           {
            technologies.map((item, index) => (
                <button key={index} className="font-bold text-[10px] text-[#9A9A9A] border border-[#242424]  p-3 rounded-md lg:w-[25%] w-[50%] ">{item}</button>
            ))
           }
           </div>
      
        </div>
    )
}

export default ProjectCard