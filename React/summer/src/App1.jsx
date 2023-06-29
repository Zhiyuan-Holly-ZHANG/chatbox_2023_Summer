import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Segment } from "semantic-ui-react";
import React from "react";
import ChatBot from "react-simple-chatbot";

function App() {
    const [count, setCount] = useState(1)
    const steps = [
        {
            id: "Greet",
            message: "Hello, Welcome to our shop",
            trigger: "Done",
        }];

    // ReactDOM.render(
    //     <ChatBot steps={steps} />,
    //     document.getElementById('root')
    // );
    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            {/* <Segment floated="right">
                <ChatBot steps={steps} />
            </Segment> */}
        </>
    )
}

// 
// function App() {
//   const steps = [
//       {
//           id: "Greet",
//           message: "Hello, Welcome to our shop",
//           trigger: "Done",
//       },
//       {
//           id: "Done",
//           message: "Please enter your name!",
//           trigger: "waiting1",
//       },
//       {
//           id: "waiting1",
//           user: true,
//           trigger: "Name",
//       },
//       {
//           id: "Name",
//           message: "Hi {previousValue}, Please select your issue",
//           trigger: "issues",
//       },
//       {
//           id: "issues",
//           options: [
//               {
//                   value: "React",
//                   label: "React",
//                   trigger: "React",
//               },
//               { value: "Angular", label: "Angular", trigger: "Angular" },
//           ],
//       },
//       {
//           id: "React",
//           message:
//               "Thanks for letting your React issue, Our team will resolve your issue ASAP",
//           end: true,
//       }, {
//           id: "Angular",
//           message:
//               "Thanks for letting your Angular issue, Our team will resolve your issue ASAP",
//           end: true,
//       },
//   ];
//   return (
//       <><Segment floated="right">
//           <ChatBot steps={steps} />
//       </Segment>
//       </>
//   )
// }

export default App
