import axios from 'axios';
import StorageManager from '../helpers/StorageManager';

class BaseService {
    constructor() {
        if (process.browser) {
            this.token = StorageManager.get('token');
        }

        this.api = axios.create({
            baseURL: process.env.API,
            headers: {
                Authorization: `Bearer ${this.token}`,
                ContentType: 'application/x-www-form-urlencoded',
        },
        });

        this.api.interceptors.request.use((config) => {
            const token = StorageManager.get('token');
            return {
                ...config,
                headers: {
                    ...config.headers,
                    Authorization: `Bearer ${token}`,
                    ContentType: 'application/x-www-form-urlencoded',
                },
            };
        });
    }

getUrl = (id) => (id ? `${this.url}/${id}` : this.url);

get = (url, options) => this.api.get(url, options);

getOne = (id) => this.get(this.getUrl(id));

post = (url, data, options) => this.api.post(url, data, options);

put = (url, data, options) => this.api.put(url, data, options);

patch = (url, data, options) => this.api.patch(url, data, options);

delete = (url, options) => this.api.delete(url, options);
}

export default BaseService;
