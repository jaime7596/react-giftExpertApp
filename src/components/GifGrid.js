import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';
// import {getGifs} from '../helpers/getGifs'

export const GifGrid = ({category, Categories}) => {
    const {data, loading} = useFetchGifs(category); 

    // console.log('Hola',state);
    // const [images, setImages] = useState([]);

    // useEffect( () => {
    //     getGifs(category).then(
    //         imgs => setImages(imgs)
    //     )
    // }, [])

    // const getGifs = async(category) => {
//         const url = `https://api.giphy.com/v1/gifs/search?q=${category}&api_key=fqtsIAEerELD64WRhMv5a8FhI4mZJdVJ`
//         const resp = await fetch(url)
//         const {data} = await resp.json();
//         const gifs  = data.map(img => {
//             return {
//                 id: img.id,
//                 title: img.title,
//                 url: img.images.downsized_medium.url
//             }
//         })
//         console.log(gifs);
// ;
//         setImages(gifs)
    // }

    // getGifs();


    return (
        <div className="cardGrid animate__animated animate__fadeIn">
            {loading && <p className="animate__animated animate__fadeIn">Loading</p>}
            <ol>
                    {
                        data.map(img => (
                            // <li key={img.id}>{img.title}</li>
                            <GifGridItem
                                key= { img.id} 
                                { ...img } 
                            />
                        ))
                    }
            </ol>
        </div>
    )
}
