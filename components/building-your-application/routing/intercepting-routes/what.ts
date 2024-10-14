export const what=()=>{
    return `
    Intercepting routes allows you to load a route from another part of your application within the current layout. This routing paradigm can be useful when you want to display the content of a route without the user switching to a different context.

    CONVENTION
    Intercepting routes can be defined with the (..) convention, which is similar to relative path convention ../ but for segments.

    You can use:

        (.) to match segments on the same level
        (..) to match segments one level above
        (..)(..) to match segments two levels above
        (...) to match segments from the root app directory
        
    `
}