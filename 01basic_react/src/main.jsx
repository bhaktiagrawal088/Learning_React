import React from 'react'
import ReactDOM from 'react-dom/client'

const reactElement = {
  type: 'a', 
  props : {
      href : "https://google.com",
      target : '_blank'
  },
  children : 'Click me to visit google'
}
// reactElement() -->Error
// <reactElement/> ---> Error
// reactElement ---> Error

const aReactElement = React.createElement(
  'a',
  {href : 'http://google.com', target: '_blank'},
  'click to visit the Google'
)

const username = "Nandini Agrawal"
function MyApp(){
  return(
    <div>
      <h1>Custom React App {2+2}</h1>
      <h1>{"Bhakti Agrawal"}</h1>
      <h1>{username}</h1>
    </div>
  )
}

const AnotherElement = (
  <a href='http://google.com' target='_blank'>Click to visit the google</a>
)
// anotherElement -- > Syntax Error
// <AnotherElement/> ---> Error
// AnotherElement ---> Sucessful

ReactDOM.createRoot(document.getElementById('root')).render(

    <MyApp/>

  
)
