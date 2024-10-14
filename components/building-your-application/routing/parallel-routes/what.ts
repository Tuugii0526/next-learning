export const what=()=>{
    return `
    SLOTS
    **parallel routes are created using named slots.Slots are defined with the @folder convention. For example, the following file structure defines two slots: @analytics and @team.
    **However, slots are not route segments and do not affect the URL structure. 
    **Good to know:

The children prop is an implicit slot that does not need to be mapped to a folder. This means app/page.js is equivalent to app/@children/page.js.

    ACTIVE  STATE AND NAVIGATION
    **By default, Next.js keeps track of the active state (or subpage) for each slot. However, the content rendered within a slot will depend on the type of navigation:

Soft Navigation: During client-side navigation, Next.js will perform a partial render, changing the subpage within the slot, while maintaining the other slot's active subpages, even if they don't match the current URL.
Hard Navigation: After a full-page load (browser refresh), Next.js cannot determine the active state for the slots that don't match the current URL. Instead, it will render a default.js file for the unmatched slots, or 404 if default.js doesn't exist.

    useSELECTEDLAYOUTSEGMENTS()
    **Both useSelectedLayoutSegment and useSelectedLayoutSegments accept a parallelRoutesKey parameter, which allows you to read the active route segment within a slot.

    EXAMPLES!!!!!!!!
    Conditional routes
        You can use Parallel Routes to conditionally render routes based on certain conditions, such as user role. For example, to render a different dashboard page for the /admin or /user roles:
    TAB GROUPS
        You can add a layout inside a slot to allow users to navigate the slot independently. This is useful for creating tabs.
    MODALS
        Parallel Routes can be used together with Intercepting Routes to create modals. This allows you to solve common challenges when building modals, such as:

        Making the modal content shareable through a URL.
        Preserving context when the page is refreshed, instead of closing the modal.
        Closing the modal on backwards navigation rather than going to the previous route.
        Reopening the modal on forwards navigation.
    `
}