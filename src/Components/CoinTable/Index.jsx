import React, { useEffect, useState } from 'react'
import Index from '../tableRow/Index'
import './Index.css'
import { getCoinsFirstPage } from '../../Service/getCoins'
import axios from 'axios'

const CoinTable = () => {
  const [data,setData] = useState([]);
  useEffect(()=>{
    getCoinsFirstPage().then(response=>{
      setData(response.data)
    })
  },[])



  return (
    <div id='table'>
      <div className='table__header'>
      <h2>Cyrpto Tracker Application</h2>
      <div className='table__header__search'>
        <input type="text" placeholder='Search by crypto name' onChange={(e)=>{
          axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${e.target.value}&order=market_cap_desc&per_page=100&page=1&sparkline=false`).then(res=>{
            setData([...res.data])
          })

          
        }}/>
        <i className="fa-solid fa-magnifying-glass-dollar"></i>
      </div>
      </div>
      <div className='table__main'>
        <table>
          <thead>
            <tr>
            <th>Rank</th>
            <th>Coin Name</th>
            <th>Price</th>
            <th>Price Change</th>
            <th>Market Cap</th>
            <th>Add to favourite</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item=>{
              return <Index key={item.id} rank={item.market_cap_rank} image={item.image} name={item.name} price={item.current_price} priceChange={item.price_change_percentage_24h} cap={item.market_cap}/>
            })}
            
           
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CoinTable