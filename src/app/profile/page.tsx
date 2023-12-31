"use client"

import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {toast} from "react-hot-toast"

export default function ProfilePage() {
    const router = useRouter()

    const logout = async () => {  
        try {
            await axios.get("api/users/logout")
            toast.success("Logout successful")
            router.push("/login")
        } catch(error: any) {
            console.log(error.message)
            toast.error(error.message)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1> 
            <hr/>
            <p>Profile page</p>
            <hr/>
            <button 
            onClick={logout}
            className="mt-4 bg-blue-500 hover:bg-blue-400 px-4 py-2 font-bold text-white rounded">Logout</button>
        </div>
    )
}