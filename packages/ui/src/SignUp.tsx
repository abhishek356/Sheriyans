"use client"

import { Button } from "@mui/material"
import { Router } from "next/dist/client/router"
import Link from 'next/link'
import {useRouter} from 'next/navigation'

export default function Signup()
{

    const router = useRouter();

    return(
        <>
        <Button variant = {'text'} sx = {{
            margin:'0px',
            padding:'0px',
            textTransform:"none",
            color:'black',
            backgroundColor:'white',
            fontFamily:'inherit'
        }} onClick = {()=>{router.push('/signup')}}>Sign Up</Button>
        </>
    )
}