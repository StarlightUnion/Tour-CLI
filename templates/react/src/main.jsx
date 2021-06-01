import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import { ConfigProvider } from 'antd';
import store from './store';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
import { setTheme, initStyle, initStyleWebkitScroll, initStyleAntd, defaultTheme } from './emotion';
import './main.less';

setTheme(defaultTheme);
initStyle();
initStyleWebkitScroll();
initStyleAntd();

// 全局上下文
export const ConfigContext = React.createContext();

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.querySelector('body').setAttribute('theme', 'default');
  }

  render () {
    return (
      <ConfigContext.Provider value={null}>
        <ConfigProvider prefixCls={'ant'} autoInsertSpaceInButton={false} locale={zh_CN}>
        </ConfigProvider>
      </ConfigContext.Provider>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </Provider>,
  document.getElementById('root')
);
