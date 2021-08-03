// rem适配

const baseSize = 37.5;

const setRem = (): void => {
  // 当前页面宽度相对于 375宽的缩放比例
  const scale = document.documentElement.clientWidth / 375;

  // 设置页面根节点字体大小（“Math.min(scale, 2)” 指最高放大比例为2
  document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px';
}

// 初始化
setRem();

window.onresize = () => {
  setRem();
}