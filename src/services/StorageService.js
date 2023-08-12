
const setToken = token => {
    try {
        return localStorage.setItem('token', token);
    } catch (error) {
        console.log(error);
    }
    
};

const getToken = () => {
    return localStorage.getItem('token');
};

export default{
    setToken,
    getToken
}