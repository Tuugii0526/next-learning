export const what=()=>{
    return `
    There are four ways to navigate between routes in Next.js:
    1.Using <Link> component
    2.Using the USEROUTER hook (Client components)
    3.Using the REDIRECT function (Server components)
    4.Using the native HISTORY API


    Inside the Link component , you can write :
    <Link href={'/dashboard#top'}>
    In Link component ,there is scroll prop , which indicates the behaviour of going back where you left if visited or top if unvisited.

    useRouter() hook
    The useRouter() hook allows you to programatically change routes from Client components

    
    redirect() function
    This function is used for  server components .

    HISTORY API 
    window.history has two methods as seen so far:
    1. pushState()
    2.replaceState()
    There is shown two examples :
    One is to implement sorting 
    Two is to switch locale

    
    `
}