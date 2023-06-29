import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App_test.jsx'
import './index.css'
import './my.css';
import { useRef, useEffect } from 'react';
import ChatBot from 'react-simple-chatbot';
import ScrollToBottom from 'react-scroll-to-bottom';

const steps = [
  {
    id: 'Greet',
    message: 'Welcome to Hotel Alexandra I’m your digital assistant here to answer your questions about Hotel Alexandra',
    trigger: 'Options',
  }, {
    id: 'Options',
    options: [
      { value: 1, label: '📅 New reservation', trigger: 'Option1Selected' },
      { value: 2, label: '🛬 Existing reservation', trigger: 'Option2Selected' },
      { value: 3, label: '🛎️ On property assistance', trigger: 'Option3Selected' },
      { value: 4, label: '🛫 Checked-out', trigger: 'Option4Selected' },
      { value: 5, label: 'ℹ️ Something else', trigger: 'Option5Selected' },
    ]
    // message: 'Choose from the options below.',
  }, {
    id: 'Option1Selected',
    // message: 'Choose from the options below.',
    message: 'adfafasf',
    trigger: 'Option1.1 New booking'
    // end: true,
  }, {
    id: 'Option2Selected',
    // message: 'Choose from the options below.',
    message: '2',
    // trigger: 'Option1.1 New booking'
    end: true,
  }, {
    id: 'Option3Selected',
    // message: 'Choose from the options below.',
    message: '3',
    // trigger: 'Option1.1 New booking'
    end: true,
  }, {
    id: 'Option4Selected',
    // message: 'Choose from the options below.',
    message: '4',
    // trigger: 'Option1.1 New booking'
    end: true,
  }, {
    id: 'Option5Selected',
    // message: 'Choose from the options below.',
    message: '5',
    // trigger: 'Option1.1 New booking'
    end: true,
  }, {
    id: 'Option1.1 New booking',
    options: [
        { value: 1.1, label: 'New booking for rooms', trigger: 'Option1.1.1' },
        { value: 1.2, label: 'Wedding & Events', trigger: 'Option1.1.2' },
        { value: 1.3, label: 'Group booking', trigger: 'Option1.1.3' },
        { value: 1.4, label: 'Long stay', trigger: 'Option1.1.4' },
        { value: 1.5, label: 'Something else', trigger: 'Option1.1.5' },
        { value: 6, label: 'Go back', trigger: 'Option6' },
    ],
},{
  id: 'Option1.1.1',
  // message: 'Choose from the options below.',
  message: '1Choose from the options below.Choose from the options below.Choose from the options below.Choose from the options below.Choose from the options below.Choose from the options below.Choose from the options below.Choose from the options below.Choose from the options below.Choose from the options below.Choose from the options below.Choose from the options below.Choose from the options below.Choose from the options below.Choose from the options below.Choose from the options below.Choose from the options below.Choose from the options below.Choose from the options below.Choose from the options below.Choose from the options below.Choose from the options below.Choose from the options below.Choose from the options below.Choose from the options below.Choose from the options below.Choose from the options below.Choose from the options below.Choose from the options below.Choose from the options below.Choose from the options below.Choose from the options below.Choose from the options below.Choose from the options below.Choose from the options below.Choose from the options below.Choose from the options below.Choose from the options below.Choose from the options below.Choose from the options below.Choose from the options below.Choose from the options below.Choose from the options below.Choose from the options below.',
  // trigger: 'Option1.1 New booking'
  end: true,
}, {
  id: 'Option1.1.2',
  // message: 'Choose from the options below.',
  message: '1',
  // trigger: 'Option1.1 New booking'
  end: true,
}, {
  id: 'Option1.1.3',
  // message: 'Choose from the options below.',
  message: '1',
  // trigger: 'Option1.1 New booking'
  end: true,
}, {
  id: 'Option1.1.4',
  // message: 'Choose from the options below.',
  message: '1',
  // trigger: 'Option1.1 New booking'
  end: true,
}, {
  id: 'Option1.1.5',
  // message: 'Choose from the options below.',
  message: '1',
  // trigger: 'Option1.1 New booking'
  end: true,
}, {
  id: 'Option6',
  // message: 'Choose from the options below.',
  message: '1',
  // trigger: 'Option1.1 New booking'
  end: true,
}, ]

const chatbot1 = React.createRef();

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <ScrollToBottom className="chatbot1"><ChatBot steps={steps} ref={chatbot1} />
    {/* document.getElementById('root') */}
  </ScrollToBottom>
)
