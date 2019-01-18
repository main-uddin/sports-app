// const { JSDOM } = require('jsdom')

// module.exports = function () {
//   return JSDOM.fromURL(
//     'https://www.transfermarkt.com/statistik/goldenerschuh'
//   ).then(dom => {
//     const { window } = dom
//     const { document } = window

//     const items = document.querySelectorAll('table.items tbody > tr')
//     const players = Array.from(items, item => {
//       const td = [...item.querySelectorAll('td')]
//       const [_rank, _player, _age, _nat, _club, _goal, _, _points] = td
//       // const rank = _rank.innerHTML
//       // const {src: plimg, title: plname} = _player.querySelector('img')
//       console.log(_player.innerHTML)
//       // const plpos = _player.querySelector('tr:nth-child(2) > td').innerHTML
//       return _player
//     })
//   })
// }
