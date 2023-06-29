import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import './my.css';
import { useRef, useEffect } from 'react';
import ChatBot from 'react-simple-chatbot';
import ScrollToBottom from 'react-scroll-to-bottom';


const CustomHeader = () => {
  return (
    <div style={{
      backgroundColor: 'rgb(145, 123, 76)', color: 'white',
      textAlign: 'center',
      margin: '3px',
    }}>
      <h2>My Chatbot Header</h2>
      <svg
        style={{
          width: '1.5em',
          height: '1.5em'
        }}
        version="1.1" id="anna_vital_language_icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 256 256" fill="currentColor"><path d="M62.4,101c-1.5-2.1-2.1-3.4-1.8-3.9c0.2-0.5,1.6-0.7,3.9-0.5c2.3,0.2,4.2,0.5,5.8,0.9c1.5,0.4,2.8,1,3.8,1.7	c1,0.7,1.8,1.5,2.3,2.6c0.6,1,1,2.3,1.4,3.7c0.7,2.8,0.5,4.7-0.5,5.7c-1.1,1-2.6,0.8-4.6-0.6c-2.1-1.4-3.9-2.8-5.5-4.2 C65.5,105.1,63.9,103.2,62.4,101z M40.7,190.1c4.8-2.1,9-4.2,12.6-6.4c3.5-2.1,6.6-4.4,9.3-6.8c2.6-2.3,5-4.9,7-7.7 c2-2.7,3.8-5.8,5.4-9.2c1.3,1.2,2.5,2.4,3.8,3.5c1.2,1.1,2.5,2.2,3.8,3.4c1.3,1.2,2.8,2.4,4.3,3.8c1.5,1.4,3.3,2.8,5.3,4.5 c0.7,0.5,1.4,0.9,2.1,1c0.7,0.1,1.7,0,3.1-0.6c1.3-0.5,3-1.4,5.1-2.8c2.1-1.3,4.7-3.1,7.9-5.4c1.6-1.1,2.4-2,2.3-2.7 c-0.1-0.7-1-1-2.7-0.9c-3.1,0.1-5.9,0.1-8.3-0.1c-2.5-0.2-5-0.6-7.4-1.4c-2.4-0.8-4.9-1.9-7.5-3.4c-2.6-1.5-5.6-3.6-9.1-6.2	c1-3.9,1.8-8,2.4-12.4c0.3-2.5,0.6-4.3,0.8-5.6c0.2-1.2,0.5-2.4,0.9-3.3c0.3-0.8,0.4-1.4,0.5-1.9c0.1-0.5-0.1-1-0.4-1.6	c-0.4-0.5-1-1.1-1.9-1.7c-0.9-0.6-2.2-1.4-3.9-2.3c2.4-0.9,5.1-1.7,7.9-2.6c2.7-0.9,5.7-1.8,8.8-2.7c3-0.9,4.5-1.9,4.6-3.1 c0.1-1.2-0.9-2.3-3.2-3.5c-1.5-0.8-2.9-1.1-4.3-0.9c-1.4,0.2-3.2,0.9-5.4,2.2c-0.6,0.4-1.8,0.9-3.4,1.6c-1.7,0.7-3.6,1.5-6,2.5 c-2.4,1-5,2-7.8,3.1c-2.9,1.1-5.8,2.2-8.7,3.2c-2.9,1.1-5.7,2-8.2,2.8c-2.6,0.8-4.6,1.4-6.1,1.6c-3.8,0.8-5.8,1.6-5.9,2.4	c0,0.8,1.5,1.6,4.4,2.4c1.2,0.3,2.3,0.6,3.1,0.6c0.8,0.1,1.7,0.1,2.5,0c0.8-0.1,1.6-0.3,2.4-0.5c0.8-0.3,1.7-0.7,2.8-1.1 c1.6-0.8,3.9-1.7,6.9-2.8c2.9-1,6.6-2.4,11.2-4c0.9,2.7,1.4,6,1.4,9.8c0,3.8-0.4,8.1-1.4,13c-1.3-1.1-2.7-2.3-4.2-3.6	c-1.5-1.3-2.9-2.6-4.3-3.9c-1.6-1.5-3.2-2.5-4.7-3c-1.6-0.5-3.4-0.5-5.5,0c-3.3,0.9-5,1.9-4.9,3.1c0,1.2,1.3,1.8,3.8,1.9 c0.9,0.1,1.8,0.3,2.7,0.6c0.9,0.3,1.9,0.9,3.2,1.8c1.3,0.9,2.9,2.2,4.7,3.8c1.8,1.6,4.2,3.7,7,6.3c-1.2,2.9-2.6,5.6-4.1,8	c-1.5,2.5-3.4,5-5.5,7.3c-2.2,2.4-4.7,4.8-7.7,7.2c-3,2.5-6.6,5.1-10.8,7.8c-4.3,2.8-6.5,4.7-6.5,5.6C35,192.1,37,191.7,40.7,190.1z M250.5,81.8v165.3l-111.6-36.4L10.5,253.4V76.1l29.9-10V10.4l81.2,28.7L231.3,2.6v73.1L250.5,81.8z M124.2,50.6L22.3,84.6v152.2 l101.9-33.9V50.6L124.2,50.6z M219.4,71.9V19L138.1,46L219.4,71.9z M227,201.9L196.5,92L176,85.6l-30.9,90.8l18.9,5.9l5.8-18.7 l31.9,10l5.7,22.3L227,201.9z M174.8,147.7l22.2,6.9l-10.9-42.9L174.8,147.7z"></path></svg>
      <svg
        xmlns="http://www.w3.org/2000/svg" style={{
          width: '1.5em',
          height: '1.5em'
        }} viewBox="0 0 24 24" fill="currentColor"><path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path></svg>
    </div >
  );
};

