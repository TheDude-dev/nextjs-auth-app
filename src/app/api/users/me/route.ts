import { NextRequest } from "next/server";
import { Jwt } from "jsonwebtoken";

export const getDataFromToken = (request: NextRequest) => {
    try{
        const token = request.cookies.get("token")?.value || ""
    } catch(error: any) {
        throw new Error(error.message)
    }
}