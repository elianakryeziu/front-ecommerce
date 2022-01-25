import { createActions, createReducer } from 'reduxsauce';
import model from './model';

const { Types: types, Creators: actions } = createActions({
    fetchProductsRequest: ['data'],
    fetchProductsSuccess: ['data'],
    fetchProductsFailed: ['error'],
    createProductRequest: ['data', 'productCreated', 'productFailed'],
    createProductSuccess: ['data'],
    createProductFailed: ['error'],
    updateProductRequest: ['id', 'data'],
    updateProductSuccess: ['id', 'data'],
    updateProductFailed: ['error'],
    deleteProductRequest: ['id'],
    deleteProductSuccess: ['id'],
    deleteProductFailed: ['error'],
});

const projectReducerHandler = {
    [types.FETCH_PRODUCTS_REQUEST]: (state) => ({
        ...state,
        fetchProducts: {
            fetchingLoading: true,
            fetchingError: null,
        },
    }),
    [types.FETCH_PRODUCTS_SUCCESS]: (state, action) => ({
        ...state,
        fetchProducts: {
            data: action.data.result,
            totalItems: action.data.totalItems,
            fetchingLoading: false,
            fetchingError: null,
        },
    }),
    [types.FETCH_PRODUCTS_FAILED]: (state, action) => ({
        ...state,
        fetchProducts: {
            fetchingLoading: false,
            fetchingError: action.error,
        },
    }),
    [types.CREATE_PRODUCT_REQUEST]: (state) => ({
        ...state,
        createProduct: {
            creatingLoading: true,
            creatingError: null,
        },
    }),
    [types.CREATE_PRODUCT_SUCCESS]: (state, action) => ({
        ...state,
        data: action.data, // [action.data, ...state.data]
        totalItems: state.totalItems,
        createProduct: {
            creatingLoading: false,
            creatingError: null,
        },
    }),
    [types.CREATE_PRODUCT_FAILED]: (state, action) => ({
        ...state,
        createProduct: {
            creatingLoading: false,
            creatingError: action.error,
        },
    }),
    [types.UPDATE_PRODUCT_REQUEST]: (state) => ({
        ...state,
        updateProduct: {
            updatingLoading: true,
            updatingError: null,
        },
    }),
    [types.UPDATE_PRODUCT_SUCCESS]: (state, { id, data }) => ({
        ...state,
        updateProduct: {
            id,
            data,
            updatingLoading: false,
            updatingError: null,
        },
    }),
    [types.UPDATE_PRODUCT_FAILED]: (state, action) => ({
        ...state,
        updateProduct: {
            updatingLoading: false,
            updatingError: action.error,
        },
    }),
    [types.DELETE_PRODUCT_REQUEST]: (state) => ({
        ...state,
        deleteProduct: {
            deletingLoading: true,
            deletingError: null,
        },
    }),
    [types.DELETE_PRODUCT_SUCCESS]: (state, { id }) => ({
        ...state,
        deleteProduct: {
            id,
            totalItems: state.totalItems,
            deletingLoading: false,
            deletingError: null,
        },
    }),
    [types.DELETE_PROJECT_FAILED]: (state, action) => ({
        ...state,
        deleteProduct: {
            deletingLoading: false,
            deletingError: action.error,
        },
    }),
};

export default createReducer(model, {
    ...projectReducerHandler,
});

export { types, actions };