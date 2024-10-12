export default function Page(){
    return (
        <div>
        <h2>Routing fundamentals</h2>
        <p>File conventions:</p>
        <ol>
            <li>layout</li>
            <li>page</li>
            <li>loading</li>
            <li>not-found</li>
            <li>error</li>
            <li>global-error</li>
            <li >route:
             <p>Server-side API endpoint</p>
            </li>
            <li>template:
                <p>Specialized re-rendered Layout UI</p>
            </li>
            <li>default</li>
        </ol>
        <p>Advanced routing patterns</p>
        <ul>
            <li>Parallel routes</li>
            <li>Intercepting</li>
        </ul>
        </div>
    )
}