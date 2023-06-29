import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client'; 
// import ReactDOM from 'react-dom';
import ChatBot from 'react-simple-chatbot';
import styled from 'styled-components';
import { useScrollToBottom } from 'react-scroll-to-bottom';
import App from './App.jsx';
import './index.css';
import './my.css'; // import your CSS file


// const steps = [
//   {
//     id: "Greet",
//     message: "Welcome to Hotel Alexandra I’m your digital assistant here to answer your questions about Hotel Alexandra",
//     trigger: "Done",
//   },
//   {
//     id: "Done",
//     message: "Choose an option below and I will do my best to find the right answer for you.",
//     trigger: "waiting1",
//   },
//   {
//     id: "waiting1",
//     user: true,
//     // trigger: "Name",
//     options: [
//       { value: "📅 New reservation",
//         label: "📅 New reservation",
//         trigger: "📅 New reservation",
//       },
//       { value: "🛬 Existing reservation", label: "🛬 Existing reservation", trigger: "🛬 Existing reservation" },
//       { value: "🛎️ On property assistance", label: "🛎️ On property assistance", trigger: "🛎️ On property assistance" },
//       { value: "🛫 Checked-out", label: "🛫 Checked-out", trigger: "🛫 Checked-out" },
//       { value: "ℹ️ Something else", label: "ℹ️ Something else", trigger: "ℹ️ Something else" },
//     ], trigger: "issues",
//   },
//   // {
//   //   id: "Name",
//   //   message: "Hi {previousValue}, Please select your issue",
//   //   trigger: "issues",
//   // },
//   {
//     id: "issues",
//     options: [
//       {
//         value: "React",
//         label: "React",
//         trigger: "React",
//       },
//       { value: "Angular", label: "Angular", trigger: "Angular" },
//     ],
//   },
//   {
//     id: "📅 New reservation",
//     message:
//       "Thanks for letting your React issue, Our team will resolve your issue ASAP",
//     // end: true,
//   }, {
//     id: "🛬 Existing reservation",
//     message:
//       "Thanks for letting your Angular issue, Our team will resolve your issue ASAP",
//     // end: true,
//   },
// ];

