import { useEffect, useState } from "react"
import { ResqApi } from "../../api/api"
import { AlbumsType } from "../../types/albumType"
import {} from './HomeAlbums.css'
import {Link} from 'react-router-dom'

export const HomeAlbums = ()=>{
    const [albums,setAlbums] = useState<AlbumsType[]>([])
    const [loading,setLoading] = useState <boolean>(false)
    
    useEffect (()=>{
        getAlbums()
    },[])

    const getAlbums = async ()=>{
        setLoading(true)
        let newAlbum = await ResqApi('/albums')
        setLoading(false)
        setAlbums(newAlbum)
    }

    return (
        <div className="area-albums">
            {loading &&
            <div>Aguarde... </div>
            }
            {!albums &&
            <div>Erro na pagina tente novamente</div>
            }
           {albums &&
                albums.map((item,index)=>(
               <Link key={index} to={`/album/${item.id}`}><div className='albums' >{item.title}</div></Link> 
           ))}
        </div>
    )
}