All the depenedencies after getting installed gets in the node modules folder


Package Lock JSON is a stable version of the package json file


Capitalized function name starting


In vite, names of the component should be jsx
 
****
It split the work into two parts:


Dependencies (libraries that rarely change) are pre-bundled once using fast native tooling, so they're ready instantly.


Source code (your application code that changes frequently) is served on-demand over native ESM. The browser loads only what it needs for the current page, and Vite transforms each file as it's requested.


Components are written as JavaScript classes or functions that define a render method. The render method returns a description of what the component should look like, using JSX syntax.


When a component is rendered, React creates a virtual DOM (VDOM) representation of the component. The VDOM is a lightweight in-memory representation of the DOM, and it is used to optimize the rendering of components.


React compares the VDOM representation of the component with the previous VDOM representation (if it exists). If there are differences between the two VDOMs, React calculates the minimum number of DOM updates needed to bring the actual DOM into line with the new VDOM.


React updates the actual DOM with the minimum number of DOM updates needed to reflect the changes in the VDOM.


This process is known as reconciliation, and it is an important aspect of how React works. By using a declarative approach and a VDOM, React is able to optimize the rendering of components and improve the performance of web applications.