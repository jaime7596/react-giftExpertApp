import React, {useState} from 'react';
import {AddCategory} from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    // const categories = ['Dragon Ball', 'Naruto', 'One Piece']
    const [categories, setCategories] = useState(['Naruto']);

    // const handledAdd = () => {
    //     setCategory([...categories, 'One Push Man'])
    // }
    return (
        <>
            <h2>Gif Expert</h2>
            <AddCategory setCategories={ setCategories } Categories={categories} />
            <hr/>
            {/* <button onClick={handledAdd  }>+Agregar</button> */}
            <ol>
                {
                    categories.map(category => (
                        <GifGrid category= {category} Categories={categories} />
                    ))
                }
            </ol>
        </>
    )
}
