import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ChatBot, Popup, steps } from 'react-simple-chatbot';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#6d9eeb',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#6d9eeb',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const MyPopup = (props) => (
  <Popup
    {...props}
    style={{
      overflow: 'visible',
    }}
  >
    <button onClick={() => props.close(true)}>Yes</button>
    <button onClick={() => props.close(false)}>No</button>
  </Popup>
);

const mySteps = [
  {
    id: '1',
    message: 'Do you like pop-up buttons?',
    trigger: '2',
  },
  {
    id: '2',
    component: (
      <MyPopup />
    ),
    waitAction: true,
    trigger: ({ value }) => (value ? 'yes' : 'no'),
  },
  {
    id: 'yes',
    message: 'Great!',
    end: true,
  },
  {
    id: 'no',
    message: 'Too bad.',
    end: true,
  },
];

function MyChatbot() {
  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={mySteps} />
    </ThemeProvider>
  );
}

export default MyChatbot;