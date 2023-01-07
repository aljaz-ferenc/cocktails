import React, {useEffect} from 'react'
import './Categories.css'

export default function Categories({ handleCategoryClick, category }) {

    // useEffect(() => {

    // }, [category])

    // function categoryActive (){
    //     if (category === )
    // }

    return (
        <div className='categories'>
            <button value='rum' className={category === 'rum' ? 'categories__button active' : 'categories__button'} onClick={handleCategoryClick}>rum</button>
            <button value='vodka' className={category === 'vodka' ? 'categories__button active' : 'categories__button'} onClick={handleCategoryClick}>vodka</button>
            <button value='cognac' className={category === 'cognac' ? 'categories__button active' : 'categories__button'} onClick={handleCategoryClick}>cognac</button>
            <button value='gin' className={category === 'gin' ? 'categories__button active' : 'categories__button'} onClick={handleCategoryClick}>gin</button>
            <button value='all' className={category === 'all' ? 'categories__button active' : 'categories__button'} onClick={handleCategoryClick}>all</button>
            <button value='favorites' className={category === 'favorites' ? 'categories__button active' : 'categories__button'} onClick={handleCategoryClick}>favorites</button>
        </div>
    )
}
