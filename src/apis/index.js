import apiController from './apiController';

/** Employee API */
export const getEmployeeList = () => {
  apiController({
    url: 'api/employee/list',
    method: 'get',
  });
};

export const getEmployeeInfo = (employee_id) => {
  apiController({
    url: `api/employee/${employee_id}`,
    method: 'get',
  });
};

export const updateEmployee = (employee_id, inData) => {
  apiController({
    url: `api/employee/${employee_id}`,
    method: 'put',
    data: inData,
  });
};

export const deleteEmployee = (employee_id) => {
  apiController({
    url: `api/employee/${employee_id}`,
    method: 'delete',
  });
};

export const myEmployeeInfo = () => {
  return apiController({
    url: `api/employee/mypage`,
    method: 'get',
  });
};

export const updatePassword = (inData) => {
  apiController({
    url: `api/employee/password`,
    method: 'post',
    data: inData,
  });
};

export const registerEmployee = (inData) => {
  apiController({
    url: `/api/employee/register`,
    method: 'post',
    data: inData,
  });
};

export const login = (inData) => {
  console.log(apiController);
  apiController({
    url: `/auth/login`,
    method: 'post',
    data: inData,
  });
};

export const getRetiredEmployeeList = () => {
  apiController({
    url: `api/retired-employee/list`,
    method: 'get',
  });
};

export const getRetiredEmployeeInfo = (employee_id) => {
  apiController({
    url: `api/retired-employee/${employee_id}`,
    method: 'get',
  });
};

export const deleteRetiredEmployee = (employee_id) => {
  apiController({
    url: `api/retired-employee/${employee_id}`,
    method: 'delete',
  });
};

/** apiController API */
export const getClientList = () => {
  apiController({
    url: `api/client/list`,
    method: 'get',
  });
};

export const getClientInfo = (client_id) => {
  apiController({
    url: `api/client/${client_id}`,
    method: 'get',
  });
};

export const registerClient = (inData) => {
  apiController({
    url: `api/client`,
    method: 'post',
    data: inData,
  });
};

export const updateClient = (client_id, inData) => {
  apiController({
    url: `api/client/${client_id}`,
    method: 'put',
    data: inData,
  });
};

export const deleteClient = (client_id) => {
  apiController({
    url: `api/client/${client_id}`,
    method: 'delete',
  });
};

export const getAccountList = () => {
  apiController({
    url: `api/account/list`,
    method: 'get',
  });
};

export const getAccountInfo = (account_id) => {
  apiController({
    url: `api/account/${account_id}`,
    method: 'get',
  });
};

export const registerAccount = (apiController_id, inData) => {
  apiController({
    url: `api/account/${apiController_id}`,
    method: 'post',
    data: inData,
  });
};

export const updateAccount = (account_id, inData) => {
  apiController({
    url: `api/account/${account_id}`,
    method: 'put',
    data: inData,
  });
};

export const deleteAccount = (account_id) => {
  apiController({
    url: `api/account/${account_id}`,
    method: 'delete',
  });
};

/** Production */
export const getProductionList = () => {
  apiController({
    url: `api/production/list`,
    method: 'get',
  });
};

export const getProductionInfo = (production_id) => {
  apiController({
    url: `api/production/${production_id}`,
    method: 'get',
  });
};

export const registerProduction = (inData) => {
  apiController({
    url: `api/production`,
    method: 'post',
    data: inData,
  });
};

export const updateProduction = (production_id, inData) => {
  apiController({
    url: `api/production/${production_id}`,
    method: 'put',
    data: inData,
  });
};

export const deleteProduction = (production_id) => {
  apiController({
    url: `api/production/${production_id}`,
    method: 'delete',
  });
};

/** Stock */
export const getStockList = () => {
  apiController({
    url: `api/stock/list`,
    method: 'get',
  });
};

export const getStockInfo = (stock_id) => {
  apiController({
    url: `api/stock/${stock_id}`,
    method: 'get',
  });
};

export const registerStock = (inData) => {
  apiController({
    url: `api/stock`,
    method: 'post',
    data: inData,
  });
};

export const updateStock = (stock_id, inData) => {
  apiController({
    url: `api/stock/${stock_id}`,
    method: 'get',
    data: inData,
  });
};

export const deleteStock = (stock_id) => {
  apiController({
    url: `api/stock/${stock_id}`,
    method: 'delete',
  });
};

/** Storage */
export const getStorageList = () => {
  apiController({
    url: `api/storage/list`,
    method: 'get',
  });
};

export const getStorageInfo = (storage_id) => {
  apiController({
    url: `api/storage/${storage_id}`,
    method: 'get',
  });
};

export const registerStorage = (inData) => {
  apiController({
    url: `api/storage`,
    method: 'post',
    data: inData,
  });
};

export const updateStorage = (storage_id, inData) => {
  apiController({
    url: `api/storage/${storage_id}`,
    method: 'get',
    data: inData,
  });
};

export const deleteStorage = (BOM_id) => {
  apiController({
    url: `api/BOM/${BOM_id}`,
    method: 'delete',
  });
};

/** BOM */
export const getBomList = () => {
  apiController({
    url: `api/BOM/list`,
    method: 'get',
  });
};

export const getBomInfo = (BOM_id) => {
  apiController({
    url: `api/BOM/${BOM_id}`,
    method: 'get',
  });
};

export const registerBom = (inData) => {
  apiController({
    url: `api/BOM`,
    method: 'post',
    data: inData,
  });
};

export const updateBom = (BOM_id, inData) => {
  apiController({
    url: `api/BOM/${BOM_id}`,
    method: 'get',
    data: inData,
  });
};

export const deleteBom = (BOM_id) => {
  apiController({
    url: `api/BOM/${BOM_id}`,
    method: 'delete',
  });
};

/** Order */
export const getOrderList = () => {
  apiController({
    url: `api/order/list`,
    method: 'get',
  });
};

export const getOrderInfo = (order_id) => {
  apiController({
    url: `api/order/${order_id}`,
    method: 'get',
  });
};

export const registerOrder = (apiController_id, inData) => {
  apiController({
    url: `api/order/${apiController_id}`,
    method: 'post',
    data: inData,
  });
};

export const updateOrder = (order_id, inData) => {
  apiController({
    url: `api/order/${order_id}`,
    method: 'get',
    data: inData,
  });
};

export const deleteOrder = (order_id) => {
  apiController({
    url: `api/order/${order_id}`,
    method: 'delete',
  });
};

/** Release */
export const getReleaseList = () => {
  apiController({
    url: `api/release/list`,
    method: 'get',
  });
};

export const getReleaseInfo = (release_id) => {
  apiController({
    url: `api/release/${release_id}`,
    method: 'get',
  });
};

export const registerRelease = (production_id, inData) => {
  apiController({
    url: `api/release/${production_id}`,
    method: 'post',
    data: inData,
  });
};

export const updateRelease = (release_id, inData) => {
  apiController({
    url: `api/release/${release_id}`,
    method: 'get',
    data: inData,
  });
};

export const deleteRelease = (release_id) => {
  apiController({
    url: `api/release/${release_id}`,
    method: 'delete',
  });
};

/** Delivery */
export const registerDelivery = (inData) => {
  apiController({
    url: `api/delivery`,
    method: 'post',
    data: inData,
  });
};
