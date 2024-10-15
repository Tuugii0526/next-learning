import Link from "next/link";
export default function Page(){
    let photos=Array.from({length:6},(_,i)=>i+1)
    return <div className="cards-container">
        {
            photos.map(photo=>(
                <Link className="card" key={photo} href={`/building-your-application/routing/parallel-route/photos/${photo}` } passHref>
                    {photo}
                </Link>
            ))
        }
    </div>
}