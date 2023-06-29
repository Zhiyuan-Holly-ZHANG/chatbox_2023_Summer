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
        // trigger: 'Option1.1 New booking'
        end: true,
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
    }]

const App = () => {
    const chatbot = useRef(null);

    // useEffect(() => {
    // chatbot.current.scrollIntoView({ behavior: 'smooth' });
    // }, []);

    return (
        <div>
            <ScrollToBottom className="chatbot">
                <ChatBot steps={steps} ref={chatbot}
                // botAvatar="https://i.imgur.com/7G1hVKP.png" userAvatar="https://i.imgur.com/vRF3M2a.png" 
                />
            </ScrollToBottom>
        </div>);
};

export default App;