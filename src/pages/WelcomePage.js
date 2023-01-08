import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../images/hero-img9.png'
import './WelcomePage.css'

export default function WelcomePage() {
    return (
        <Fragment>

            <div className='hero'>
                <div className='hero-img__container'>
                    <img className='hero-img' src={heroImg} />
                </div>
                <div className='hero__text'>
                    <h1 className='hero__header'>Welcome to our cocktail recipe collection!</h1>
                    <p>We have a passion for creating delicious and creative cocktails, and we're excited to share our recipes with you. Our collection includes a wide range of classic and contemporary drinks, from refreshing summer sippers to rich and warming winter cocktails.</p>
                    <p>So why wait? Break out the shaker and get mixing! We hope our recipes inspire you to try new flavors and techniques, and to have fun experimenting in the kitchen. Cheers!</p>
                    <div className='hero__link'>
                        <Link to='/cocktails'>Go to Cocktails </Link>
                        <span className='link-arrow'>&rarr;</span>
                    </div>
                </div>
                {/* <p className='cocktails-page__text'>Whether you're a seasoned mixologist or just starting out, you'll find something to suit your skills and tastes. Our recipes include step-by-step instructions and all the ingredients you'll need to make each cocktail. We also offer tips and variations to help you customize your creations to your own preferences.</p> */}
            </div>
        </Fragment>
    )
}
