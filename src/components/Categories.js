import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Categories.css'

export default function Categories({ handleCategoryClick, category }) {
    const [mobile, setMobile] = useState(false)
    const [mobileClass, setMobileClass] = useState()

    useEffect(() => {
        closeMobileMenu()
    }, [])

    const openMobileMenu = function () {
        setMobile(true)
        setMobileClass('categories__buttons show')
    }

    const closeMobileMenu = function () {
        setMobile(false)
        setMobileClass('categories__buttons hide')
    }

    return (
        <div className='categories'>
            {mobile === false && <svg onClick={openMobileMenu} className='hamburger' fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
            </svg>}
            {mobile === true && <svg onClick={closeMobileMenu} className='close-hamburger' fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>}
            <div className={mobileClass}>
                <button onClickCapture={closeMobileMenu} value='vodka' className={category === 'vodka' ? 'categories__button active' : 'categories__button'} onClick={handleCategoryClick}>vodka</button>
                <button onClickCapture={closeMobileMenu} value='cognac' className={category === 'cognac' ? 'categories__button active' : 'categories__button'} onClick={handleCategoryClick}>cognac</button>
                <button onClickCapture={closeMobileMenu} value='gin' className={category === 'gin' ? 'categories__button active' : 'categories__button'} onClick={handleCategoryClick}>gin</button>
                <button onClickCapture={closeMobileMenu} value='rum' className={category === 'rum' ? 'categories__button active' : 'categories__button'} onClick={handleCategoryClick}>rum</button>
                <button onClickCapture={closeMobileMenu} value='non-alcoholic' className={category === 'non-alcoholic' ? 'categories__button active' : 'categories__button'} onClick={handleCategoryClick}>non-alcoholic</button>
                <button onClickCapture={closeMobileMenu} value='all' className={category === 'all' ? 'categories__button active' : 'categories__button'} onClick={handleCategoryClick}>all</button>
                <button onClickCapture={closeMobileMenu} value='favorites' className={category === 'favorites' ? 'categories__button active' : 'categories__button'} onClick={handleCategoryClick}>favorites</button>
                {mobile === true && <Link to='/' className='categories__button' onClickCapture={closeMobileMenu} >home</Link>}            
            </div>
        </div>
    )
}
