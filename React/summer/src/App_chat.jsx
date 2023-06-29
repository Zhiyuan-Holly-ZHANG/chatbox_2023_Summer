import { useRef, useEffect } from 'react';
import ChatBot from 'react-simple-chatbot';
import ScrollToBottom from 'react-scroll-to-bottom';

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
        ]
        // message: 'Choose from the options below.',
    },
    {
        id: 'Option1Selected',
        // message: 'Choose from the options below.',
        message:'adfafasf',
        trigger: 'Option1.1 New booking'
        // end: true,
    },
    {
        id: 'Option1.1 New booking',
        options: [
            { value: 1.1, label: 'New booking for rooms', trigger: 'Option1.1.1' },
            { value: 1.2, label: 'Wedding & Events', trigger: 'Option1.1.2' },
            { value: 1.3, label: 'Group booking', trigger: 'Option1.1.3' },
            { value: 1.4, label: 'Long stay', trigger: 'Option1.1.4' },
            { value: 1.5, label: 'Something else', trigger: 'Option1.1.5' },
            { value: 6, label: 'Go back', trigger: 'Option6' },
        ],
    },
    {
        id: 'Option1.2',
        message: 'What’s your purpose of your visit to Hong Kong this time?',
        // trigger: 'Option1.1'
        end: true,
    }, {
        id: 'Option1.3',
        message: 'What’s your purpose of your visit to Hong Kong this time?',
        trigger: 'Option1.1'
        // end: true,
    }, {
        id: 'Option1.4',
        message: 'What’s your purpose of your visit to Hong Kong this time?',
        trigger: 'Option1.1'
        // end: true,
    }, {
        id: 'Option1.5',
        message: 'What’s your purpose of your visit to Hong Kong this time?',
        trigger: 'Option1.1'
        // end: true,
    },
    {
        id: 'Option1.1.1',
        message: 'What’s your purpose of your visit to Hong Kong this time?',
        // trigger: 'Option1.1'
        end: true,
    }, {
        id: 'Option1.1.2',
        message: 'What’s your purpose of your visit to Hong Kong this time?',
        trigger: 'Option1.1'
        // end: true,
    },
    {
        id: 'Option1.1.3',
        message: 'What’s your purpose of your visit to Hong Kong this time?',
        trigger: 'Option1.1'
        // end: true,
    },
    {
        id: 'Option1.1.4',
        message: 'What’s your purpose of your visit to Hong Kong this time?',
        trigger: 'Option1.1'
        // end: true,
    },
    {
        id: 'Option1.1.5',
        message: 'What’s your purpose of your visit to Hong Kong this time?',
        trigger: 'Option1.1'
        // end: true,
    },
    {
        id: 'Option1.1.6',
        message: 'What’s your purpose of your visit to Hong Kong this time?',
        trigger: 'Option1.1'
        // end: true,
    },
    {
        id: 'Option1.1',
        options: [
            { value: 1.11, label: 'Business trip', trigger: 'Option1.1.1' },
            { value: 1.12, label: 'Holiday', trigger: 'Option1.1.2' },
            { value: 1.13, label: 'Conference, Events', trigger: 'Option1.1.3' },
            { value: 1.14, label: 'Anniversary', trigger: 'Option1.1.4' },
            { value: 1.15, label: 'Other', trigger: 'Option1.1.5' },
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
            { value: 1.111, label: 'Own Self', trigger: 'time' },
            { value: 1.112, label: 'Colleagues / Business Partner', trigger: 'time' },
            { value: 1.113, label: 'Couples', trigger: 'Option1.1.3' },
            { value: 1.114, label: 'Family', trigger: 'Option1.1.4' },
            { value: 1.115, label: 'Friend', trigger: 'Option1.1.5' },
            { value: 1.116, label: 'Other', trigger: 'Option1.1.6' },
            { value: 6, label: 'Cancel', trigger: 'Option6' },
        ],
    },
    {
        id: 'Option1.1.5',
        message: 'What kind of accommodation are you looking for?',
        trigger: 'room_info'
    },
    {
        id: 'room_info',
        options: [
            { value: 2.1, label: 'Single room', trigger: 'time' },
            { value: 2.2, label: 'Double room', trigger: 'time' },
            { value: 2.3, label: 'Triple room', trigger: 'time' },
            { value: 2.4, label: 'Suite', trigger: 'time' },
            { value: 6, label: 'Cancel', trigger: 'Option6' },
        ],
    },
    {
        id: 'time',
        message: 'What time and date are you planning to arrive?',
        trigger: 'Option1.1.7',
    },
    {
        id: 'Option1.1.7',
        user: true,
        trigger: 'Option1.1.8',
    },
    {
        id: 'Option1.1.8',
        message: 'How many days are you planning to stay?',
        trigger: 'Option1.1.9',
    },
    {
        id: 'Option1.1.9',
        options: [
            { value: 1, label: '1 day', trigger: 'Option1.1.10' },
            { value: 2, label: '2 days', trigger: 'Option1.1.10' },
            { value: 3, label: '3 days', trigger: 'Option1.1.10' },
            { value: 4, label: '4 days', trigger: 'Option1.1.10' },
            { value: 5, label: '5 days', trigger: 'Option1.1.10' },
            { value: 6, label: 'Cancel', trigger: 'Option6' },
        ],
    },
    {
        id: 'Option1.1.10',
        message: 'Thank you for the information. Please wait while we check availability.',
        trigger: 'Option1.1.11',
    },
    {
        id: 'Option1.1.11',
        message: 'Rooms available. Do you want to proceed with the booking?',
        trigger: 'Option1.1.12',
    },
    {
        id: 'Option1.1.12',
        options: [
            { value: 1, label: 'Yes', trigger: 'Option1.1.13' },
            { value: 2, label: 'No', trigger: 'Option1.1.14' },
        ],
    },
    {
        id: 'Option1.1.13',
        message: 'Please provide your personal details to complete the booking.',
        trigger: 'Option1.1.15',
    },
    {
        id: 'Option1.1.14',
        message: 'Thank you for considering Hotel Alexandra. Please let us know if you have any other questions or if we can assist with anything else.',
        end: true,
    },
    {
        id: 'Option1.1.15',
        message: 'Thank you for booking with us. Your reservation is confirmed.',
        end: true,
    },
    {
        id: 'Option2Selected',
        message: 'Please provide your reservation details.',
        // trigger: 'Option2.1',
        end: true,
    },
    {
        id: 'Option2.1',
        message: 'What is your reservation number?',
        trigger: 'Option2.2',
    },
    {
        id: 'Option2.2',
        user: true,
        trigger: 'Option2.3',
    },
    {
        id: 'Option2.3',
        message: 'Thank you. Your reservation details are being retrieved. Please wait.',
        trigger: 'Option2.4',
    },
    {
        id: 'Option2.4',
        message: 'Your reservation details: ',
        trigger: 'Option2.5',
    },
    {
        id: 'Option2.5',
        message: 'Please let us know if you have any other questions or if we can assist with anything else.',
        end: true,
    },
    {
        id: 'Option3Selected',
        message: 'How can we assist you?',
        // trigger: 'Option3.1',
        end: true,
    },
    {
        id: 'Option3.1',
        options: [
            { value: 1, label: '👥 Request for Concierge service', trigger: 'Option3.2' },
            { value: 2, label: '🎁 Room service request', trigger: 'Option3.3' },
            { value: 3, label: '🚘 Transportation', trigger: 'Option3.4' },
            { value: 4, label: '💻 Technical assistance', trigger: 'Option3.5' },
            { value: 5, label: '👕 Laundry service', trigger: 'Option3.6' },
            { value: 6, label: 'Other', trigger: 'Option3.7' },
        ],
    },
    {
        id: 'Option3.2',
        message: 'Please let us know how we can assist you with our concierge service.',
        trigger: 'Option3.8',
    },
    {
        id: 'Option3.3',
        message: 'Please provide us with your room number and the details of your room service request.',
        trigger: 'Option3.8',
    },
    {
        id: 'Option3.4',
        message: 'Please let us know your transportation requirements, such as airport pick-up or drop-off, and your desired date and time.',
        trigger: 'Option3.8',
    },
    {
        id: 'Option3.5',
        message: 'Please describe the technical problem you are experiencing.',
        trigger: 'Option3.8',
    },
    {
        id: 'Option3.6',
        message: 'Please let us know your laundry service needs, such as washing, dry cleaning, or ironing.',
        trigger: 'Option3.8',
    },
    {
        id: 'Option3.7',
        message: 'Please describe how we can assist you.',
        trigger: 'Option3.8',
    }, {
        id: 'Option3.8',
        message: 'Thank you for your request. We will do our best to assist you as soon as possible.',
        end: true,
    },
    {
        id: 'Option4Selected',
        message: 'Thank you for staying with us. Please let us know if you have any questions or if we can assist with anything else.',
        end: true,
    },
    {
        id: 'Option5Selected',
        message: 'Please let us know how we can assist you.',
        // trigger: 'Option5.1',
        end: true,
    },
    {
        id: 'Option5.1',
        message: 'We apologize that we were unable to anticipate your needs. Please describe how we can assist you.',
        trigger: 'Option5.2',
    },
    {
        id: 'Option5.2',
        message: 'Thank you for reaching out to us. We will do our best to assist you as soon as possible.',
        end: true,
    },
    {
        id: 'Option6',
        message: 'Which option would you like to choose?',
        // trigger: 'Options',
        end:true,
    },
];

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