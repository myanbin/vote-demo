import React from 'react'

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'


import io from 'socket.io-client'


class VoteHeader extends React.Component {
  render() {
    let title = this.props.name
    return (
      <h2 style={{margin: 24}}>{title}</h2>
    )
  }
}


class CandidatesTable extends React.Component {

  render() {
    let createCandidate = (candidate, index) => {
      return (
        <TableRow key={index}>
          <TableRowColumn style={{fontSize: 16, width: 24}}>{index + 1}</TableRowColumn>
          <TableRowColumn style={{fontSize: 16, width: '62%'}}>{candidate.title}</TableRowColumn>
          <TableRowColumn style={{fontSize: 16}}>{candidate.owner}</TableRowColumn>
        </TableRow>
      )
    }
    return (
      <div>
        <Table multiSelectable={true}>
          <TableHeader enableSelectAll={false}>
            <TableRow>
              <TableHeaderColumn style={{fontSize: 16, width: 24}}>#</TableHeaderColumn>
              <TableHeaderColumn style={{fontSize: 16, width: '62%'}}>拟表彰内容</TableHeaderColumn>
              <TableHeaderColumn style={{fontSize: 16}}>报送部门</TableHeaderColumn>
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

class ConfirmModal extends React.Component {

  constructor() {
    super()

    this.state = {
      open: false
    }

    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleOpen() {
    this.setState({open: true})
  }
  handleClose() {
    this.setState({open: false})
  }
  handleSubmit() {
    console.log('submit vote: ...')
  }

  render() {
    const actions = [
      <FlatButton label="取消" primary={true} onTouchTap={this.handleClose} />,
      <FlatButton label="提交" primary={true} keyboardFocused={true} onTouchTap={this.handleSubmit} />
    ];
    return (
      <div>
        <RaisedButton
          label="投票"
          primary={true}
          style={{margin: 24}}
          labelStyle={{fontSize: 16}}
          onTouchTap={this.handleOpen}
        />
        <Dialog
          title="确定投票吗"
          modal={true}
          actions={actions}
          open={this.state.open}
        >
          点击提交后，你的选择会立即发送到服务器进行计算。如果你改变了主意，请点击取消。
        </Dialog>
      </div>
    )
  }
}

class Vote extends React.Component {

  constructor() {
    super()

    this.state = {
      planName: '',
      data: []
    }
  }

  componentDidMount() {
    this.setState({
      planName: '总编室第 52 次编务会通报表扬投票',
      data: [
        {
          id: 10001,
          title: '第二届世界互联网大会系列报道报道',
          owner: '国内部'
        },
        {
          id: 10002,
          title: '“东北区域改革”调研报道',
          owner: '黑龙江分社'
        },
        {
          id: 10003,
          title: '“‘十二五’回顾与‘十三五’开局看落实”全媒体调研报道',
          owner: '对外部'
        }
      ]
    })
  };


  render() {
    return (
      <div>
        <VoteHeader name={this.state.planName} />
        <CandidatesTable candidates={this.state.data} />
        <ConfirmModal />
      </div>
    )
  }
}


export default Vote