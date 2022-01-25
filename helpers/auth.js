const jwtTokenName = 'token';
const refreshTokenName = 'refreshToken';

export const setLocalStorageToken = (token) => localStorage.setItem(jwtTokenName, token);
export const setSessionStorageToken = (token) => sessionStorage.setItem(jwtTokenName, token);
export const setStorageToken = (token) => localStorage.setItem(jwtTokenName, token)
    && sessionStorage.setItem(jwtTokenName, token);

export const setRefreshToken = (token) => {
    localStorage.setItem(refreshTokenName, token);
    sessionStorage.setItem(refreshTokenName, token);
};

export const getToken = () => sessionStorage.getItem(jwtTokenName);

export const getRefreshToken = () => localStorage.getItem(refreshTokenName)
    || sessionStorage.getItem(refreshTokenName);

export const removeToken = () => localStorage.removeItem(jwtTokenName)
    || sessionStorage.removeItem(jwtTokenName);

export const removeRefreshToken = () => {
    localStorage.removeItem(refreshTokenName);
    sessionStorage.removeItem(refreshTokenName);
};

export const isUserAuthenticated = () => getToken() && getRefreshToken();
