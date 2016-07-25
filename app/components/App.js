import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

// import '../stylesheets/normalize.css'


class App extends React.Component {
  componentDidMount() {
    // 在 App 组件加载后，设置浏览器滚动条样式
    if (navigator.platform == "Win32") {
      var cssId = 'webkit-scrollbar';
      if (!document.getElementById(cssId)) {
        var head  = document.getElementsByTagName('head')[0];
        var style  = document.createElement('style');
        style.id   = cssId;
        style.innerText = '::-webkit-scrollbar { width: 6px; height: 6px; background-color: #fff; } ::-webkit-scrollbar-track { background-color: #fff; } ::-webkit-scrollbar-thumb { background-color: #ccc; border: 1px solid #ddd; }';
        head.appendChild(style);
      }
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar title="新华社综合评审系统" />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App