import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
    return (
        <div>
            <h1>Custom App !</h1>
        </div>
    )
}

// const ReactElement = {
//     type: "a",
//     props: {
//       href: "https://google.com",
//       target: "_blank",
//     },
//     children: "click me to visit google",
//   };

    const anotherElement = (
        <a href="https://google.com" target='_blank'>Visit google</a>
    )

    const ReactElement = React.createElement(
        "a",
        {href:"https://google.com" ,target : "_blank"},
        "click me go to google"
    )
  
ReactDOM.createRoot(document.getElementById('root')).render(

    // ReactElement
    <App/>

)
