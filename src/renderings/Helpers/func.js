const Reusable = (condition , r1 , r2 ) => {
  let result = condition === true ? r1 : r2 ;
  return result;
};

export default Reusable;
