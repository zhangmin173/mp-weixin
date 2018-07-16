/*
 * @Author: 张敏 
 * @Date: 2018-04-17 08:41:11 
 * @Last Modified by: Zhang Min
 * @Last Modified time: 2018-07-08 11:21:01
 */

/**
 * 算法类函数
 */
const Mt = (function () {
    return {
      getRandomPosition(xMin, xMax, yMin, yMax) {
        const x = Math.ceil(Math.random() * (xMax - xMin)) + xMin;
        const y = Math.ceil(Math.random() * (yMax - yMin)) + yMin;
        return [x, y];
      }
    }
  })();
  export default Mt