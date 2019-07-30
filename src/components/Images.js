import React from 'react'
import AbtLogo from '../images/logo/logo-gray.png'
import HomeImg from '../images/site/home.png'

import Minion404Img from '../images/site/minion404.jpg'
import MovementTherapyImg from '../images/site/daniel-molly-rossberg-sally-hart.jpg'
import SummerPoster from '../images/site/website-summer-image.jpg'
import HomeBtn1Img from '../images/site/home-btn1.png'
import HomeBtn2Img from '../images/site/home-btn2.png'
import HomeBtn3Img from '../images/site/home-btn3.png'
import HomeBtn4Img from '../images/site/home-btn4.png'
import IphoneImg from '../images/site/iphone.png'

/* eslint-disable max-len */
export const Logo = () => <img className="logo-image" src={AbtLogo} alt="abt logo" />
export const Minion404 = () => <img src={Minion404Img} alt="Minion 404" title="Minion 404" />
export const HomeImage = () => <img className="home-image" src={HomeImg} alt="Home Page" />

export const MovementTherapyImage = () => (
  <img src={MovementTherapyImg} alt="Movement Therapy Classes" title="Movement Therapy Classes" />
)
export const SummerPosterImage = () => (
  <img src={SummerPoster} alt="summerperformance poster" title="summer performance poster" />
)

export const HomeBtn1 = () => (
  <img src={HomeBtn1Img} alt="New Classes Link" title="New Classes Link" />
)
export const HomeBtn2 = () => <img src={HomeBtn2Img} alt="Calendar Link" title="Calendar Link" />
export const HomeBtn3 = () => (
  <img src={HomeBtn3Img} alt="Performances Link" title="Performancesses Link" />
)
export const HomeBtn4 = () => <img src={HomeBtn4Img} alt="Handbook Link" title="Handbook Linknk" />

export const IphoneImage = () => <img src={IphoneImg} alt="iPhone icon" title="iPhone icon" />
