import React from 'react'
import background from '../images/screen-bg.jpg'

import io from 'socket.io-client'

const styles = {
  screen: {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    height: 'calc(100vh - 64px)'
  }
}

class Hello extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
      <div style={styles.screen}></div>
    )
  }
}

export default Hello