"use client";
import React, { useEffect, useState } from "react";
import { sendEmail } from "@/actions/actions";
import { useFormState, useFormStatus } from "react-dom";




const ContactSection = () => {
    const [state, formAction] = useFormState(sendEmail, null);
    const [message, setMessage] = useState<string>("");

    useEffect(() => {
        let timeoutId: any;
        if(state?.message){
            setMessage(state.message);
            timeoutId = setTimeout(() => {
                setMessage("");
            },3000)
        }
        return () => clearTimeout(timeoutId)
    },[state?.message])
    return (
        <section className="flex flex-col w-full justify-center items-center my-20">
            <h2 className="text-white text-left lg:w-8/12 w-11/12 flex text-4xl border-l-2 border-l-white pl-2" id="contact">
                Send me a message
            </h2>
            <div className="flex flex-col lg:w-8/12 w-11/12 justify-center gap-5">
                <form className="grid grid-cols-1 gap-5 lg:grid-cols-1 mt-5 w-full" action={formAction}>
                    <label className="text-gray-tertiary">
                        Name:
                        <input
                            type="text"
                            placeholder="Your name"
                            name="name"
                            required
                            className="w-full dark:text-gray-100 dark:bg-stone-950 bg-slate-100 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        />
                    </label>
                    <label  className="text-gray-tertiary">
                        Email:
                        <input
                            type="email"
                            placeholder="Your email"
                            name="email"
                            required
                            className="w-full dark:text-gray-100 dark:bg-stone-950 bg-slate-100 mt-2 p-5 rounded-lg focus:outline-none focus:shadow-outline"
                        />
                    </label>
                    <label  className="text-gray-tertiary">
                        Message:
                        <textarea
                            required
                            placeholder="Your message"
                            name="message"
                            className="pb-16 w-full dark:text-gray-100 dark:bg-stone-950 bg-slate-100 mt-2 p-5 rounded-lg focus:outline-none focus:shadow-outline"
                        />
                    </label>
                    <SubmitButton/>
                </form>
                {message ? <span className="dark:text-white text-black">{message}</span>: null}
            </div>
        </section>
    );
};


function SubmitButton() {
    const { pending } = useFormStatus()
  
    return (
        <button  className="font-bold text-[16px] text-gray-primary border border-black-primary p-5 rounded-md w-full md:w-1/5">
        {pending ? 'Sending...' : 'Send'}
        </button>
    )
  }


export default ContactSection;
