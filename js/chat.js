$(document).ready(() => {
    $(".chat-btn").click(() => {
        $(".chat-box").slideToggle("slow")
    })
})

const chatBox = document.getElementById("chat-box");
        const chat = document.getElementById("chat");
        const inputBox = document.getElementById("input-box");
        const sendButton = document.getElementById("send-button");

        sendButton.addEventListener("click", sendMessage);
        inputBox.addEventListener("keyup", function (event) {
            if (event.key === "Enter Message") {
                sendMessage();
            }
        });

        function sendMessage() {
            const message = inputBox.value;
            if (message.trim() !== "") {
                const messageDiv = document.createElement("div");
                messageDiv.textContent = message;
                chat.appendChild(messageDiv);
                inputBox.value = "";
                chatBox.scrollTop = chatBox.scrollHeight; 
            }
        }