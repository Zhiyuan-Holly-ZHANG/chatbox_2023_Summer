import { useRef } from 'react';
// import ReactDOM from 'react-dom';
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
            { value: 1.1, label: 'New booking for rooms', trigger: 'Option1.1 New booking' },
            { value: 1.2, label: 'Wedding & Events', trigger: 'Option1.2' },
            { value: 1.3, label: 'Group booking', trigger: 'Option1.3' },
            { value: 1.4, label: 'Long stay', trigger: 'Option1.4' },
            { value: 1.5, label: 'Something else', trigger: 'Option1.5' },
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
            { value: 1.115, label: 'Group of Adults', trigger: 'Option1.1.5' },
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
            { value: 1.1111, label: 'Few hours', trigger: 'hours' },
            { value: 1.1112, label: '1 night', trigger: 'Option1.1.5' },
            { value: 1.1113, label: '2 nights', trigger: 'Option1.1.5' },
            { value: 1.1114, label: '3+ nights', trigger: 'Option1.1.5' },
            { value: 1.1115, label: '5+ nights', trigger: 'Option1.1.5' },
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
            { value: 1.11111, label: 'Few hours', trigger: 'hours' },
            { value: 1.11112, label: '1 night', trigger: 'Option1.1.5' },
            { value: 1.11113, label: '2 nights', trigger: 'Option1.1.5' },
            { value: 1.11114, label: '3+ nights', trigger: 'Option1.1.5' },
            { value: 1.11115, label: '5+ nights', trigger: 'Option1.1.5' },
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


export default function App() {
    const chatbotRef = useRef();

    const scrollToBottom = () => {
        chatbotRef?.current?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div>
            <button onClick={scrollToBottom} style={{ marginLeft: '8px' }}>
                Scroll to bottom
            </button>

            <ScrollToBottom ref={chatbotRef}>
                <ChatBot
                    steps={steps}
                />
            </ScrollToBottom>
        </div>
    );
    // useEffect(() => {
    //     chatbotRef.current.useScrollToBottom();
    // }, []);
}


