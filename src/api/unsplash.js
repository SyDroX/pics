import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 8a2f8c53e5166c3757a8ae48afaf6a2ae0998660bc9489659952f78e724ed94e'
    }
});