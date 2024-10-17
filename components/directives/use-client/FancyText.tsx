export default function FancyText({title,text}:{title?:boolean,text:string}){
    console.log('title is ',title)
    return title ? <p className="text-green-400 text-[20px] text-center">{text }{' true'}</p> : <p className="text-cyan-300">{text}{' false'}</p>
}