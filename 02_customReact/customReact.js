
//Create our own react type libray

//First of all, create a container which contains the root element or the element from the index where this would be injected
const mainContainer = document.querySelector('#root')

//Now our react element 
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click'
    //This is the react element which defines the type of element that would be injected, its properties etc.
} //This is custom react
//Now the function which creates the element 
function create(Container, reactElement){
    const dom = document.createElement(reactElement.type)
    dom.innerHTML = reactElement.children
    /*
    dom.setAttribute('href', reactElement.props.href)
    dom.setAttribute('target', reactElement.props.target)   
    */
    for(const prop in reactElement.props){
        dom.setAttribute(prop, reactElement.props[prop])
    }
      
    Container.appendChild(dom) //And this is the custom render
}
create(mainContainer, reactElement)
