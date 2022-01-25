import BaseService from './BaseService';

const url = process.env.API;

class Products extends BaseService {
    create = (data) => this.post(`${url}/products/addProduct`, data);
    fetchProducts = () => {
        let projects = [];
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`${url}/products/`, {
                    headers: {
                        Authorization: `Bearer ${getToken()}`,
                    },
                });

                return response.data;
            } catch (error) {
                return error;
            }
        };
        products = fetchProduct();
        return products;
    };

    updateProduct = async (id, data) => {
        const response = await axios.put(`${url}/products/${id}`, data, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        });
        return response.data;
    };

    deleteProduct = async (id) => {
        const response = await axios.delete(`${url}/products/${id}`, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        });
        return response.id;
    }
}

export default new Products();