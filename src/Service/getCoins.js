import axios from "axios";
import {BASE_URL} from '../consts'

export const getCoinsFirstPage = () =>{
    return axios.get(`${BASE_URL}/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
}
export const getCoinsSecondPage = () =>{
    return axios.get(`${BASE_URL}/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=2&sparkline=false`)
}
export const getCoinsThirdPage = () =>{
    return axios.get(`${BASE_URL}/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=3&sparkline=false`)
}
export const getCoinsFourthPage = () =>{
    return axios.get(`${BASE_URL}/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=4&sparkline=false`)
}
export const getCoinsFifthPage = () =>{
    return axios.get(`${BASE_URL}/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=5&sparkline=false`)
}
export const getCoinsSixthPage = () =>{
    return axios.get(`${BASE_URL}/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=6&sparkline=false`)
}
export const getCoinsSeventhPage = () =>{
    return axios.get(`${BASE_URL}/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=7&sparkline=false`)
}
export const getCoinsEighthPage = () =>{
    return axios.get(`${BASE_URL}/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=8&sparkline=false`)
}
export const getCoinsNinthPage = () =>{
    return axios.get(`${BASE_URL}/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=9&sparkline=false`)
}
export const getCoinsTenthPage = () =>{
    return axios.get(`${BASE_URL}/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=10&sparkline=false`)
}