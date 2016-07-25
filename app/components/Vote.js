import React from 'react'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import LinearProgress from 'material-ui/LinearProgress'



const styles = {
  header: {
    margin: 24
  },
  button: {
    margin: 16,
  },
  buttonLabel: {
    fontSize: 16
  },
  dialog: {
    width: '100%',
    maxWidth: 'none',
    textAlign: 'center'
  },
  progress: {
    width: 500,
    margin: 'auto'
  },
  tableIndex: {
    width: 24,
    fontSize: 16
  },
  tableColumn: {
    fontSize: 16
  }
}

class VoteHeader extends React.Component {
  render() {
    let title = this.props.name + '（' + ['预选', '第一轮', '第二轮', '第三轮'][this.props.round] + '）'
    return (
      <h2 style={styles.header}>{title}</h2>
    )
  }
}

class WaitingModal extends React.Component {

  render() {
    return (
      <Dialog
        title="你已经提交选票，请等待其他 3 位评委"
        contentStyle={styles.dialog}
        modal={true}
        open={this.props.voted}
      >
        <LinearProgress mode="indeterminate" style={styles.progress} />
      </Dialog>
    )
  }
}

class CandidatesBox extends React.Component {

  render() {
    let createCandidate = (candidate, index) => {
      return (
        <TableRow key={index}>
          <TableRowColumn style={styles.tableIndex}>{index + 1}</TableRowColumn>
          <TableRowColumn style={styles.tableColumn}>{candidate.title}</TableRowColumn>
        </TableRow>
      )
    }
    return (
      <div>
        <Table multiSelectable={true}>
          <TableHeader enableSelectAll={false}>
            <TableRow>
              <TableHeaderColumn style={styles.tableIndex}>#</TableHeaderColumn>
              <TableHeaderColumn style={styles.tableColumn}>拟表彰内容</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody showRowHover={true}>
            {this.props.candidates.map(createCandidate)}
          </TableBody>
        </Table>
      </div>
    )
  }
}



class Vote extends React.Component {

  constructor() {
    super()

    this.state = {
      isVoted: false,
      planName: '',
      currentRound: 0,
      candidates: []
    }
  }

  componentDidMount() {
    this.setState({
      planName: '总编室第 52 次编务会通报表扬投票',
      currentRound: 1,
      candidates: [
        {
          id: 10001,
          title: '第二届世界互联网大会系列报道报道'
        },
        {
          id: 10002,
          title: '“东北区域改革”调研报道'
        },
        {
          id: 10001,
          title: '第二届世界互联网大会系列报道报道'
        },
        {
          id: 10002,
          title: '“东北区域改革”调研报道'
        },
        {
          id: 10001,
          title: '第二届世界互联网大会系列报道报道'
        },
        {
          id: 10002,
          title: '“东北区域改革”调研报道'
        },
        {
          id: 10001,
          title: '第二届世界互联网大会系列报道报道'
        },
        {
          id: 10002,
          title: '“东北区域改革”调研报道'
        },
        {
          id: 10001,
          title: '第二届世界互联网大会系列报道报道'
        },
        {
          id: 10002,
          title: '“东北区域改革”调研报道'
        }
      ]
    })
  };

  handleSubmit() {
    this.setState({isVoted: true})
    setTimeout(() => this.props.history.push('/stat'), 2000)
  }

  render() {
    return (
      <div>
        <VoteHeader name={this.state.planName} round={this.state.currentRound} />
        <CandidatesBox candidates={this.state.candidates} />
        <WaitingModal voted={this.state.isVoted} />
        <RaisedButton
          label="提交选票" primary={true}
          style={styles.button} labelStyle={styles.buttonLabel}
          onTouchTap={this.handleSubmit.bind(this)}
        />
      </div>
    )
  }
}


export default Vote