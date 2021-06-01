import { css, cx, injectGlobal } from 'emotion';
import { themeConfig, } from './emotioncfg';
export { defaultTheme } from './emotioncfg';


// 主题
let themeName: string;
// 前缀名称
let prefixCls: string;

// 主色调
let sysPrimaryColor: string;
let sysPrimaryColorHEX: string;

// 默认文字颜色
let color: string = '#333';

// 标题
let h3FontSize: string = '16px';
let h4FontSize: string = '14px';
let h3Color: string = '#202020';
let h4Color: string = '#202020';

// 按钮
// default
let btnColor: string;
let btnHoverColor: string;
let btnActiveColor: string;
// primary
let btnPrimaryColor: string;
let btnPrimaryHoverColor: string;
let btnPrimaryActiveColor: string;

// 表格
let tableBorderColor: string = '#E9E9E9'; // 表格边框颜色
let tableThBackgroundColor: string = '#EFF0F5'; // 表头背景
// let tableTbodyTrODDBackgroundColor: string = '#F8F9FB'; // 奇数行背景
// let tableTbodyTrODDBackgroundColor = '#FCFCFC'; // 偶数行背景
let tableTbodyTrSelectedBackgroundColor: string = '#E4EBFF'; // 选中行背景
// let tableTbodyTrHoverBackgroundColor: string = tableTbodyTrSelectedBackgroundColor; // 选中行背景

// 分页
let paginationItemActiveBackground: string = sysPrimaryColor; // 选中
let paginationItemActiveBorderColor: string = sysPrimaryColor; // 选中


// 对话框
let modalHeaderBackgroundColor: string = sysPrimaryColor;


// 复选框
let checkboxCheckedColor: string = sysPrimaryColor;
let checkboxCheckedIndeterminateColor: string = checkboxCheckedColor; // 半选中背景色


// 单选框
let radioCheckedColor: string = sysPrimaryColor;

// 下拉列表
let selectActivedColor: string = sysPrimaryColor;

// 输入框
let inputFocusColor: string = sysPrimaryColor;

export
  function setTheme(cfg: themeConfig) {
  // 主题
  themeName = cfg.themeName;
  // 前缀名称
  prefixCls = cfg.prefixCls;

  // 主色调
  sysPrimaryColor = cfg.primaryColor;
  sysPrimaryColorHEX = cfg.primaryColorHEX;


  // 按钮
  // default
  btnColor = cfg.components.btnColor;
  btnHoverColor = cfg.components.btnHoverColor;
  btnActiveColor = cfg.components.btnActiveColor;
  // primary
  btnPrimaryColor = cfg.components.btnPrimaryColor;
  btnPrimaryHoverColor = cfg.components.btnPrimaryHoverColor;
  btnPrimaryActiveColor = cfg.components.btnPrimaryActiveColor;

  // 表格
  tableBorderColor = '#E9E9E9'; // 表格边框颜色
  tableThBackgroundColor = '#EFF0F5'; // 表头背景
  // tableTbodyTrODDBackgroundColor = '#F8F9FB'; // 奇数行背景
  // tableTbodyTrODDBackgroundColor = '#FCFCFC'; // 偶数行背景
  tableTbodyTrSelectedBackgroundColor = '#E4EBFF'; // 选中行背景
  // tableTbodyTrHoverBackgroundColor = tableTbodyTrSelectedBackgroundColor; // 选中行背景

  // 分页
  paginationItemActiveBackground = sysPrimaryColor; // 选中
  paginationItemActiveBorderColor = sysPrimaryColor; // 选中


  // 对话框
  modalHeaderBackgroundColor = 'transparent';


  // 复选框
  checkboxCheckedColor = sysPrimaryColor;
  checkboxCheckedIndeterminateColor = sysPrimaryColor; // 半选中背景色


  // 单选框
  radioCheckedColor = cfg.components.radioCheckedColor;

  // 下拉列表
  selectActivedColor = sysPrimaryColor;

  // 输入框
  inputFocusColor = sysPrimaryColor;
}

export const styleScroll = cx(css({ overflow: 'auto' }));

export
  function initStyleWebkitScroll() {
  injectGlobal`
  *::-webkit-scrollbar {
      width: 8px;
      height: 8px;
  }
   *::-webkit-scrollbar-thumb {
      border-radius: 5px;

      background:#CDD2D7;
  }
   *::-webkit-scrollbar-track {
      border-radius: 0;

      background: rgba(237,237,237, 0.8);
  }
  *::-webkit-scrollbar-button {
      width: 10px;
      height: 10px;
      border-radius: 5%;
      display: none;
      background: rgb(214, 214, 214);
  }`;
}

