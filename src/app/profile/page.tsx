"use client"

import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import {toast} from "react-hot-toast"

export default function ProfilePage() {
    const router = useRouter()
    const [data, setData] = useState("nothing")

    const logout = async () => {  
        try {
            await axios.get("api/users/logout")
            toast.success("Logout successful")
            router.push("/profile")
        } catch(error: any) {
            console.log(error.message)
            toast.error(error.message)
        }
    }
    //TODO : fix axios issue
    const getUserDetails = async () => {
        const res = await axios.get('/api/users/me')
        console.log(res.data)
        setData(res.data.data._id)
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1> 
            <hr/>
            <p>Profile page</p>
            <h2 className="p-1 rounded bg-yellow-500">{data === "nothing" ? "Nothing" : <Link href={`/profile/${data}`}>{data}</Link>}</h2>
            <hr/>
            <button 
            onClick={logout}
            className="mt-4 bg-blue-500 hover:bg-blue-400 px-4 py-2 font-bold text-white rounded">Logout</button>
             <button 
            onClick={getUserDetails}
            className="mt-4 bg-yellow-500 hover:bg-yellow-400 px-4 py-2 font-bold text-white rounded">GetUser Details</button>
        </div>
    )
}