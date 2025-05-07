"use client"

import { useState } from "react"
import { Box, Card, CardContent, CardHeader, TextField, Typography,Button, appBarClasses } from "@mui/material"
import axios from 'axios'


interface cred {
    username:string,
    password:string
}

export default function () {

const [creds,setCreds] = useState<cred>({username:"",password:""})
const isPasswordVisible: boolean = false;
const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setCreds({...creds,[e.target.id]:e.target.value})
}

const handleSubmit = async () => {
    window.prompt(JSON.stringify(creds));
 
    try{
        const res = await axios.post('http://localhost:3002/api/signup',creds)
    console.log('response received from the backend.')
    window.prompt(JSON.stringify(res))
    }
    catch(error){
        console.log('Error occured while tryting to communicate with the backend',error)
    
    }
        
}

    return (<>
    
    <Box sx = {{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        boxShadow:'inherit',
        padding : '20px 0 0 0',
        height:'90%'
        
}}>
        <Card 
        sx = {{
            border:'2px solid black',
            width:'25vw',
            height:'60vh',
            backgroundColor:'rgba(255,255,255, 0.6)',
            backdropFilter: 'blur(10px)',
            boxShadow:'inherit',
            borderRadius:'10px'}}>
                <CardContent sx = {{
                    display:'grid',
                    gridTemplateColumns:'1fr',
                    gridTemplateRows:'repeat(4,1fr)',
                    alignContent:'space-between',
                    gap:"5px",
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <CardHeader title = "Sign Up" sx = {{
                        textAlign:'center'
                    }}/>
                    <TextField id = "username" name = "username" variant = "outlined" type = "text"  onChange = {handleInputChange}
                    sx = {{
                        color:'black',
                        "active":{
                            color:'black'
                        }
                    }}/>
                    <TextField id = "password" name = "password" variant = "outlined" type = {isPasswordVisible ? "text" : "password"}
                      onChange = {handleInputChange}
                      />
                   
                   <Box sx = {{
                    width:'100%',
                    height:"100%",
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    marginTop:"20px"
                   }}>
                   <Button variant = {"contained"} size = "small" sx = {{
                        width:"40%",
                        height:'70%',
                        backgroundColor:'black',
                        textAlign:'center',
                        padding:"2px",
                        borderRadius:"10px"
                    }}
                    onClick = {handleSubmit}
                    >Sign in</Button>
                   </Box>
                  
                </CardContent>

            </Card>
    </Box>
    </>)
}