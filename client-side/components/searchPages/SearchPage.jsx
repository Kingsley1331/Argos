import React from 'react'
import Item from '../Item/Item.jsx'
import './SearchPage.css'

const request = require('superagent')
const _ = require('lodash')

class SearchPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
      data: []
    }
  }
  updateSearch(searchText) {
    this.setState({ searchText });
  }

  componentDidMount() {
    request.get('/api/data', (err, res) => {
      const data = JSON.parse(res.text)
      this.setState({ data })
    })
  }

  render() {
    const { data } = this.state
    return (
      <center><h1> Argos Search Page </h1> <div>Filter by... Price, starRating and FastTrack...</div>
      <input className='searchInput'
        placeholder="Search for..."
        onChange={(event) => { this.updateSearch(event.target.value) }
      }/>
      {data.filter((details) => {
        let { searchText } = this.state
        let { attributes: { name, price, avgRating, fastTrack } } = details
        const starRatings = _.ceil(avgRating).toString()
        price = price.toString()
        searchText = searchText.toLowerCase()
        fastTrack = 'fasttrack'.includes(searchText) && fastTrack
        name = name.toLowerCase()
          return name.includes(searchText) || price.includes(searchText) || starRatings.includes(searchText) || fastTrack
      }).map((details, index) => {
        return <Item key={index} details={details} />
      })
      }
      </center>)
  }
}

export default SearchPage
