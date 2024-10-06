'use client'
import { useSelectedLayoutSegment } from "next/navigation"
import { useState } from "react"
export default function Page(){
    const [counter,setCounter]=useState(0)
    const onClick=()=>{
        setCounter(p=>p+1)
    }
    return <div className="flex flex-col">
        Counter: {counter}
        <button className="btn" onClick={onClick}>Add</button>
    </div>
}