interface componentsConfig {
  // 按钮
  // default
  btnColor: string;
  btnHoverColor: string;
  btnActiveColor: string;
  // primary
  btnPrimaryColor: string;
  btnPrimaryHoverColor: string;
  btnPrimaryActiveColor: string;

  // 单选框
  radioCheckedColor: string;

  // 复选框
  checkboxCheckedColor: string;
}


export interface themeConfig {
  style: "default";
  themeName?: "default";
  primaryColor: string;
  primaryColorHEX: string;
  prefixCls?: string;

  components: componentsConfig;
}

const primaryColor: string = '#1676FE';
const primaryColorHEX: string = '82,117,247';
const btnActiveColor: string = '#1676FE';
const btnPrimaryHoverColor: string = '#005FE6';
const btnPrimaryActiveColor: string = '#1676FE';

export const defaultTheme: themeConfig = {
  style: 'default',
  primaryColor: primaryColor,
  primaryColorHEX: primaryColorHEX,
  prefixCls: 'ant',
  themeName: 'default',

  components: {
    btnColor: primaryColor,
    btnHoverColor: primaryColor,
    btnActiveColor: btnActiveColor,
    btnPrimaryColor: primaryColor,
    btnPrimaryHoverColor: btnPrimaryHoverColor,
    btnPrimaryActiveColor: btnPrimaryActiveColor,
    radioCheckedColor: primaryColor,
    checkboxCheckedColor: primaryColor,
  }
};
