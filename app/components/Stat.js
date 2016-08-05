import React from 'react'

import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import { red500, blue500, grey400, transparent } from 'material-ui/styles/colors'

import io from 'socket.io-client'

class StatHeader extends React.Component {
  render() {
    let title = this.props.name + '（' + ['预选', '第一轮', '第二轮', '第三轮'][this.props.round] + '）投票结果'
    return (
      <h2 style={{margin: 24}}>{title}</h2>
    )
  }
}

class ResultsRankBox extends React.Component {
  render() {
    let createItem = (item, index) => {
      return (
        <TableRow key={index}>
          <TableRowColumn style={{fontSize: 16, width: 24}}>{index + 1}</TableRowColumn>
          <TableRowColumn style={{fontSize: 16}}>{item.title}</TableRowColumn>
          <TableRowColumn style={{fontSize: 16, width: 64, color: blue500}}>{item.score}</TableRowColumn>
        </TableRow>
      )
    }
    return (
      <div>
        <Table>
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn style={{fontSize: 16, width: 24}}>#</TableHeaderColumn>
              <TableHeaderColumn style={{fontSize: 16}}>拟表彰内容</TableHeaderColumn>
              <TableHeaderColumn style={{fontSize: 16, width: 64}}>得票数</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody showRowHover={true} displayRowCheckbox={false}>
            {this.props.results.map(createItem)}
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
      resultsRank: []
    }
  }

  componentDidMount() {
    this.setState({
      planName: '总编室第 52 次编务会通报表扬投票',
      currentRound: 1,
      resultsRank: [
        {
          id: 10001,
          title: '第二届世界互联网大会系列报道报道',
          score: 43,
          isQualified: true
        },
        {
          id: 10002,
          title: '“‘十二五’回顾与‘十三五’开局看落实”全媒体调研报道',
          score: 23,
          isQualified: true
        },
        {
          id: 10003,
          title: '“东北区域改革”调研报道',
          score: 9,
          isQualified: false
        }
      ]
    })
  }
  render() {
    return (
      <div>
        <StatHeader name={this.state.planName} round={this.state.currentRound} />
        <ResultsRankBox results={this.state.resultsRank} />
      </div>
    )
  }
}

export default Stat