import React from 'react'

import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

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
          <TableRowColumn style={{fontSize: 16, width: 24}}>
            {index + 1}
          </TableRowColumn>
          <TableRowColumn style={{fontSize: 16, width: '62%'}}>
            {candidate.title}
          </TableRowColumn>
          <TableRowColumn style={{fontSize: 16}}>
            {candidate.owner}
          </TableRowColumn>
          <TableRowColumn style={{fontSize: 16, width: 70}}>
            {candidate.score}
          </TableRowColumn>
        </TableRow>
      )
    }
    return (
      <div>
        <Table>
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn style={{fontSize: 16, width: 24}}>
                #
              </TableHeaderColumn>
              <TableHeaderColumn style={{fontSize: 16, width: '62%'}}>
                拟表彰内容
              </TableHeaderColumn>
              <TableHeaderColumn style={{fontSize: 16}}>
                报送部门
              </TableHeaderColumn>
              <TableHeaderColumn style={{fontSize: 16, width: 70}}>
                得票数
              </TableHeaderColumn>
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
      planName: ''
    }
  }

  componentDidMount() {
    this.setState({
      planName: '总编室第 52 次编务会通报表扬投票'
    })
  }
  render() {
    return (
      <div>
        <StatHeader name={this.state.planName} />
      </div>
    )
  }
}

export default Stat