const steps = [
  {
    id: 'Greet',
    message: 'Welcome to Hotel Alexandra I’m your digital assistant here to answer your questions about Hotel Alexandra',
    trigger: 'Options',
  },
  {
    id: 'Options',
    options: [
      { value: 1, label: '📅 New reservation', trigger: 'Option1Selected' },
      { value: 2, label: '🛬 Existing reservation', trigger: 'Option2Selected' },
      { value: 3, label: '🛎️ On property assistance', trigger: 'Option3Selected' },
      { value: 4, label: '🛫 Checked-out', trigger: 'Option4Selected' },
      { value: 5, label: 'ℹ️ Something else', trigger: 'Option5Selected' },
    ],
  },
  {
    id: 'Option1Selected',
    message: 'Choose from the options below.',
    trigger: 'Option1 New reservation'
    // end: true,
  },
  {
    id: 'Option1 New reservation',
    options: [
      { value: 1, label: 'New booking for rooms', trigger: 'Option1.1 New booking' },
      { value: 2, label: 'Wedding & Events', trigger: 'Option1.2' },
      { value: 3, label: 'Group booking', trigger: 'Option1.3' },
      { value: 4, label: 'Long stay', trigger: 'Option1.4' },
      { value: 5, label: 'Something else', trigger: 'Option1.5' },
      { value: 6, label: 'Go back', trigger: 'Option6' },
    ],
  },
  // 
  {
    id: 'Option1.1 New booking',
    message: 'What’s your purpose of your visit to Hong Kong this time?',
    trigger: 'Option1.1'
    // end: true,

  },
  {
    id: 'Option1.1',
    options: [
      { value: 1, label: 'Business trip', trigger: 'Option1.1.1' },
      { value: 2, label: 'Holiday', trigger: 'Option1.1.2' },
      { value: 3, label: 'Conference, Events', trigger: 'Option1.1.3' },
      { value: 4, label: 'Anniversary', trigger: 'Option1.1.4' },
      { value: 5, label: 'Other', trigger: 'Option1.1.5' },
      { value: 6, label: 'Cancel', trigger: 'Option6' },
    ],
  },
  {
    id: 'Option1.1.1',
    message: 'Who are you traveling with?',
    // end: true,
    trigger: 'ppl'
  },
  {
    id: 'ppl',
    options: [
      { value: 1, label: 'Own Self', trigger: 'time' },
      { value: 2, label: 'Colleagues / Business Partner', trigger: 'time' },
      { value: 3, label: 'Couples', trigger: 'time' },
      { value: 4, label: 'Family', trigger: 'time' },
      { value: 5, label: 'Friend', trigger: 'Option1.1.5' },
      { value: 5, label: 'Group of Adults', trigger: 'Option1.1.5' },
      { value: 6, label: 'Cancel', trigger: 'Option6' },
    ],
  },
  {
    id: 'time',
    message: 'How long you are in Hong Kong for ?',
    // end: true,
    trigger: 'time_'
  },
  {
    id: 'time_',
    options: [
      { value: 1, label: 'Few hours', trigger: 'hours' },
      { value: 2, label: '1 night', trigger: 'Option1.1.5' },
      { value: 3, label: '2 nights', trigger: 'Option1.1.5' },
      { value: 4, label: '3+ nights', trigger: 'Option1.1.5' },
      { value: 5, label: '5+ nights', trigger: 'Option1.1.5' },
      { value: 6, label: 'Cancel', trigger: 'Option6' },
    ],
  },
  {
    id: 'hours',
    message: 'Please wait while we curate choices based on your search…',
    // end: true,
    trigger: 'msg'
  },
  {
    id: 'msg',
    message: 'Here are all our rooms to look at.',
    // end: true,
    trigger: 'room_info'
  },
  {
    id: 'room_info',
    options: [
      { value: 1, label: 'Few hours', trigger: 'hours' },
      { value: 2, label: '1 night', trigger: 'Option1.1.5' },
      { value: 3, label: '2 nights', trigger: 'Option1.1.5' },
      { value: 4, label: '3+ nights', trigger: 'Option1.1.5' },
      { value: 5, label: '5+ nights', trigger: 'Option1.1.5' },
      { value: 6, label: 'Cancel', trigger: 'Option6' },
    ],
  },
  {
    id: 'Option1.1.2',
    message: 'You selected option 3',
    end: true,
  },
  {
    id: 'Option1.1.3',
    message: 'You selected option 4',
    end: true,
  },
  {
    id: 'Option1.1.4',
    message: 'You selected option 5',
    end: true,
  },
  {
    id: 'Option1.1.5',
    message: 'You selected option 2',
    end: true,
  },
  {
    id: 'Option1.2',
    message: 'You selected option 3',
    end: true,
  },
  {
    id: 'Option1.3',
    message: 'You selected option 4',
    end: true,
  },
  {
    id: 'Option1.4',
    message: 'You selected option 5',
    end: true,
  },
  {
    id: 'Option1.5',
    message: 'You selected option 2',
    end: true,
  },
  {
    id: 'Option6',
    message: 'You selected option 6',
    end: true,
  },

  {
    id: 'Option2Selected',
    message: 'You selected option 2',
    end: true,
  },
  {
    id: 'Option3Selected',
    message: 'You selected option 3',
    end: true,
  },
  {
    id: 'Option4Selected',
    message: 'You selected option 4',
    end: true,
  },
  {
    id: 'Option5Selected',
    message: 'You selected option 5',
    end: true,
  },
];


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  
  <ChatBot steps={steps}
    bubbleStyle={{ background: 'rgb(255, 255, 255)', fontSize: '16px' }} // customize the chat bubble style
    contentStyle={{ height: '900px' }} // customize the chatbot container size
  />,
  // document.getElementById('root')
)

// class MyChatbot extends Component {
//   componentDidMount() {
//     this.scrollToBottom();
//   }

//   componentDidUpdate() {
//     this.scrollToBottom();
//   }

//   scrollToBottom() {
//     const chatbotContainer = document.querySelector('.rsc-container');
//     chatbotContainer.scrollTop = chatbotContainer.scrollHeight;
//   }
// }




// import React, { useEffect, useRef } from 'react';
// import ChatBot from 'react-simple-chatbot';

// function Main() {
//   const chatbotRef = useRef();

//   useEffect(() => {
//     chatbotRef.current.useScrollToBottom();
//   }, []);

//   return (
//     <ScrollToBottom ref={chatbotRef}>
//       <ChatBot
//         steps={[
//           {
//             id: 'Greet',
//             message: 'Welcome to Hotel Alexandra I’m your digital assistant here to answer your questions about Hotel Alexandra',
//             trigger: 'Options',
//           },
//           {
//             id: 'Options',
//             options: [
//               { value: 1, label: '📅 New reservation', trigger: 'Option1Selected' },
//               { value: 2, label: '🛬 Existing reservation', trigger: 'Option2Selected' },
//               { value: 3, label: '🛎️ On property assistance', trigger: 'Option3Selected' },
//               { value: 4, label: '🛫 Checked-out', trigger: 'Option4Selected' },
//               { value: 5, label: 'ℹ️ Something else', trigger: 'Option5Selected' },
//             ],
//           },
//           {
//             id: 'Option1Selected',
//             message: 'Choose from the options below.',
//             trigger: 'Option1 New reservation'
//             // end: true,
//           },
//           {
//             id: 'Option1 New reservation',
//             options: [
//               { value: 1, label: 'New booking for rooms', trigger: 'Option1.1 New booking' },
//               { value: 2, label: 'Wedding & Events', trigger: 'Option1.2' },
//               { value: 3, label: 'Group booking', trigger: 'Option1.3' },
//               { value: 4, label: 'Long stay', trigger: 'Option1.4' },
//               { value: 5, label: 'Something else', trigger: 'Option1.5' },
//               { value: 6, label: 'Go back', trigger: 'Option6' },
//             ],
//           },
//           // 
//           {
//             id: 'Option1.1 New booking',
//             message: 'What’s your purpose of your visit to Hong Kong this time?',
//             trigger: 'Option1.1'
//             // end: true,
        
