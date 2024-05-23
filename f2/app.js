// app.js
const socket = io('http://localhost:4001')


// Function to join chat room
function joinRoom(ticketId) {
  socket.emit('joinRoom', ticketId);
}
const send=document.querySelector('.send');


// Function to send chat message
function sendMessage() {
  const text = document.getElementById('messageInput').value;
  const sender = {name:"Dave",email:"davy@gmail.com"};
  const ticketId = 'INC223121613'; 

  /////
  function sendTypingStatus(isTyping) {
    const ticketId = 'INC223121613'; 
  
    socket.emit('typing', { ticketId, isTyping });
  }
  //
  // Handle incoming chat messages
socket.on('chatMessage', data => {
  const { sender, text, time } = data;
  const messageElement = document.createElement('div');
  messageElement.className=`.message`
  messageElement.innerText = `${sender.name}: ${text} (${Date.now()})`;
  document.getElementById('chatMessages').appendChild(messageElement);
});
// Handle incoming typing notifications
socket.on('typing', data => {
  const { sender, isTyping } = data;
  
  const typingStatusElement = document.getElementById('typingStatus');

  if (isTyping) {
    typingStatusElement.innerText = `${sender.name} is typing...`;
  } else {
    typingStatusElement.innerText = '';
  }
});

// Event listeners for typing detection
document.getElementById('messageInput').addEventListener('input', () => {
  sendTypingStatus(true); // User started typing
});

document.getElementById('messageInput').addEventListener('blur', () => {
  sendTypingStatus(false); // User stopped typing
});

  socket.emit('chatMessage', { ticketId, sender, text });

  // Clear input field after sending message
  document.getElementById('messageInput').value = '';
}

send.addEventListener('click',sendMessage)



// Handle errors
socket.on('error', error => {
  console.error('Error:', error.message);
});


// Join the chat room when the page loads
window.onload = () => {
  const ticketId = 'INC223121613'; 
  joinRoom(ticketId);
};
////
// Example of handling message visibility and marking as read
document.addEventListener('DOMContentLoaded', () => {
    const messagesContainer = document.getElementById('chatContainer'); // Assuming this is your messages container
    //document.getElementById('chatMessages')
    // Function to mark a message as read and emit the 'readMessage' event
    
    const markMessageAsRead = (ticketId, messageId) => {
      // Emit 'readMessage' event to the server
      socket.emit('readMessage', { ticketId, messageId });
    };
  
    // Function to check if an element is in the viewport
    const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };
  
    // Event listener to handle marking messages as read when they become visible
    const handleVisibilityChange = () => {
      const messages = document.querySelectorAll('.message'); // Assuming each message has a class 'message'
      messages.forEach((message) => {
        if (isElementInViewport(message) && !message.dataset.isRead) {
          const ticketId = message.dataset.ticketId; // Assuming you store ticketId in a data attribute
          const messageId = message.dataset.messageId; // Assuming you store messageId in a data attribute
          markMessageAsRead(ticketId, messageId);
          message.dataset.isRead = true; // Mark the message as read in the DOM
        }
      });
    };
  
    // Initial check for messages in viewport
    handleVisibilityChange();
  
    // Event listener for scroll or resize (or any other event that changes visibility)
    window.addEventListener('scroll', handleVisibilityChange);
    window.addEventListener('resize', handleVisibilityChange);
  });
  

//

