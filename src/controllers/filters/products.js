import products from "../../products"

export default {
    lowToHigh: function () {
      products.sort((a, b) => (a.price > b.price ? 1 : -1))
    },
    highToLow: function () {
      products.sort((a, b) => (a.price < b.price ? 1 : -1))
    }
  }