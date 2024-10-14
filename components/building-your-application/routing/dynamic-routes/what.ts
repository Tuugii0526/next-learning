export const what=()=>{
    return `
    Dynamic Segments are passed as the PARAMS prop to layout ,page ,route ,and generateMetadata functions.
    
    GENERATING STATIC PARAMS 
    **The generateStaticParams function can be used in combination with dynamic route segments to statically generate routes at build time instead of on-demand at request time.
    **The primary benefit of the generateStaticParams function is its smart retrieval of data. If content is fetched within the generateStaticParams function using a fetch request, the requests are automatically memoized. This means a fetch request with the same arguments across multiple generateStaticParams, Layouts, and Pages will only be made once, which decreases build times.

    CATCH-ALL-SEGMENTS
    [...slug]

    OPTIONAL-CATCH-ALL-SEGMENTS
     [[...slug]]
     
    `
}