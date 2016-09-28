import React from 'react'

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'

import io from 'socket.io-client'

class StatHeader extends React.Component {
  render() {
    let title = this.props.name + ' 投票结果'
    return (
      <h2 style={{margin: 24}}>{title}</h2>
    )
  }
}

class ResultsTable extends React.Component {
  render() {
    let createCandidate = (candidate, index) => {
      return (
        <TableRow key={index}>
          <TableRowColumn style={{fontSize: 16, width: 24}}>{index + 1}</TableRowColumn>
          <TableRowColumn style={{fontSize: 16, width: '62%'}}>{candidate.title}</TableRowColumn>
          <TableRowColumn style={{fontSize: 16}}>{candidate.owner}</TableRowColumn>
          <TableRowColumn style={{fontSize: 16, width: 70}}>{candidate.score}</TableRowColumn>
        </TableRow>
      )
    }
    return (
      <div>
        <Table>
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn style={{fontSize: 16, width: 24}}>#</TableHeaderColumn>
              <TableHeaderColumn style={{fontSize: 16, width: '62%'}}>拟表彰内容</TableHeaderColumn>
              <TableHeaderColumn style={{fontSize: 16}}>报送部门</TableHeaderColumn>
              <TableHeaderColumn style={{fontSize: 16, width: 70}}>得票数</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody showRowHover={true} displayRowCheckbox={false}>
            {this.props.results.map(createCandidate)}
          </TableBody>
        </Table>
      </div>
    )
  }
}



class Stat extends React.Component {
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
          owner: '国内部',
          score: 43,
          isQualified: true
        },
        {
          id: 10002,
          title: '“‘十二五’回顾与‘十三五’开局看落实”全媒体调研报道',
          owner: '对外部',
          score: 23,
          isQualified: true
        },
        {
          id: 10003,
          title: '“东北区域改革”调研报道',
          owner: '黑龙江分社',
          score: 9,
          isQualified: false
        }
      ]
    })
  }
  render() {
    return (
      <div>
        <StatHeader name={this.state.planName} />
        <ResultsTable results={this.state.data} />
      </div>
    )
  }
}

export default Stat