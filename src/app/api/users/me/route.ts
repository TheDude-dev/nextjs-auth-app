import { getDataFromToken } from "@/helpers/getDataFromToken"
import { NextRequest, NextResponse } from "next/server"
import User from "@/models/userModel"
import {connect} from "@/dbconfig/dbConfig"
connect()

export async function GET(request: NextRequest) {
    try{
        
    } catch(error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}


