import React from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AppBar from 'material-ui/AppBar'
import { lightBlue900 } from 'material-ui/styles/colors'

const muiTheme = getMuiTheme({
  appBar: {
    color: lightBlue900
  }
});

class App extends React.Component {

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar title="新华社综合评审系统" />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App