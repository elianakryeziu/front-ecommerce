import BaseService from './BaseService';
import {
    removeToken, removeRefreshToken,
} from '../helpers/auth';

const url = process.env.API;

class AuthService extends BaseService {
    login = (data) => this.post(`${url}/login`, data);

    logout = () => {
        removeToken();
        removeRefreshToken();
    }

    // forgotPassword = (data) => this.post(forgotPasswordURL, data);

    // sendVerificationCode = (data) => this.post(`${forgotPasswordURL}/verify`, data);

    // setPassword = (data) => this.put(`${forgotPasswordURL}/reset`, data);

    registerUser = (data) => this.post(`${url}/users/add`, data);
}

export default new AuthService();