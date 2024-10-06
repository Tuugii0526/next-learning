'use client'
import Link from "next/link"
import { useState } from "react"
export default function Page(){
    const [counter,setCounter]=useState(0)
    const onClick=()=>{
        setCounter(p=>p+1)
    }
    return <div className="flex flex-col">
        Counter: {counter}
        <button className="btn" onClick={onClick}>Add</button>
        <Link href={'/dashboard/settings'} className="btn"> 
        Go to settings
        </Link>
    </div>
}