import React, { Component } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  // InputBase,
  Button,
  List,
  ListItem,
  ListItemText,
  Paper
} from '@material-ui/core'
import { DateTime } from 'luxon'
import './App.css'

class App extends Component {
  state = {
    data: []
  }
  render () {
    return (
      <>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6' color='inherit' noWrap>
              Sports-App
            </Typography>
          </Toolbar>
        </AppBar>
        <Button variant='contained' color='secondary' onClick={this.fetchData}>
          Refresh
        </Button>
        <h2>{DateTime.local().toFormat('ccc d LLLL')}</h2>
        {this.state.data.map(league => (
          <>
            <h4>{league.name}</h4>
            <Paper>
              <List>
                {league.matches.map(match => (
                  <ListItem button>
                    <ListItemText
                      primary={
                        <>
                          <img src={match.home} alt='home' />
                          <span>{match.teams}</span>
                          <img src={match.away} alt='away' />
                        </>
                      }
                      secondary={match.time}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </>
        ))}
      </>
    )
  }
  fetchData = e => {
    fetch('http://localhost:5000/today')
      .then(res => res.json())
      .then(data => {
        this.setState({ data })
      })
  }

  componentDidMount () {
    this.fetchData()
  }
}

export default App
