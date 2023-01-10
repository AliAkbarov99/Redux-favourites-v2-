import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFavourite } from '../../Redux/Slice/favourite'

const FavTable = () => {

  const dispatch = useDispatch()

  const delBtnStyle = {
    backgroundColor:"darkred",
    color:"white",
    padding:"10px 20px",
    border:"none",
    borderRadius:"5px",
    cursor:"pointer"
}

  const coins = useSelector(state=>state.favourite.coins)

  return (
    <div>
      <ul style={{marginLeft:"100px",width:"400px",background:"white",color:"black",marginTop:"20px",borderRadius:"5px"}}>
        {coins && coins.map(coin=>{
          return <li style={{fontWeight:"bold",color:"black",listStyleType:"none",display:"flex",justifyContent:"space-between",padding:"10px"}}>{coin.name}, ${coin.price} <button style={delBtnStyle} onClick={()=>{
            dispatch(deleteFavourite(coin.name))
          }} >Delete</button></li>
        })}
      </ul>
    </div>
  )
}

export default FavTable