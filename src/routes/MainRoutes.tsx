import {useRoutes} from 'react-router-dom'
import { HomeAlbums } from '../components/homeAlbums/HomeAlbums'
import { NoFound } from '../components/noFound/NoFound'
import { Album } from '../components/album/Album'
import { PhotoCp } from '../components/photo/PhotoCp'


export const MainRoutes = ()=>{
    return useRoutes ([
        {path:'/',element : <HomeAlbums/>},
        {path:`/album/:id`,element : <Album/>},
        {path:`/photo/:id`,element : <PhotoCp/>},
        {path:'*',element : <NoFound/>},
    ])
}