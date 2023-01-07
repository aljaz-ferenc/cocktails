import React from 'react'
import './Categories.css'

export default function Categories({ handleCategoryClick }) {
    return (
        <div className='categories'>
            <button value='rum' className='categories__button' onClick={handleCategoryClick}>rum</button>
            <button value='vodka' className='categories__button' onClick={handleCategoryClick}>vodka</button>
            <button value='cognac' className='categories__button' onClick={handleCategoryClick}>cognac</button>
            <button value='gin' className='categories__button' onClick={handleCategoryClick}>gin</button>
            <button value='all' className='categories__button' onClick={handleCategoryClick}>all</button>
            <button value='favorites' className='categories__button' onClick={handleCategoryClick}>favorites</button>
        </div>
    )
}
