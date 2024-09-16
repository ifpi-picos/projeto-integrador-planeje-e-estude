function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const chatBox = document.getElementById('chatBox');
    const userMessage = messageInput.value.trim();
    
    if (userMessage === '') return;

    // Add user message
    const userMessageElement = document.createElement('div');
    userMessageElement.className = 'message sent';
    userMessageElement.textContent = userMessage;
    chatBox.appendChild(userMessageElement);

    // Clear input field
    messageInput.value = '';

    // Generate response
    const response = generateResponse(userMessage);

    // Add response message
    const responseMessageElement = document.createElement('div');
    responseMessageElement.className = 'message received';
    responseMessageElement.textContent = response;
    chatBox.appendChild(responseMessageElement);

    // Scroll to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}

function generateResponse(userMessage) {
    // Simple predefined responses
    const responses = {
        'oi': 'Olá! Como posso ajudar você?',
        'qual é o seu nome?': 'Eu sou um chatbot simples.',
        'como você está?': 'Estou bem, obrigado por perguntar!',
        'adeus': 'Até logo! Tenha um ótimo dia!'
    };

    // Return response or a default message if no match
    return responses[userMessage.toLowerCase()] || 'Desculpe, não entendi sua pergunta.';
}
