// -----------------------------------------------
// モバイル判定
// -----------------------------------------------
export const is_mobile = () => {
  return window.innerWidth <= 1024;
};
// -----------------------------------------------
// デスクトップ判定
// -----------------------------------------------
export const is_desktop = () => {
  return !this.is_mobile();
};