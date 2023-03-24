module.exports = function sum(number) {
if(number===1) {
  return 1;
}else if (number>1){
  return number + sum(number-1);
}else {
  return 0;
}
};

