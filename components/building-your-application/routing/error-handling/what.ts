export const what = () => {
  return `
    RECOVERING FROM ERRORS:
    You can use reset() function .

    NESTED ROUTES:
    The nested component hierarchy has implications for the behavior of error.js files across a nested route:
Errors bubble up to the nearest parent error boundary. This means an error.js file will handle errors for all its nested child segments. More or less granular error UI can be achieved by placing error.js files at different levels in the nested folders of a route.
An error.js boundary will not handle errors thrown in a layout.js component in the same segment because the error boundary is nested inside that layout's component.

HANDLING ERRORS IN LAYOUTS:
To handle errors within the root layout or template, use a variation of error.js called global-error.js.
Unlike the root error.js, the global-error.js error boundary wraps the entire application, and its fallback component replaces the root layout when active. Because of this, it is important to note that global-error.js must define its own <html> and <body> tags.

HANDLING SERVER ERRORS:
If an error is thrown inside a Server Component, Next.js will forward an Error object (stripped of sensitive error information in production) to the nearest error.js file as the error prop.



    `;
};
