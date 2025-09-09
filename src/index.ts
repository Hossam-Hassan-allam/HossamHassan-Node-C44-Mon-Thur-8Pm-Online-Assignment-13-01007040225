import express from 'express'
import applcation from './app.conroler'
import { config } from 'dotenv'
config({path:"./config/local.env"})
const app=express()
const port=process.env.PORT
app.listen(port,()=>{ 
    console.log("app is running in ",port)
})
applcation(app,express)