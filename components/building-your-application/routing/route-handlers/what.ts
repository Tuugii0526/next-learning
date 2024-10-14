export const what=()=>{
    return `
    Route Handlers can be nested inside the app directory, similar to page.js and layout.js. But there cannot be a route.js file at the same route segment level as page.js.

    Nextrequest and Nextresponse APIS
    BEHAVIOUR:
    1.CACHING
        Route Handlers are cached by default when using the GET method with the Response object.
        TypeScript Warning: Response.json() is only valid from TypeScript 5.2. If you use a lower TypeScript version, you can use NextResponse.json() for typed responses instead.
    2.OPTING OUT OF CACHING
        You can opt out of caching by:

Using the Request object with the GET method.
Using any of the other HTTP methods.
Using Dynamic Functions like cookies and headers.
The Segment Config Options manually specifies dynamic mode.
    3.ROUTE RESOLUTION
        As i understood , the route.ts should be in another route from page.ts.
    4.EXAMPLES
        REVALIDATING CACHED DATA 
                        export async function GET() {
            const res = await fetch('https://data.mongodb-api.com/...', {
                next: { revalidate: 60 }, // Revalidate every 60 seconds
            })
            const data = await res.json()
            
            return Response.json(data)
            }
        DYNAMIC FUNCTIONS
            COOKIES
                You can read or set cookies with cookies from next/headers. This server function can be called directly in a Route Handler, or nested inside of another function
            HEADERS
                
    `
}