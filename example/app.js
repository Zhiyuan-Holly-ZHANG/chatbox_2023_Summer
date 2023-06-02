// const chatButton = document.querySelector('.chatbox__button');
// const chatContent = document.querySelector('.chatbox__support');
// const icons = {
//     isClicked: '<img src="./images/icons/chatbox-icon.svg" />',
//     isNotClicked: '<img src="./images/icons/chatbox-icon.svg" />'
// }
// const chatbox = new InteractiveChatbox(chatButton, chatContent, icons);
// chatbox.display();
// chatbox.toggleIcon(false, chatButton);


class Chatbox {
    constructor() {
        this.args = {
            openButton: document.querySelector('.chatbox__button'),
            chatBox: document.querySelector('.chatbox__support'),
            sendButton: document.querySelector('.send__button'),
        }

        this.state = false;
        this.messages = [];
    }

    display() {
        const { openButton, chatbox, sendButton } = this.args;
        openButton.addEventListener('click', () => this.toggleState(chatbox))
        sendButton.addEventListener('click', () => this.onSendButton(chatbox))
        const node = chatbox.querySelector('input');
        node.addEventListener('keyup', ({ key }) => {
            if (key == "Enter") {
                this.onSendButton(chatbox)
            }
        })
    }

    toggleState(chatBox) {
        this.state = !this.state;

        if (this.state) {
            chatBox.classList.add('chatbox--active')

        } else {
            chatBox.classList.remove('chatbox--active')
        }

    }

    onSendButton(chatBox) {
        var textField = chatBox.querySelector('input');
        let txt1 = textField.value
        if (txt1 = "") {
            return;
        }
        let msg1 = { name: "User", message: txt1 }
        this.messages.push(msg1);
        fetch($SCRIPT_POST + '/predict', {
            method: 'POST',
            body: JSON.stringify({ message: txt1 }),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },

        })
            .then(r => r.json())
            .then(r => {
                let msg2 = { name: "Sam", message: r.answer };
                this.messages.push(msg2);
                this.updateChatText(chatBox)
                textField.value = ''
            }).catch((error) => {
                console.error('Error:', error)
                this.updateChatText(chatBox)
                textField.value = ''
            });
    }

    updateChatText(chatBox) {
        var html = '';
        this.messages.slice().reverse().forEach(function (item, index) {
            if (item.name == "Sam") {
                html += '<div class="messages__item messages__item--visitor"'+item.message
            } else {
                html += '<div class="messages__item messages__item--operator"'+item.message

            }
        })
    }
}


