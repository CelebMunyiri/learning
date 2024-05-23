// app.js
const socket = io('http://192.168.100.42:4001')


// Function to join chat room
function joinRoom(ticketId) {
  socket.emit('joinRoom', ticketId);
}
const send=document.querySelector('.send');


// Function to send chat message
function sendMessage() {
  const text = document.getElementById('messageInput').value;
  const sender = {name:"Sammy",email:"sammy@gmail.com"};
  const ticketId = 'INC163132821'; 

  /////
  function sendTypingStatus(isTyping) {
    const ticketId = 'INC163132821'; 
  
    socket.emit('typing', { ticketId, isTyping });
  }
  //
  // Handle incoming chat messages
socket.on('chatMessage', data => {
  const { sender, text, time } = data;
  const messageElement = document.createElement('div');
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
  const ticketId = 'INC163132821'; 
  joinRoom(ticketId);
};
////
const getCustomerById = catchAsync(async (req, res) => {
  try {
      const result = await customerService.getCustomerById(req?.params?.customerId);
      if (!result) {
          logger.warn(`${req.userId} Company not found: ${req.params._id}`);
          return res.status(httpStatus.NOT_FOUND).json({ success: false, message: 'Company not found' });
      }
      logger.info(`${req.userId} Fetched Company successfully: ${req.params._id}`);
      res.status(httpStatus.OK).json({ success: true, message: 'Company fetched successfully', data: result });
  } catch (error) {
      logger.error(`Failed to fetch company: ${error.message}`);
      res.status(httpStatus.BAD_REQUEST).json({ success: false, message: 'Failed', error });
  }
}); 
