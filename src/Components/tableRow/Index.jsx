import React from 'react'
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { useDispatch } from 'react-redux';
import { addFavourite } from '../../Redux/Slice/favourite';



const Index = ({rank,image,name,price,priceChange,cap}) => {

    const dispatch = useDispatch()

    const favBtnStyle = {
        backgroundColor:"darkred",
        color:"white",
        padding:"10px 20px",
        border:"none",
        borderRadius:"5px",
        cursor:"pointer"
    }

    const imgStyle = {
        witdh:"30px",
        height:"30px"
    }

    return (
        <tr>
            <td style={{fontSize:"18px"}}>{rank}</td>
            <td style={{display:"flex",alignItems:"center",gap:"5px"}}><img style={imgStyle} src={image} alt="" />{name}</td>
            <td style={{color:"#fc0",fontWeight:"bold"}}>${price}</td>
            <td style={{display:"flex",alignItems:"center",color:priceChange < 0 ? "red" : "green"}}>{priceChange}{priceChange < 0 ? <TrendingDownIcon/> : <TrendingUpIcon/> }</td>
            <td>${cap}</td>
            <td>
                <button style={favBtnStyle} onClick={()=>{
                    let newObj = {
                        name:name,
                        price:price
                    }
                    dispatch(addFavourite(newObj))
                }}>Favourite</button>
            </td>
        </tr>
    )
}

export default Index