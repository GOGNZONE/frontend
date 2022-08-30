import instance from './apiController';

/** Employee  */
export const getEmployeeList = () => {
  return instance.get('/employee/list');
};

export const getEmployeeInfo = (employee_id) => {
  return instance.get(`/employee/${employee_id}`);
};

export const deleteEmployee = (employee_id) => {
  return instance.delete(`/employee/${employee_id}`);
};

export const myEmployeeInfo = () => {
  return instance.get(`/employee/mypage`);
};

export const updateMyProfile = (inData) => {
  return instance.post('/employee/edit', inData);
};

export const registerEmployee = (inData) => {
  return instance.post(`/employee/register`, inData);
};

export const login = (inData) => {
  return instance.post('/auth/login', inData);
};

export const getRetiredEmployeeList = () => {
  return instance.get(`/retired-employee/list`);
};

export const getRetiredEmployeeInfo = (employee_id) => {
  return instance.get(`/retired-employee/${employee_id}`);
};

export const deleteRetiredEmployee = (employee_id) => {
  return instance.delete(`/retired-employee/${employee_id}`);
};

/** client  */
export const getClientList = () => {
  return instance.get('/client/list');
};

export const getClientInfo = (client_id) => {
  return instance.get(`/client/${client_id}`);
};

export const registerClient = (inData) => {
  return instance.post(`/client`, inData);
};

export const updateClient = (inData) => {
  const { client_id, updateClientInfo } = inData;
  return instance.put(`/client/${client_id}`, updateClientInfo);
};

export const deleteClient = (client_id) => {
  return instance.delete(`/client/${client_id}`);
};

export const getAccountList = () => {
  return instance.get(`/account/list`);
};

export const getAccountInfo = (account_id) => {
  return instance.get(`/account/${account_id}`);
};

export const registerAccount = (instance_id, inData) => {
  return instance.post(`/account/${instance_id}`, inData);
};

export const updateAccount = (inData) => {
  const { account_id, updateClientAccountInfo } = inData;
  return instance.put(`/account/${account_id}`, updateClientAccountInfo);
};

export const deleteAccount = (account_id) => {
  return instance.delete(`/account/${account_id}`);
};

/** Production */
export const getProductionList = () => {
  return instance.get(`/production/list`);
};

export const getProductionInfo = (productionId) => {
  return instance.get(`/production/${productionId}`);
};

export const registerProduction = (inData) => {
  return instance.post(`/production`, inData);
};

export const updateProduction = (inData) => {
  return instance.put(`/production/${inData.productionId}`, inData.inData);
};

export const deleteProduction = (production_id) => {
  instance({
    url: `/production/${production_id}`,
    method: 'delete',
  });
};

/** Stock */
export const getStockList = () => {
  return instance.get(`/stock/list`);
};

export const getStockInfo = (stock_id) => {
  return instance.get(`/stock/${stock_id}`);
};

export const registerStock = (inData) => {
  return instance.post(`/stock`, inData);
};

export const updateStock = (stock_id, inData) => {
  return instance.put(`/stock/${stock_id}`, inData);
};

export const deleteStock = (stock_id) => {
  return instance.delete(`/stock/${stock_id}`);
};

/** Storage */
export const getStorageList = () => {
  return instance.get(`/storage/list`);
};

export const getStorageInfo = (storage_id) => {
  return instance.get(`/storage/${storage_id}`);
};

export const registerStorage = (inData) => {
  return instance.post(`/storage`, inData);
};

export const updateStorage = (storage_id, inData) => {
  return instance.get(`/storage/${storage_id}`, inData);
};

export const deleteStorage = (storage_id) => {
  return instance.delete(`/storage/${storage_id}`);
};

/** BOM */
export const getBomList = () => {
  return instance.get(`/BOM/list`);
};

export const getBomInfo = (BOM_id) => {
  return instance.get(`/BOM/${BOM_id}`);
};

export const registerBom = (inData) => {
  return instance.post(`/BOM`, inData);
};

export const updateBom = (BOM_id, inData) => {
  return instance.put(`/BOM/${BOM_id}`, inData);
};

export const deleteBom = (BOM_id) => {
  return instance.delete(`/BOM/${BOM_id}`);
};

/** Order */
export const getOrderList = () => {
  return instance.get(`/order/list`);
};

export const getOrderInfo = (order_id) => {
  return instance.get(`/order/${order_id}`);
};

export const registerOrder = (inData) => {
  return instance.post(`/order/`, inData);
};

export const updateOrder = (order_id, inData) => {
  return instance.put(`/order/${order_id}`, inData);
};

export const deleteOrder = (order_id) => {
  return instance.delete(`/order/${order_id}`);
};

/** Release */
export const getReleaseList = () => {
  return instance.get(`/release/list`);
};

export const getReleaseInfo = (release_id) => {
  return instance.get(`/release/${release_id}`);
};

export const registerRelease = (production_id, inData) => {
  return instance.post(`/release/${production_id}`, inData);
};

export const updateRelease = (release_id, inData) => {
  return instance.put(`/release/${release_id}`, inData);
};

export const deleteRelease = (release_id) => {
  return instance.delete(`/release/${release_id}`);
};

/** Delivery */
export const registerDelivery = (inData) => {
  return instance.post(`/delivery`, inData);
};

/** File */
// export const uploadFile = (file) => {
//   return axios.post('/file/upload', file);
// };
