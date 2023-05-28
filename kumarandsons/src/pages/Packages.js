import React from 'react'
import Card from '../components/Card'
import Search from '../components/Search'
import PackagesData from '../data/PackagesData.json'

const Packages = () => {
  return (
    <div>
      <Search placeholder='Search' data={PackagesData}></Search>
      {/* <Card src='https://images.unsplash.com/photo-1613425653628-23fd58c3c2b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80' title='Summer Package' desc='This 2day 1 night package is best for you and your other half'/> */}
    </div>
  )
}

export default Packages