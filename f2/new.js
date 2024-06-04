const socket = io('http://localhost:4200');

// Function to join chat room
function joinRoom(ticketId) {
  socket.emit('joinRoom', ticketId);
}

// Function to send chat message
function sendMessage() {
  const text = document.getElementById('messageInput').value.trim();
  const sender = { name: "Santan", email: "erick@nathandigital.com",_id:"65f97b3873ef8b99b3d6ba49" };
  const ticketId = 'INC22412110';

  if (text !== '') {
    socket.emit('chatMessage', { ticketId, sender, text });
    document.getElementById('messageInput').value = ''; // Clear input field after sending message
  }
}

// Function to send typing status
function sendTypingStatus(isTyping) {
  const ticketId = 'INC22412110';
  socket.emit('typing', { ticketId, isTyping });
}

// Event listener for sending message on button click
document.querySelector('.send').addEventListener('click', sendMessage);

// Event listeners for typing detection
document.getElementById('messageInput').addEventListener('input', () => {
  sendTypingStatus(true); // User started typing
});

document.getElementById('messageInput').addEventListener('blur', () => {
  sendTypingStatus(false); // User stopped typing
});

// Handle incoming chat messages (moved outside sendMessage function)
socket.on('chatMessage', data => {
  const { sender, text, time } = data;
  const messageElement = document.createElement('div');
  messageElement.className = 'message'; // Corrected class assignment
  messageElement.innerText = `${sender.name}: ${text} (${time})`;
  document.getElementById('chatMessages').appendChild(messageElement);
});

// Handle incoming typing notifications (moved outside sendMessage function)
socket.on('typing', data => {
  const { sender, isTyping } = data;
  const theName=sender.get('name');
  const typingStatusElement = document.getElementById('typingStatus');
  if (isTyping) {
    typingStatusElement.innerText = `${theName} is typing...`;
  } else {
    typingStatusElement.innerText = '';
  }
});

// Handle errors
socket.on('error', error => {
  console.error('Error:', error.message);
});

// Join the chat room when the page loads
window.onload = () => {
  const ticketId = 'INC22412110';
  joinRoom(ticketId);
};

// Example of handling message visibility and marking as read (left as it is)
document.addEventListener('DOMContentLoaded', () => {
  const messagesContainer = document.getElementById('chatContainer'); // Assuming this is your messages container
  // Function to mark a message as read and emit the 'readMessage' event
  const markMessageAsRead = (ticketId, messageId) => {
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
    const messages = document.querySelectorAll('.message');
    messages.forEach((message) => {
      if (isElementInViewport(message) && !message.dataset.isRead) {
        const ticketId = message.dataset.ticketId;
        const messageId = message.dataset.messageId;
        markMessageAsRead(ticketId, messageId);
        message.dataset.isRead = true;
      }
    });
  };

  // Initial check for messages in viewport
  handleVisibilityChange();

  // Event listener for scroll or resize (or any other event that changes visibility)
  window.addEventListener('scroll', handleVisibilityChange);
  window.addEventListener('resize', handleVisibilityChange);
});
