"use server"

import { revalidatePath } from "next/cache"



export async function sendEmail(_state: any, input: FormData) {
    try {
        if(!input){
            return;
        }
        const data = {
            name: input.get("name"),
            email: input.get("email"),
            message: input.get("message"),
        }
        const response = await fetch(`${process.env.API_URL}/email`, {
            method: "POST",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(data),
        })
      if(response.status === 200) {
        return { message: "Email sent successfully!"}
        }
        revalidatePath("/")
    } catch (error) {
        console.log(error)
    }

}