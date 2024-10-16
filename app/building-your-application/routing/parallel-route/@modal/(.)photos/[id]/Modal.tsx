'use client'
import { useRouter } from "next/navigation"
import { createPortal } from "react-dom"
export function Modal({children}:{children:React.ReactNode}){
const router=useRouter()
function onDismiss(){
    router.back()
}
return createPortal(
    <div className="w-screen h-screen flex justify-center items-center ">
        <dialog  onClose={onDismiss}>
            {children}
            <p>Iam dialog</p>
            <button onClick={onDismiss}>Close</button>
        </dialog>
    </div>,document.getElementById('modal-root')!
)
}