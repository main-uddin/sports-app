import React, { Component } from 'react'
import { AppBar, Toolbar, Typography, List, ListItem, ListItemText, Paper, IconButton } from '@material-ui/core'
import { Refresh } from '@material-ui/icons'
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
          <Toolbar className='app-toolbar'>
            <Typography variant='h6' color='inherit'>
              Sports-App
            </Typography>
            <IconButton onClick={this.fetchData} color='inherit'>
              <Refresh />
            </IconButton>
          </Toolbar>
        </AppBar>
        <h2>{DateTime.local().toFormat('ccc d LLLL')}</h2>
        {this.state.data.map(league => (
          <>
            <h4 className='leaguename'>{league.name}</h4>
            <Paper>
              <List>
                {league.matches.map(match => (
                  <ListItem button>
                    <ListItemText
                      className='match'
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