const steps = [
  {
    id: 'Greet',
    component: (


      <img src="https://assets.bookmebob.com/bmbgallery/5b0fb091-d3ed-435c-9096-af820013acea/216fcbb1-1580-4b76-b8da-cf987366ade6.jpg" width='300px' />
    )
    , trigger: 'Greet1',
  },
  {
    id: 'Greet1',
    message: 'Welcome to Hotel Alexandra I’m your digital assistant here to answer your questions about Hotel Alexandra',
    // formatMessage: (message) => ({
    //   ...message,
    //   customData: { foo: 'bar' },
    //   content: (
    //     <div>
    //       <p style={{ marginBottom: 5 }}>{message.message}</p>
    //       <input type="text" style={{ width: '100%' }} />
    //     </div>
    //   ),
    // }),
    trigger: 'GreetMore',

  },
  {
    id: 'GreetMore',
    message: 'Choose an option below and I will do my best to find the right answer for you.',
    trigger: 'Options',

  },
  {
    id: 'Options',
    options: [
      { value: 1, label: '📅 New reservation', trigger: 'Option1Selected' },
      { value: 2, label: '🛬 Existing reservation', trigger: 'Option6' },
      { value: 3, label: '🛎️ On property assistance', trigger: 'Option3Selected' },
      { value: 4, label: '🛫 Checked-out', trigger: 'Option4Selected' },
      { value: 5, label: 'ℹ️ Something else', trigger: 'Option5Selected' },
    ]

  }, {
    id: 'Option1Selected',
    message: 'Choose from the options below.',

    trigger: 'Option1.1 New booking'

  }, {
    id: 'Option2Selected',
    message: '2',
    end: true,
  }, {
    id: 'Option3Selected',
    message: 'Our Telephone Services is available 24 hours to assist you with all your needs and enquiries. Please dial Ext. 0 if you are an inhouse guest or contact us using the following details 📞 +852 3893 2888 📧 enquiry@hotelalexandrahk.com',
    trigger: 'Option3More'
  }, {
    id: 'Option3More',
    message: 'You can go back, or ask me your question in a short sentence.',
    trigger: 'Option6'
  }, {
    id: 'Option4Selected',
    message: '4',
    end: true,
  }, {
    id: 'Option5Selected',
    message: '5',
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
  }, {
    id: 'Option1.1.1',
    message: 'What’s your purpose of your visit to Hong Kong this time?',
    trigger: 'purpose'
  }, {
    id: 'purpose',
    options: [
      { value: 1.11, label: 'Business trip', trigger: 'Business' },
      { value: 1.12, label: 'Holiday', trigger: 'Option6' },
      { value: 1.13, label: 'Conference, Events', trigger: 'Option6' },
      { value: 1.14, label: 'Anniversary', trigger: 'Option6' },
      { value: 1.15, label: 'Other', trigger: 'Option6' },
      { value: 6, label: 'Cancel', trigger: 'Option6' },
    ],


  },
  {
    id: 'Business',
    message: 'Who are you traveling with?',

    trigger: 'ppl'
  },
  {
    id: 'ppl',
    options: [
      { value: 1.111, label: 'Own Self', trigger: 'time' },
      { value: 1.112, label: 'Colleagues / Business Partner', trigger: 'time' },
      { value: 1.113, label: 'Couples', trigger: 'time' },
      { value: 1.114, label: 'Family', trigger: 'time' },
      { value: 1.115, label: 'Friend', trigger: 'time' },
      { value: 1.116, label: 'Other', trigger: 'time' },
      { value: 6, label: 'Cancel', trigger: 'Option6' },
    ],
  },
  {
    id: 'time',
    message: 'What time and date are you planning to arrive?',
    trigger: 'duration'
  },
  {
    id: 'duration',
    options: [
      { value: 10, label: 'Few hours', trigger: 'search' },
      { value: 11, label: '1 night', trigger: 'search' },
      { value: 12, label: '2 nights', trigger: 'search' },
      { value: 13, label: '3+ nights', trigger: 'search' },
      { value: 14, label: '5+ nights', trigger: 'search' },
      { value: 6, label: 'Cancel', trigger: 'Option6' },
    ],
  },
  {
    id: 'search',
    message: 'Please wait while we curate choices based on your search…'
    ,
    trigger:'search1'
  },
  {
    id: 'search1',
    message: 'Here are our rooms to look at.'
    ,
    end: true,
  },
  {
    id: 'Option1.1.2',
    message: '1',
    end: true,
  }, {
    id: 'Option1.1.3',

    message: '1',

    end: true,
  }, {
    id: 'Option1.1.4',

    message: '1',

    end: true,
  }, {
    id: 'Option1.1.5',

    message: '1',

    end: true,
  }, {
    id: 'Option6',
    options: [{ label: "Go back", trigger: "GreetMore" }]



  },]

const chatbot1 = React.createRef();

ReactDOM.createRoot(document.getElementById('root')).render(

  <ScrollToBottom className="chatbot1"><ChatBot headerComponent={<CustomHeader />}
    steps={steps} ref={chatbot1} />
  </ScrollToBottom>

  // <React.StrictMode>
  //   <MyChatbot />
  // </React.StrictMode>,

)

