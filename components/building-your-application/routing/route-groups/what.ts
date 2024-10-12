export const what=()=>{
    return `
   * The naming of route groups has no special significance other than for organization. They do not affect the URL path.
*Routes that include a route group should not resolve to the same URL path as other routes. For example, since route groups don't affect URL structure, (marketing)/about/page.js and (shop)/about/page.js would both resolve to /about and cause an error.
*If you use multiple root layouts without a top-level layout.js file, your home page.js file should be defined in one of the route groups, For example: app/(marketing)/page.js.
*Navigating across multiple root layouts will cause a full page load (as opposed to a client-side navigation). For example, navigating from /cart that uses app/(shop)/layout.js to /blog that uses app/(marketing)/layout.js will cause a full page load. This only applies to multiple root layouts.
    `
}