export
  function initStyle() {
  injectGlobal`
    html{
      font-size: 5.2vw;
      min-width: 1200px;
      overflow-y: auto;
      overflow-x: auto;

    }
    #root {
      overflow: hidden;
      transform: translateZ(0);
      height: 100%;
      background: #f5f5f5;
      display: flex;
      flex-direction: row;
    }
    body {
      color: ${color};
    }
  `;
}

export
  function initStyleAntd() {
  // Typography.Title
  injectGlobal`
    body[theme="${themeName}"] {

      h3.${prefixCls}-typography, h4.${prefixCls}-typography {
        line-height: 1.5;
        font-weight: bolder;
      }

      h3.${prefixCls}-typography {
        font-size: ${h3FontSize};
        color: ${h3Color};
        margin-bottom: 16px;
      }

      h4.${prefixCls}-typography {
        font-size: ${h4FontSize};
        color: ${h4Color};
        margin-bottom: 10px;
      }
    }
  `;


  // Button
  injectGlobal`
    body[theme="${themeName}"] {

      .${prefixCls}-btn {
        padding:0 10px; // 默认大小左右内边距10px
        border-radius: 4px;

        // 禁用状态
        &[disabled], &.disabled,
        &:hover[disabled], &:focus.disabled {
          color: #999;
          background-color: #f5f5f5;
          border-color: #D9D9D9;
        }

        // 默认状态type=default
        border-color: #D9D9D9;
        color: #333;
        &:hover, &:focus{
          color: ${btnActiveColor};
          border-color: ${btnHoverColor};
        }
        &:active {
          background-color: #fff;
          border-color: ${btnActiveColor};
          color: ${btnActiveColor};
        }
        &:focus {
          box-shadow: 0 0 0 4px rgba(22, 118, 254, .13);
        }

        // 主按钮type=primary
        &.${prefixCls}-btn-primary {
          background-color: ${btnPrimaryColor};
          border-color: ${btnPrimaryColor};
          color: #fff;
          &:hover, &:focus {
            background-color: ${btnPrimaryHoverColor};
            border-color: ${btnPrimaryHoverColor};
          }
          &:active {
            background-color: ${btnPrimaryActiveColor};
            border-color: ${btnPrimaryActiveColor};
          }
          &:focus{
            box-shadow: 0 0 0 4px rgba(22, 118, 254, .13);
          }

          // disabled
          &[disabled],&.disabled,
          &:hover[disabled], &:focus.disabled {
            color: rgba(0, 0, 0, 0.25);
            background-color: #f5f5f5;
            border-color: #d9d9d9;
          }
        }


        // type=link
        &.${prefixCls}-btn-link {
          color: ${btnColor};
          background-color: transparent;
          border-color: transparent;
          box-shadow: none;

          &:hover, &:focus {
            color: ${btnPrimaryHoverColor};
            background-color: transparent;
            border-color: ${btnPrimaryHoverColor};
            span {
              text-decoration: underline;
            }
          }

          &:active, &.active {
            color: ${btnPrimaryActiveColor};
            background-color: transparent;
            border-color: ${btnPrimaryActiveColor};
          }

          &:hover, &:focus, &:active {
            border-color: transparent;
          }
        }
      }
    }
  `;



  // Pagination
  injectGlobal`
  body[theme="${themeName}"] {

    .${prefixCls}-pagination {
      .${prefixCls}-pagination-item-active{
        background: ${paginationItemActiveBackground};
        border-color: ${paginationItemActiveBorderColor};
        a {
          color: #fff;
        }
      }

      .${prefixCls}-pagination-item {
        min-width: 30px;
        height: 30px;
        line-height: 30px;
        border: none;
      }

      .${prefixCls}-pagination-prev,
      .${prefixCls}-pagination-next,
      .${prefixCls}-pagination-jump-prev,
      .${prefixCls}-pagination-jump-next {
        min-width: 30px;
        height: 30px;
        line-height: 30px;
      }

      .${prefixCls}-pagination-prev,
      .${prefixCls}-pagination-next {
        .${prefixCls}-pagination-item-link {
          border: none;
          background: #D3DFFF;
          color: #4485FF;
        }
      }

      .${prefixCls}-pagination-disabled {
        .${prefixCls}-pagination-item-link {
          border: none;
          background: #D9DCE5;
          color: #A8A8A8;
        }
      }

      .${prefixCls}-pagination-options {
        .${prefixCls}-select-selector {
          height: 30px;
        }

        .${prefixCls}-pagination-options-quick-jumper {
          height: 30px;
          line-height: 30px;
          input {
            height: 30px;
            border-radius: 4px;
          }

          input:focus,
          input-focused {
            border-color: ${selectActivedColor};
            box-shadow: 0 0 0 4px rgba(22, 118, 254, .13);
          }
        }
      }
    }

  }
  `;


  // Select
  injectGlobal`
  body[theme="${themeName}"] {
    .${prefixCls}-select-single:not(.${prefixCls}-select-customize-input) .${prefixCls}-select-selector {
      border-radius: 4px;
      border: 1px solid #e9e9e9;
    }

    .${prefixCls}-select-focused:not(.${prefixCls}-select-disabled).${prefixCls}-select-single:not(.${prefixCls}-select-customize-input) .${prefixCls}-select-selector {
      border-color: ${selectActivedColor};
      box-shadow: 0 0 0 4px rgba(22, 118, 254, .13);
    }

    .${prefixCls}-select-dropdown {
      border-radius: 4px;
      padding: 10px 0;
      .${prefixCls}-select-item {
        min-height: 30px;
        padding: 4px 12px;

        .${prefixCls}-select-item-option-content {
          text-align: center;
        }
      }

      .${prefixCls}-select-item-option-selected:not(.${prefixCls}-select-item-option-disabled) {
        font-weight: normal;
        background-color: #ECF7FF;
        color: ${selectActivedColor}
      }

      .${prefixCls}-select-item-option-active {
        background-color: #ECF7FF;
      }
    }
  }
  `;


  // Tree
  injectGlobal`
  body[theme="${themeName}"] {

    .${prefixCls}-tree {
      li {
        .${prefixCls}-tree-node-content-wrapper{
          color: ${color};
        }

        .${prefixCls}-tree-node-content-wrapper {
          &.${prefixCls}-tree-node-selected {
              background-color: rgba(${sysPrimaryColorHEX}, 0.2);
          }
        }
      }
    }
  }
  `;


  // Modal
  injectGlobal`
  body[theme="${themeName}"] {

    .${prefixCls}-modal {
      .${prefixCls}-modal-content {
        border-radius: 4px;
        box-shadow: 0 4px 12px rgba(0,0,0,.15);

        .${prefixCls}-modal-close {
          span.${prefixCls}-modal-close-x {
            i {
              color: #676b77;
            }
          }
        }

        .${prefixCls}-modal-header {
          background: ${modalHeaderBackgroundColor};
          font-family: PingFangSC-Regular;
          border-bottom: none;
          padding: 24px 24px 0 24px;
          .${prefixCls}-modal-title {
            color: #333;
          }d
        }
      }
    }
  }
  `;


  // Checkbox
  injectGlobal`
  body[theme="${themeName}"] {

    .${prefixCls}-checkbox-wrapper {

      .${prefixCls}-checkbox:hover{
        .${prefixCls}-checkbox-inner{
          border-color: ${checkboxCheckedColor};
        }
      }

      .${prefixCls}-checkbox-input:focus + .${prefixCls}-checkbox-inner{
        border-color: ${checkboxCheckedColor};
      }

      .${prefixCls}-checkbox-checked {
        .${prefixCls}-checkbox-inner{
          border-color: ${checkboxCheckedColor};
          background-color: ${checkboxCheckedColor};
        }
      }

      .${prefixCls}-checkbox-indeterminate .${prefixCls}-checkbox-inner:after{
        background-color: ${checkboxCheckedIndeterminateColor};
      }
    }
  }
  `;


  // Radio
  injectGlobal`
  body[theme="${themeName}"] {

    .${prefixCls}-radio-input:focus + .${prefixCls}-radio-inner{
      border-color: ${radioCheckedColor};
    }
    .${prefixCls}-radio-wrapper {
      &:hover{
        .${prefixCls}-radio{
          border-color: ${radioCheckedColor};
        }
      }
      .${prefixCls}-radio:hover{
        .${prefixCls}-radio-inner {
          border-color: ${radioCheckedColor};
        }
      }

      .${prefixCls}-radio-checked{
        .${prefixCls}-radio-inner{
          border-color: ${radioCheckedColor};
          &::after{
            background-color: ${radioCheckedColor};
          }
        }
      }
      .${prefixCls}-radio-inner:after{
        background-color: ${radioCheckedColor};
      }
    }

    .${prefixCls}-radio-button-wrapper {
      border-color: ${radioCheckedColor};
    }
    .${prefixCls}-radio-button-wrapper:hover {
      color: ${radioCheckedColor};
    }
    .${prefixCls}-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover {
      color: #fff;
    }
    .${prefixCls}-radio-button-wrapper:first-child {
      border-radius: 4px 0 0 4px;
    }
    .${prefixCls}-radio-button-wrapper:last-child {
      border-radius: 0 4px 4px 0;
    }
    .${prefixCls}-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
      border-color: ${radioCheckedColor};
      background: ${radioCheckedColor};
      color: #fff;
    }
    .${prefixCls}-radio-button-wrapper:not(:first-child)::before {
      background-color: ${radioCheckedColor};
    }
    .${prefixCls}-radio-button-wrapper-checked:not([class*=' ${prefixCls}-radio-button-wrapper-disabled']).${prefixCls}-radio-button-wrapper:first-child {
      border-right-color: ${radioCheckedColor};
    }
    .${prefixCls}-radio-button-wrapper-checked:not(.${prefixCls}-radio-button-wrapper-disabled):focus-within {
      box-shadow: 0 0 0 4px rgba(22, 118, 254, .13);
    }
  }
  `;


  // Table antd 4.x
  injectGlobal`
  body[theme="${themeName}"] {
    .${prefixCls}-table {
      border-radius: 4px;

      .${prefixCls}-table-container {
        border: 1px solid ${tableBorderColor};
        border-right: 0;
        border-bottom: 0;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;

        table {
          border-radius: 4px 4px 0 0;

          .${prefixCls}-table-thead > tr > th {
            border-bottom: 1px solid ${tableBorderColor};
            background: ${tableThBackgroundColor};
          }

          .${prefixCls}-table-tbody > tr > td {
            border-bottom: 1px solid ${tableBorderColor};
          }

          .${prefixCls}-table-thead > tr > th {
            padding: 8px 12px;
          }

          .${prefixCls}-table-tbody > tr > td,
          .${prefixCls}-table tfoot > tr > th,
          .${prefixCls}-table tfoot > tr > td {
            padding: 7px 12px;
          }

          .${prefixCls}-table-tbody > tr.${prefixCls}-table-row:hover > td {
            background: ${tableTbodyTrSelectedBackgroundColor};
          }

          & > thead > tr:first-child th:first-child {
            border-top-left-radius: 4px;
          }

          & > thead > tr:first-child th:last-child {
            border-top-right-radius: 4px;
          }
        }
      }

      &.${prefixCls}-table-bordered > .${prefixCls}-table-container > .${prefixCls}-table-content > table > thead > tr > th,
      &.${prefixCls}-table-bordered > .${prefixCls}-table-container > .${prefixCls}-table-header > table > thead > tr > th,
      &.${prefixCls}-table-bordered > .${prefixCls}-table-container > .${prefixCls}-table-body > table > thead > tr > th,
      &.${prefixCls}-table-bordered > .${prefixCls}-table-container > .${prefixCls}-table-content > table > tbody > tr > td,
      &.${prefixCls}-table-bordered > .${prefixCls}-table-container > .${prefixCls}-table-header > table > tbody > tr > td,
      &.${prefixCls}-table-bordered > .${prefixCls}-table-container > .${prefixCls}-table-body > table > tbody > tr > td,
      &.${prefixCls}-table-bordered > .${prefixCls}-table-container > .${prefixCls}-table-content > table > tfoot > tr > th,
      &.${prefixCls}-table-bordered > .${prefixCls}-table-container > .${prefixCls}-table-header > table > tfoot > tr > th,
      &.${prefixCls}-table-bordered > .${prefixCls}-table-container > .${prefixCls}-table-body > table > tfoot > tr > th,
      &.${prefixCls}-table-bordered > .${prefixCls}-table-container > .${prefixCls}-table-content > table > tfoot > tr > td,
      &.${prefixCls}-table-bordered > .${prefixCls}-table-container > .${prefixCls}-table-header > table > tfoot > tr > td,
      &.${prefixCls}-table-bordered > .${prefixCls}-table-container > .${prefixCls}-table-body > table > tfoot > tr > td {
        border-right: 1px solid ${tableBorderColor};
      }
    }
  }
  `;


  // Tabs
  injectGlobal`
  body[theme="${themeName}"] {
    .${prefixCls}-tabs {

      // tabPosition=top type=card
      &.${prefixCls}-tabs-top.${prefixCls}-tabs-card {

        .${prefixCls}-tabs-card-bar .${prefixCls}-tabs-tab {
          background: transparent;
          border: 0;
          &.${prefixCls}-tabs-tab-active {
            background: #fff;
            border-color: #e8e8e8;
            border-bottom: 1px solid #fff;
          }
        }

        .${prefixCls}-tabs-content.${prefixCls}-tabs-card-content {
          margin-top: -16px;
          background: #fff;
          height: calc(100% - 40px);

          .${prefixCls}-tabs-tabpane {
            height: 100%;
          }

          .${prefixCls}-tabs-tabpane.${prefixCls}-tabs-tabpane-inactive {
            display: none;
          }
        }
      }
    }
  }
  `;


  // Form
  injectGlobal`
    body[theme="${themeName}"] {
      .${prefixCls}-form {
        &.${prefixCls}-form-horizontal {
          .${prefixCls}-form-item {
            margin-bottom: 20px;
          }
        }
        &.${prefixCls}-form-vertical {
          .${prefixCls}-form-item {
            margin-bottom: 20px;
          }
        }
      }
    }
  `;

  // Spin
  injectGlobal`
  body[theme="${themeName}"] {
    .${prefixCls}-spin-container, .${prefixCls}-spin-nested-loading {
      height: 100%;
    }
  }
  `;

  // Dropdown
  injectGlobal`
  body[theme="${themeName}"] {
    .${prefixCls}-dropdown-menu-item:hover,
    .${prefixCls}-dropdown-menu-submenu-title:hover {
      background-color: #e6f7ff;
    }
  }
  `;

  // Menu
  injectGlobal`
  body[theme="${themeName}"] {
    .${prefixCls}-menu-dark .${prefixCls}-menu-item:hover,
    .${prefixCls}-menu.${prefixCls}-menu-dark .${prefixCls}-menu-item-selected,
    .${prefixCls}-menu-submenu-popup.${prefixCls}-menu-dark .${prefixCls}-menu-item-selected {
      background-color: #475265;
    }

    .${prefixCls}-menu-inline-collapsed {
      width: 88px;
    }
  }
  `;

  // Progress
  injectGlobal`
  body[theme="${themeName}"] {
    .${prefixCls}-progress-success-bg,
    .${prefixCls}-progress-bg {
      background-color: ${btnColor};
    }

    .${prefixCls}-progress-status-success .${prefixCls}-progress-bg {
      background-color: #01c853;
    }
  }
  `;

  // Input
  injectGlobal`
  body[theme="${themeName}"] {
    // .${prefixCls}-input {}

    // group-input
    .${prefixCls}-input-group-wrapper {
      .${prefixCls}-input-wrapper.${prefixCls}-input-group {
        .${prefixCls}-input-affix-wrapper {
          border-radius: 4px;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }

        .${prefixCls}-input-affix-wrapper:focus,
        .${prefixCls}-input-affix-wrapper-focused {
          border-color: ${inputFocusColor};
          box-shadow: 0 0 0 4px rgba(22, 118, 254, .13);
        }

        .${prefixCls}-input-affix-wrapper:hover {
          border-color: ${inputFocusColor};
        }

        .${prefixCls}-input-group-addon {
          border-radius: 4px;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
      }
    }
  }
  `;

  //首页调整
  // injectGlobal`
  // @media screen and (max-width: 1730px) {

  // }
  // @media screen and (max-width: 1500px) {

  // }
  // `;

  //字体响应式调整
  injectGlobal`
  @media screen and (max-width: 1400px) {
    body,
    .${prefixCls}-table-wrapper .${prefixCls}-table-small > .${prefixCls}-table-content > .${prefixCls}-table-body 
    .${prefixCls}-table-thead > tr > th > .${prefixCls}-table-header-column,
    .${prefixCls}-btn,
    .${prefixCls}-select-dropdown,
    .${prefixCls}-select,
    .${prefixCls}-dropdown-menu-item,
    .${prefixCls}-pagination,
    .${prefixCls}-table,
    .${prefixCls}-tree,
    .${prefixCls}-modal-body,
    .${prefixCls}-menu-inline > .${prefixCls}-menu-item,
    .${prefixCls}-form label,
    .${prefixCls}-input,
    .${prefixCls}-tabs-nav-container,
    .${prefixCls}-tabs,
    .${prefixCls}-alert {
      font-size: 12px !important;
    }
    body[theme="${themeName}"]{
      .${prefixCls}-modal-title,
      h3.${prefixCls}-typography{
        font-size: 14px !important;
      }
      .${prefixCls}-table.${prefixCls}-table-small [vt] > table > .${prefixCls}-table-tbody > tr > td{
        padding: 5px 2px;
      }

      .${prefixCls}-table-small > .${prefixCls}-table-content > .${prefixCls}-table-scroll > .${prefixCls}-table-body >
       table > .${prefixCls}-table-tbody > tr > td {
        padding: 7px 2px;
      }
    }
  }
  `;
}
