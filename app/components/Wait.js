import React from 'react'
import LinearProgress from 'material-ui/LinearProgress'

import io from 'socket.io-client'

const styles = {
  progress: {
    width: '100%'
  },
  wrap: {
    margin: '100px auto',
    width: 800
  }
}

class Wait extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
      <div style={styles.wrap}>
        <h2 style={{textAlign: 'center'}}>你已经提交选票，请等待其他 3 位评委</h2>
        <LinearProgress mode="indeterminate" style={styles.progress} />
      </div>
    )
  }
}

export default Wait