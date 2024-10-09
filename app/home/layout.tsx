import {adminOrUser} from '@/lib/parallelRoute'
export default function Layout({
    children,user,admin
}:Readonly<{children:React.ReactNode;user:React.ReactNode;admin:React.ReactNode}>)
{
    const role= adminOrUser()
    return <div className='w-full h-screen'>{role==='admin' ? admin:user}</div>
}