import Link from "next/link";
import React from "react";

export default function Page({children}:{children:React.ReactNode}){
    return <div className="w-full h-full flex flex-col justify-center items-center gap-2">
        <nav>
            <Link href={'/add'}>Add product</Link>
            <Link href={'/see'}>See product</Link>
        </nav>
        {children}
    </div>
}