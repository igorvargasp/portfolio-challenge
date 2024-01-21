import { sendEmail } from "@/actions/actions";

const ContactSection = () => {

    
    return (
       
        <section className="flex flex-col w-full justify-center items-center my-20">
            <h2 className="text-white text-left lg:w-8/12 w-11/12  flex text-4xl border-l-2 border-l-white pl-2" id="contact">Send me a message</h2>
            <div className="flex flex-col  lg:w-8/12 w-11/12 justify-center gap-5">
                <form  className="grid grid-cols-1 gap-5 lg:grid-cols-1 mt-5 w-full" action={sendEmail}>
                    <input type="text" placeholder="Your name" name="name" required className="w-full text-gray-100 bg-stone-950 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"/>
                    <input  type="email" placeholder="Your email" name="email" required className="w-full text-gray-100 bg-stone-950 mt-2 p-5 rounded-lg focus:outline-none focus:shadow-outline"/>
                    <textarea required placeholder="Your message"  name="message" className=" pb-16  w-full text-gray-100 bg-stone-950 mt-2 p-5 rounded-lg focus:outline-none focus:shadow-outline"/>       
                    <button type="submit" className="font-bold text-[16px] text-[#9A9A9A] border border-[#242424]  p-5 rounded-md w-full md:w-1/5">Send</button>  
                </form>        
            </div>
        </section>
   
    )
}

export default ContactSection;