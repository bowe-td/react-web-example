const TOKEN_KEY = '@react-web-example:token';

const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

const localSetToken = token => localStorage.setItem(TOKEN_KEY, token);

const getToken = () => localStorage.getItem(TOKEN_KEY);

const logout = () => localStorage.clear();

export { TOKEN_KEY, isAuthenticated, getToken, logout, localSetToken };
