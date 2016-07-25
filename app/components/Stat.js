import React from 'react'
import { List, ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider'
import LinearProgress from 'material-ui/LinearProgress'
import { red500, blue500, grey400, transparent } from 'material-ui/styles/colors'

const styles = {
  header: {
    margin: 24
  },
  title: {
    width: '80%'
  },
  bar: {
    height: 5,
    width: '80%',
    marginTop: 10
  },
  score: {
    marginRight: 60
  }
}


class StatHeader extends React.Component {
  render() {
    let title = this.props.name + '（' + ['预选', '第一轮', '第二轮', '第三轮'][this.props.round] + '）投票结果'
    return (
      <h2 style={styles.header}>{title}</h2>
    )
  }
}

class ResultsRankBox extends React.Component {
  render() {
    let createItem = (item, index) => {
      return (
        <div key={index}>
          <Divider />
          <ListItem
            disabled={true}
            leftAvatar={
              <Avatar color={grey400} backgroundColor={transparent}>{index + 1}</Avatar>
            }
            rightAvatar={
              <Avatar backgroundColor={item.isQualified?blue500:grey400} style={styles.score}>{item.score}</Avatar>
            }
            primaryText={
              <div style={styles.title}>{item.title}</div>
            }
            secondaryText={
              <LinearProgress mode="determinate" color={red500} style={styles.bar} value={item.score} />
            }
          />
        </div>
      )
    }
    return (
      <div>
        <List>
          {this.props.results.map(createItem)}
        </List>
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
          score: 23,
          isQualified: true
        },
        {
          id: 10001,
          title: '“东北区域改革”调研报道',
          score: 23,
          isQualified: true
        },
        {
          id: 10001,
          title: '第二届世界互联网大会系列报道报道',
          score: 18,
          isQualified: true
        },
        {
          id: 10002,
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