//           },
//           {
//             id: 'Option1.1',
//             options: [
//               { value: 1, label: 'Business trip', trigger: 'Option1.1.1' },
//               { value: 2, label: 'Holiday', trigger: 'Option1.1.2' },
//               { value: 3, label: 'Conference, Events', trigger: 'Option1.1.3' },
//               { value: 4, label: 'Anniversary', trigger: 'Option1.1.4' },
//               { value: 5, label: 'Other', trigger: 'Option1.1.5' },
//               { value: 6, label: 'Cancel', trigger: 'Option6' },
//             ],
//           },
//           {
//             id: 'Option1.1.1',
//             message: 'Who are you traveling with?',
//             // end: true,
//             trigger: 'ppl'
//           },
//           {
//             id: 'ppl',
//             options: [
//               { value: 1, label: 'Own Self', trigger: 'time' },
//               { value: 2, label: 'Colleagues / Business Partner', trigger: 'time' },
//               { value: 3, label: 'Couples', trigger: 'time' },
//               { value: 4, label: 'Family', trigger: 'time' },
//               { value: 5, label: 'Friend', trigger: 'Option1.1.5' },
//               { value: 5, label: 'Group of Adults', trigger: 'Option1.1.5' },
//               { value: 6, label: 'Cancel', trigger: 'Option6' },
//             ],
//           },
//           {
//             id: 'time',
//             message: 'How long you are in Hong Kong for ?',
//             // end: true,
//             trigger: 'time_'
//           },
//           {
//             id: 'time_',
//             options: [
//               { value: 1, label: 'Few hours', trigger: 'hours' },
//               { value: 2, label: '1 night', trigger: 'Option1.1.5' },
//               { value: 3, label: '2 nights', trigger: 'Option1.1.5' },
//               { value: 4, label: '3+ nights', trigger: 'Option1.1.5' },
//               { value: 5, label: '5+ nights', trigger: 'Option1.1.5' },
//               { value: 6, label: 'Cancel', trigger: 'Option6' },
//             ],
//           },
//           {
//             id: 'hours',
//             message: 'Please wait while we curate choices based on your search…',
//             // end: true,
//             trigger: 'msg'
//           },
//           {
//             id: 'msg',
//             message: 'Here are all our rooms to look at.',
//             // end: true,
//             trigger: 'room_info'
//           },
//           {
//             id: 'room_info',
//             options: [
//               { value: 1, label: 'Few hours', trigger: 'hours' },
//               { value: 2, label: '1 night', trigger: 'Option1.1.5' },
//               { value: 3, label: '2 nights', trigger: 'Option1.1.5' },
//               { value: 4, label: '3+ nights', trigger: 'Option1.1.5' },
//               { value: 5, label: '5+ nights', trigger: 'Option1.1.5' },
//               { value: 6, label: 'Cancel', trigger: 'Option6' },
//             ],
//           },
//           {
//             id: 'Option1.1.2',
//             message: 'You selected option 3',
//             end: true,
//           },
//           {
//             id: 'Option1.1.3',
//             message: 'You selected option 4',
//             end: true,
//           },
//           {
//             id: 'Option1.1.4',
//             message: 'You selected option 5',
//             end: true,
//           },
//           {
//             id: 'Option1.1.5',
//             message: 'You selected option 2',
//             end: true,
//           },
//           {
//             id: 'Option1.2',
//             message: 'You selected option 3',
//             end: true,
//           },
//           {
//             id: 'Option1.3',
//             message: 'You selected option 4',
//             end: true,
//           },
//           {
//             id: 'Option1.4',
//             message: 'You selected option 5',
//             end: true,
//           },
//           {
//             id: 'Option1.5',
//             message: 'You selected option 2',
//             end: true,
//           },
//           {
//             id: 'Option6',
//             message: 'You selected option 6',
//             end: true,
//           },
        
//           {
//             id: 'Option2Selected',
//             message: 'You selected option 2',
//             end: true,
//           },
//           {
//             id: 'Option3Selected',
//             message: 'You selected option 3',
//             end: true,
//           },
//           {
//             id: 'Option4Selected',
//             message: 'You selected option 4',
//             end: true,
//           },
//           {
//             id: 'Option5Selected',
//             message: 'You selected option 5',
//             end: true,
//           },
//         ]}
//       />
//     </ScrollToBottom>
//   //   ,
//   // document.getElementById('root')
//   );
// }

// working
// const ;


// MyChatbot();

// export default Main;
// ReactDOM.createRoot(document.getElementById('root')).render(<Main />);