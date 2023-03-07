const houses = require('../server/db.json')
let globalId = 4
module.exports = {
  getAllHouses: (req, res) => {
    res.status(200).send(houses)
  },

  deleteHouse: (req, res) => {
    const { id } = req.params
    const idx = houses.findIndex( house => house.id === +id)
    if (idx >= 0 ){
      houses.splice(idx, 1)
      res.status(200).send(houses)
    }
  },

  createHouse: (req, res) => {
    let { address, price, imageURL } = req.body
    let newHouse = {
      id: globalId,
      address,
      price,
      imageURL
    }
    houses.push(newHouse)
    globalId++
    res.status(200).send(houses)
  },

  updateHouse: (req, res) => {
    let { id } = req.params
    let { type } = req.body
    const idx = houses.findIndex(house => house.id === +id)
    if(type === 'plus'){
      houses[idx].price += 10000
      res.status(200).send(houses)
    } else {
      houses[idx].price -= 10000
      res.status(200).send(houses)
    }
  }
}