function customRender(reactElement, container)
{
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        if(prop == 'children') continue;
        domElement.serAttribute(props, reactElement.props[prop])
    } 
    container.appendChild(domElement)
}


const reactElement = {
    type: 'a',
    props: { //OBject
        href: 'https:google.com',
        traget: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainar = document.querySelector("#root");

customRender(reactElement, mainContainer)