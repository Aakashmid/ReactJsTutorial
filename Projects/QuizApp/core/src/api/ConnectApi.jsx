import axios from 'axios'
import { useEffect, useState } from 'react'

export default function CollectData(url) {
    const [fetch, setFetching] = useState({ isFetching: false })
    const [apiurl] = useState(url)
    const [dataState,setDataState]=useState({data:[]})  // store data of api after getting data
    useEffect(() => {
        const fetchDataFromApi = async () => {
            try{
                setFetching({isFetching:true})
                const response =await axios.get(apiurl)
                setDataState({...dataState,data:response.data})
            }
            catch (e){
                setFetching({...fetch,isFetching:true})
            }
        }

        fetchDataFromApi();
    },[])


    return [dataState]
}
