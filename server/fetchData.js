const h2t = require('html2plaintext')
const { JSDOM } = require('jsdom')

module.exports = function () {
  return JSDOM.fromURL('https://www.theguardian.com/football/fixtures').then(
    dom => {
      const { window } = dom
      const { document } = window

      const rawleagues = document.querySelectorAll(
        'table.table.table--football.football-matches.table--responsive-font'
      )
      const leagues = Array.from(rawleagues, league => {
        const caption = league.querySelector('caption')
        const name = caption.querySelector('a').innerHTML
        const date = caption.querySelector('span').innerHTML
        const matches = Array.from(
          league.querySelectorAll('tbody tr'),
          match => {
            const [rtime, rhome, rteams, raway] = [
              ...match.querySelectorAll('td')
            ]
            const time = h2t(rtime.innerHTML)
            const teams = h2t(rteams.querySelector('a').innerHTML).replace(
              /\s{6}/,
              ' vs '
            )
            const home = rhome.querySelector('img').src
            const away = raway.querySelector('img').src
            return { time, home, away, teams }
          }
        )
        return { _id: date + name, name, date, matches }
      })
      return leagues
    }
  )
}
