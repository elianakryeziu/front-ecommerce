import {
    all,
    takeEvery,
    fork,
    put,
    call,
} from '@redux-saga/core/effects';
import Products from '../../services/Products';
import { actions, types } from './reducer';

export function* createProduct({ data, productCreated, productCreated }) {
    try {
        const response = yield call(Products.create, data);
        yield put(actions.createProductSuccess(response.data));
        productCreated();
    } catch (error) {
        yield put(actions.createProductFailed(error));
        productFailed();
    }
}

export function* fetchProducts() {
    try {
        const response = yield call(Products.fetchProducts);
        yield put(actions.fetchProductsSuccess(response));
    } catch (error) {
        yield put(actions.fetchProductsFailed(error));
    }
}

export function* updateProduct({
    id, data,
}) {
    try {
        const response = yield call(Products.updateProduct, id, data);
        yield put(actions.updateProductSuccess(id, response.data));
    } catch (error) {
        yield put(actions.updateProductFailed(error));
    }
}

export function* deleteProduct({ id }) {
    try {
        const response = yield call(Products.deleteProduct, id);
        yield put(actions.deleteProductSuccess(response.id));
    } catch (error) {
        yield put(actions.deleteProductFailed(error));
    }
}

function* watchFetchProducts() {
    yield takeEvery(types.FETCH_PRODUCTS_REQUEST, fetchProducts);
}

function* watchCreateProduct() {
    yield takeEvery(types.CREATE_PRODUCT_REQUEST, createProduct);
}

function* watchUpdateProduct() {
    yield takeEvery(types.UPDATE_PRODUCT_REQUEST, updateProduct);
}

function* watchDeleteProduct() {
    yield takeEvery(types.DELETE_PRODUCT_REQUEST, deleteProduct);
}

export default function* productSaga() {
    yield all([
        fork(watchCreateProduct),
        fork(watchFetchProducts),
        fork(watchUpdateProduct),
        fork(watchDeleteProduct),
    ]);
}