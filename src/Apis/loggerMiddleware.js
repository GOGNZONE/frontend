const loggerMiddleware = (store) => (next) => (action) => {
  console.group(action && action.type);
  console.log('이전 상태', store.getState());
  console.log('액션', action);
  next(action);
  console.log('다음 상태', store.getState());
  console.group(); // 그룹 끝
};

export default loggerMiddleware;
