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
const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoiNjRkZjEyZjZkYTlmNzgyZmJjOGVhMTIwcyIsImF1ZGllbmNlIjoiVElDS0VUSU5HX1NZU1RFTSIsInBheWxvYWQiOnsidXNlciI6IjY2MDI4MDdiZDNjMmE1MGI5ZWJjNzBiOCIsInBlcm1pc3Npb24iOiJzZWN1cml0eV9ncm91cF8xIiwidHlwZSI6InVzZXIiLCJwYXlsb2FkIjp7InVzZXIiOiI2NjAyODA3YmQzYzJhNTBiOWViYzcwYjgiLCJuYW1lIjoiRXJpY2siLCJsYXN0X25hbWUiOiJOZ3VnaSIsImVtYWlsIjoiZXJpY2tAbmF0aGFuZGlnaXRhbC5jb20iLCJwZXJtaXNzaW9uIjoic2VjdXJpdHlfZ3JvdXBfMSIsImFjY2Vzc190byI6eyJ2cG4iOmZhbHNlLCJ0aWNrZXRpbmdfc3lzdGVtIjpmYWxzZSwiZGV2b3BzX2NlbnRyYWwiOmZhbHNlLCJlbWFpbF9zZXJ2aWNlIjpmYWxzZSwibG9nX3NlcnZpY2UiOmZhbHNlfSwidHlwZSI6InVzZXIiLCJpYXQiOjE3MjI0MTI5MTEsImV4cCI6MTcyMjUwMjkxMSwiYXVkIjoiVElDS0VUSU5HX1NZU1RFTSIsImlzcyI6IkF1dGhvcml6YXh0aW9uL1Jlc291cmNlL05BVEhBTi9BdXRoU2VydmljZS8iLCJzdWIiOiI2NGRmMTJmNmRhOWY3ODJmYmM4ZWExMjBzIn19LCJpYXQiOjE3MjI0MTI5MTEsImV4cCI6MTcyNTAwNDkxMSwiYXVkIjoiVElDS0VUSU5HX1NZU1RFTSIsImlzcyI6IkF1dGhvcml6YXh0aW9uL1Jlc291cmNlL05BVEhBTi9BdXRoU2VydmljZS8iLCJzdWIiOiI2NGRmMTJmNmRhOWY3ODJmYmM4ZWExMjBzIn0.ve15kt4fpa6GVZoBHpRLM_gYVTpccGBntk0fiONbqSLALLxIOETDbamehC4axNEMCl-KeYFeSuz1fJPq3D6KfPWUOVexxdLhM2C9D-3uXp5G-1BHkDLQ8YjKhFa8bTfFP8mixDR98BGlRhyS4BtKXZNxIZmcx-zWsojJdZabGWQ';
const jwtSecret = 'thisisasamplesecret'; // Replace this with your actual token

try {
    const decodedData = decodeJWTToken(token, jwtSecret);
    console.log('Decoded data:', decodedData);
} catch (error) {
    console.error('Failed to decode JWT token:', error);
}
