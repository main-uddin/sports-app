const Express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const PouchDB = require('pouchdb')
const { DateTime } = require('luxon')

const fetchData = require('./fetchData')

const app = new Express()
app.use(cors())
app.use(bodyparser.json())

const db = new PouchDB('./db/matches')

app.get('/today', function (req, res) {
  const today = DateTime.local().toFormat('ccc d LLLL')

  db.allDocs({
    include_docs: true,
    startkey: today,
    endkey: today + '\ufff0'
  })
    .then(function (result) {
      res.json(result.rows.map(r => r.doc))
    })
    .catch(function (err) {
      console.log(err)
    })
})

app.listen(5000, function () {
  console.log('Listening on http://localhost:5000')
  fetchData()
    .then(leagues => db.bulkDocs(leagues))
    .then(() => {
      console.log('Saved data to db')
    })
    .catch(e => {
      console.log('Failed to fetch data')
    })
})
