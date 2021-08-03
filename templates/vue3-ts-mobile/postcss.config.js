module.exports = {
  "plugins": {
    "postcss-pxtorem": {
      rootValue: 37.5, // 根字体大小
      propList: ['*'],
      selectorBlackList: ['.norem'] // 过滤掉.norem-开头的class，不进行rem转换
    }
  }
}