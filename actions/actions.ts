"use server"

import { revalidatePath } from "next/cache"



export async function sendEmail(formData: FormData) {
    const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
    }

    try {
        const response = await fetch(`${process.env.API_URL}/email`, {
            method: "POST",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(data),
        })
     
        if(response.status === 200) {
            revalidatePath("/")
     return await response.json();
        }
    } catch (error) {
        console.log(error)
    }
}