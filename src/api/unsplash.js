import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 4f17c5aeb4deffdec15813bcbb9f668b23fd1ecab448bd54c195d6fa708314e4'
    }
});