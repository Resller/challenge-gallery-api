import {useParams,useNavigate} from 'react-router-dom'
import { useEffect, useState } from "react"
import { ResqApi } from "../../api/api"


export const PhotoCp = ()=>{

    const [photoUrl,setPhotoUrl] = useState<string>('')
    const [photoTitle,setPhotoTitle] = useState<string>('')
    const [loadingPhoto,setLoadingPhoto] = useState <boolean>(false)
    
    const navigatePhoto = useNavigate()
    const paramsPhoto = useParams()
    
    const idPhoto = paramsPhoto.id
    
    useEffect(()=>{
        getPhoto(idPhoto);
    },[])
    

    const getPhoto = async (id:string | undefined)=>{
        if(id !==undefined){
            setLoadingPhoto(true)
            let newPhoto = await ResqApi(`/photos/${id}`)
            setLoadingPhoto(false)
            setPhotoTitle(newPhoto.title);
            setPhotoUrl(newPhoto.url)
        }               
    }
    const backPagePhoto = ()=>{
        navigatePhoto(-1)
    }

    return(
        <div className="contanier">
           
           <button onClick={backPagePhoto}>Volta</button>
            <h2 >{photoTitle}</h2>
          
            {!photoUrl &&
                <div>Erro na pagina tente novamente</div>
            }

            {loadingPhoto&& 
                <div>Aguarde...</div>
            }
            {photoUrl&&
                <div className='photo-area'>
                  <img src={photoUrl} alt="" />
                </div>
            }
        </div>
    )
}