import { useEffect, useState } from "react"
import { ResqApi } from "../../api/api"
import { AlbumType } from "../../types/albumType"
import {useParams,useNavigate} from 'react-router-dom'
import {} from  './Album.css'
import {Link} from 'react-router-dom'

export const Album = ()=>{
    const [album,setAlbum] = useState<AlbumType[]>([])
    const [loading,setLoading] = useState <boolean>(false)
    const [albumName,setAlbumName] = useState<string> ('')
    
    const params = useParams()
    const navigate = useNavigate()
    
    const id = params.id

    useEffect (()=>{
        getAlbum(id)
        getAlbumname(id)
    },[id])

    const getAlbum = async (id:string | undefined)=>{
        if(id !==undefined){
            setLoading(true)
            let newAlbum = await ResqApi(`/albums/${id}/photos`)
            setLoading(false)
            setAlbum(newAlbum)
        }    
    }
   
   const getAlbumname = async (id:string | undefined)=>{
        if(id !==undefined){
            let newAlbumName = await ResqApi(`/albums/${id}`)
            setAlbumName(newAlbumName.title)
        }    
    }

    const backPage = ()=>{
        navigate(-1)
    }

    return(
        <div className="contanier">
           
           <button onClick={backPage}>Volta</button>
           <h2>{albumName}</h2>
           
            {loading&& 
                <div>Aguarde...</div>
            }
            
            {!album &&
                <div>Erro na pagina tente novamente</div>
            }
            
            {album&&
                <div className="area-photos" >
                    {album.map((item,index)=>(
                        <Link key={index} to={`/photo/${item.id}`}>
                            <div className='photos'>
                                <img src={item.thumbnailUrl}alt="" />
                            </div>
                        </Link>   
                    ))}
                </div>                 
            }
        </div>
   )
}