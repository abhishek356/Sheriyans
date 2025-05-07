"use client"

import { Button } from "@mui/material"
import {useRouter} from 'next/navigation'


export default function SignIn ()
{

    const router = useRouter();

    return(<>
    <Button variant = {"text"}
    disableElevation = {true}
    sx = {{
        margin:'0px',
        padding:'0px',
        textTransform:'none',
        color:'black',
        backgroundColor:'white',
        fontFamily:'inherit'
    }}
    onClick = {()=>{router.push('/signin')}}>Sign In</Button>
    </>)
}