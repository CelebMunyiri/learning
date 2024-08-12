const jwt = require('jsonwebtoken');

// Function to decode the token and retrieve its payload
const decodeJWTToken = (token, jwtSecret) => {
    try {
        const decoded = jwt.verify(token, jwtSecret);
        return decoded; // The decoded payload
    } catch (error) {
        console.error('Error decoding JWT token:', error.message);
        throw error;
    }
};

// Example usage


try {
    const decodedData = decodeJWTToken(token, jwtSecret);
    console.log('Decoded data:', decodedData);
} catch (error) {
    console.error('Failed to decode JWT token:', error);
}
