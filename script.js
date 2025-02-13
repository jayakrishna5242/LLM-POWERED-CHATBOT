document.getElementById('SendBtn').addEventListener('click', async function () {
    const userInput = document.getElementById('chatbox').value.trim();
    const chatHistory = document.getElementById('chat-history');

    // Validate input
    if (userInput === "") {
        alert("Please enter some text!");
        return;
    }

    // Clear input field
    document.getElementById('chatbox').value = "";

    // Create and display user message
    const messageContainer = document.createElement('div');
    messageContainer.className = 'message-pair';

    const userMessage = document.createElement('div');
    userMessage.className = 'user-message';
    userMessage.innerText = userInput;
    messageContainer.appendChild(userMessage);

    // Create placeholder for bot message
    const botMessage = document.createElement('div');
    botMessage.className = 'bot-message';
    messageContainer.appendChild(botMessage);

    chatHistory.appendChild(messageContainer);

    // Auto-scroll to bottom
    chatHistory.scrollTop = chatHistory.scrollHeight;

    try {
        // Fetch response from backend
        const response = await eel.chat_with_llama3(userInput)();

        // Apply typing effect for the full response
        typeEffect(response, botMessage, chatHistory);
    } catch (error) {
        console.error("Error fetching response:", error);
        botMessage.textContent = "[ERROR] An error occurred while processing your request.";
    }
});

// Typing effect function
function typeEffect(response, botMessage, chatHistory) {
    let index = 0;

    function type() {
 const elements = document.querySelectorAll('#big-centro,  #bottom-dots,  #squares, #top-dots');

    elements.forEach(element => {
        element.style.transformOrigin = 'center';
        element.style.animation = 'rotate 4s linear infinite';
    });
    const elements1 = document.querySelectorAll(' #center,  #outter-center, #center-lines');

    elements1.forEach(element => {
        element.style.transformOrigin = 'center';
        element.style.animation = 'rotate1 4s linear infinite';
    });
        if (index < response.length) {

           document.getElementById('')
            botMessage.textContent += response.charAt(index); // Append one character
            index++;
            setTimeout(type, 50); // Adjust delay for typing speed (e.g., 50ms)
        } else {
            // Auto-scroll to bottom after typing completes
            chatHistory.scrollTop = chatHistory.scrollHeight;
            const elements = document.querySelectorAll('#big-centro, #outter1, #solo-lines, #center, #outter-center, #bottom-dots, #center-lines, #squares, #top-dots');

        elements.forEach(element => {
        element.style.transformOrigin = 'center';
        element.style.animation = 'none';
    });
        }
    }

    type(); // Start the typing effect
}

// Stop button functionality
document.getElementById('StopBtn').addEventListener('click', function () {
    const botMessages = document.querySelectorAll('.bot-message');
    if (botMessages.length > 0) {
        botMessages[botMessages.length - 1].innerText += " [Response Stopped]";
        return;
    }
});

// Expose the updateChat function to the Python backend
eel.expose(update_chat);

function update_chat(full_response) {
    const chatHistory = document.getElementById('chat-history');
    const lastMessage = chatHistory.lastChild.querySelector('.bot-message');
    if (lastMessage) {
        // Add a space before appending the new response
        lastMessage.textContent += " " + full_response.trim(); // Append with a space
    }
    // Auto-scroll to bottom
    chatHistory.scrollTop = chatHistory.scrollHeight;
}
