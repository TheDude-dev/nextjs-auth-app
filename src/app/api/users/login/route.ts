import { connect } from "@/dbconfig/dbConfig"
import User from "@/models/userModel"
import { NextRequest, NextResponse  } from "next/server"
import bcryptjs from "bcryptjs"


connect()

export async function POST(request: NextRequest) {
    try {

       const reqBody = await request.json()
       const {email, password} = reqBody
       console.log(reqBody)

       //Check if user exists
       const user = await User.findOne({email})

       if(!user) {
        return NextResponse.json({error: "User doesn't exist"}, {status: 400})
       }

       //Check if password is correct
       const validPassword = await bcryptjs.compare
       (password, user.password)



    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}