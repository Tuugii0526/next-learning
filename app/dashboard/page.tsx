"use client";
import { useFormState } from "react-dom";
export default function Page() {
    async function increment(previousState:number,formData:FormData)
    {
        console.log('name:',formData.get('name'))
        console.log('previous state:',previousState)
        return previousState+1
    }
    const [state,formAction]=useFormState(increment,0)
  return <form className="flex flex-col gap-1">
{state}
<input name="name" type="text" className="ring-1 rounded-sm"/>
<button formAction={formAction} className="btn">Add</button>
  </form>;
}
