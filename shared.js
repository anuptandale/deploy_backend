let sharedObj;

module.exports = {
  setSharedObj: (obj) => {
    sharedObj = obj;
  },
  getSharedObj: () => sharedObj,
};
