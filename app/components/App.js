import React from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

import io from 'socket.io-client'

// import '../stylesheets/normalize.css'

class App extends React.Component {

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