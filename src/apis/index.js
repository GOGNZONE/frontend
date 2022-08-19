import client from './client';

/** 사용 예시) import * as api from '../apis/index' */

/** Employee API */
export const getEmployeeList = () => {
  client({
    url: 'api/employee/list',
    method: 'get',
  });
};

export const getEmployeeInfo = (employee_id) => {
  client({
    url: `api/employee/${employee_id}`,
    method: 'get',
  });
};

export const updateEmployee = (employee_id, inData) => {
  client({
    url: `api/employee/${employee_id}`,
    method: 'put',
    data: inData,
  });
};

export const deleteEmployee = (employee_id) => {
  client({
    url: `api/employee/${employee_id}`,
    method: 'delete',
  });
};

export const myEmployeeInfo = () => {
  client({
    url: `api/employee/mypage`,
    method: 'get',
  });
};

export const updatePassword = (inData) => {
  client({
    url: `api/employee/password`,
    method: 'post',
    data: inData,
  });
};

export const registerEmployee = (inData) => {
  client({
    url: `/api/employee/register`,
    method: 'post',
    data: inData,
  });
};

export const login = (inData) => {
  client({
    url: `/auth/login`,
    method: 'post',
    data: inData,
  });
};

export const getRetiredEmployeeList = () => {
  client({
    url: `api/retired-employee/list`,
    method: 'get',
  });
};

export const getRetiredEmployeeInfo = (employee_id) => {
  client({
    url: `api/retired-employee/${employee_id}`,
    method: 'get',
  });
};

export const deleteRetiredEmployee = (employee_id) => {
  client({
    url: `api/retired-employee/${employee_id}`,
    method: 'delete',
  });
};

/** Client API */
export const getClientList = () => {
  client({
    url: `api/client/list`,
    method: 'get',
  });
};

export const getClientInfo = (client_id) => {
  client({
    url: `api/client/${client_id}`,
    method: 'get',
  });
};

export const registerClient = (inData) => {
  client({
    url: `api/client`,
    method: 'post',
    data: inData,
  });
};

export const updateClient = (client_id, inData) => {
  client({
    url: `api/client/${client_id}`,
    method: 'put',
    data: inData,
  });
};

export const deleteClient = (client_id) => {
  client({
    url: `api/client/${client_id}`,
    method: 'delete',
  });
};

export const getAccountList = () => {
  client({
    url: `api/account/list`,
    method: 'get',
  });
};

export const getAccountInfo = (account_id) => {
  client({
    url: `api/account/${account_id}`,
    method: 'get',
  });
};

export const registerAccount = (client_id, inData) => {
  client({
    url: `api/account/${client_id}`,
    method: 'post',
    data: inData,
  });
};

export const updateAccount = (account_id, inData) => {
  client({
    url: `api/account/${account_id}`,
    method: 'put',
    data: inData,
  });
};

export const deleteAccount = (account_id) => {
  client({
    url: `api/account/${account_id}`,
    method: 'delete',
  });
};

/** Production */
export const getProductionList = () => {
  client({
    url: `api/production/list`,
    method: 'get',
  });
};

export const getProductionInfo = (production_id) => {
  client({
    url: `api/production/${production_id}`,
    method: 'get',
  });
};

export const registerProduction = (inData) => {
  client({
    url: `api/production`,
    method: 'post',
    data: inData,
  });
};

export const updateProduction = (production_id, inData) => {
  client({
    url: `api/production/${production_id}`,
    method: 'put',
    data: inData,
  });
};

export const deleteProduction = (production_id) => {
  client({
    url: `api/production/${production_id}`,
    method: 'delete',
  });
};

/** Stock */
export const getStockList = () => {
  client({
    url: `api/stock/list`,
    method: 'get',
  });
};

export const getStockInfo = (stock_id) => {
  client({
    url: `api/stock/${stock_id}`,
    method: 'get',
  });
};

export const registerStock = (inData) => {
  client({
    url: `api/stock`,
    method: 'post',
    data: inData,
  });
};

export const updateStock = (stock_id, inData) => {
  client({
    url: `api/stock/${stock_id}`,
    method: 'get',
    data: inData,
  });
};

export const deleteStock = (stock_id) => {
  client({
    url: `api/stock/${stock_id}`,
    method: 'delete',
  });
};

/** Storage */
export const getStorageList = () => {
  client({
    url: `api/storage/list`,
    method: 'get',
  });
};

export const getStorageInfo = (storage_id) => {
  client({
    url: `api/storage/${storage_id}`,
    method: 'get',
  });
};

export const registerStorage = (inData) => {
  client({
    url: `api/storage`,
    method: 'post',
    data: inData,
  });
};

export const updateStorage = (storage_id, inData) => {
  client({
    url: `api/storage/${storage_id}`,
    method: 'get',
    data: inData,
  });
};

export const deleteStorage = (BOM_id) => {
  client({
    url: `api/BOM/${BOM_id}`,
    method: 'delete',
  });
};

/** BOM */
export const getBomList = () => {
  client({
    url: `api/BOM/list`,
    method: 'get',
  });
};

export const getBomInfo = (BOM_id) => {
  client({
    url: `api/BOM/${BOM_id}`,
    method: 'get',
  });
};

export const registerBom = (inData) => {
  client({
    url: `api/BOM`,
    method: 'post',
    data: inData,
  });
};

export const updateBom = (BOM_id, inData) => {
  client({
    url: `api/BOM/${BOM_id}`,
    method: 'get',
    data: inData,
  });
};

export const deleteBom = (BOM_id) => {
  client({
    url: `api/BOM/${BOM_id}`,
    method: 'delete',
  });
};

/** Order */
export const getOrderList = () => {
  client({
    url: `api/order/list`,
    method: 'get',
  });
};

export const getOrderInfo = (order_id) => {
  client({
    url: `api/order/${order_id}`,
    method: 'get',
  });
};

export const registerOrder = (client_id, inData) => {
  client({
    url: `api/order/${client_id}`,
    method: 'post',
    data: inData,
  });
};

export const updateOrder = (order_id, inData) => {
  client({
    url: `api/order/${order_id}`,
    method: 'get',
    data: inData,
  });
};

export const deleteOrder = (order_id) => {
  client({
    url: `api/order/${order_id}`,
    method: 'delete',
  });
};

/** Release */
export const getReleaseList = () => {
  client({
    url: `api/release/list`,
    method: 'get',
  });
};

export const getReleaseInfo = (release_id) => {
  client({
    url: `api/release/${release_id}`,
    method: 'get',
  });
};

export const registerRelease = (production_id, inData) => {
  client({
    url: `api/release/${production_id}`,
    method: 'post',
    data: inData,
  });
};

export const updateRelease = (release_id, inData) => {
  client({
    url: `api/release/${release_id}`,
    method: 'get',
    data: inData,
  });
};

export const deleteRelease = (release_id) => {
  client({
    url: `api/release/${release_id}`,
    method: 'delete',
  });
};

/** Delivery */
export const registerDelivery = (inData) => {
  client({
    url: `api/delivery`,
    method: 'post',
    data: inData,
  });
};
