import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <h1>How React Works</h1>
            <h5>React mainly works on two packages which is React and React DOM. When we type any code in functional component or class based component, that remain as a pure javascript code. Pure JavaScript code converted into HTML by React package, which uses Babel Compiler.Because what we see on a webpage is HTML.Then React DOM package injects that converted code into index.html. That's how React works.</h5>
            <h2>Props VS State in React</h2>
            <h5>In React props are used to pass data through one component to another component. But State used as managing data like modify and update. Props data is read only, we can't modify the data. State can't directly modify or update, we have to call setState() function to update the data and store in State. In case of Props we can only pass the data through parent to child components.State data can be updated by that's own component but cannot access from outside component.</h5>
            <h2>How useState works in React</h2>
            <h5>In React useState is a hook which is used in Functional component. While using useState hook, we get two variables.First variable is the initial state which's value is what we given inside useState's first bracket.Second variable is a function to update the state. Whatever we do or need to update the first variable , we just need to call the function. Then it will update the value and store it on first variable.</h5>
        </div>
    );
};

export default Footer;