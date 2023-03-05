const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log("type:", action.type);
  console.log("payload:", action.payload);
  console.log("prev state:", store.getState());

  next(action);

  console.log("next state:", store.getState());
};

export default loggerMiddleware;
