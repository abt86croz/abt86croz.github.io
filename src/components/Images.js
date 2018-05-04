import React from 'react'
import AbtLogo from '../images/abt-logo.png'
import SallyImg from '../images/site/sally.jpg'
import AshleyImg from '../images/site/ashley.jpg'
import VeronicaImg from '../images/site/veronica.jpg'
import AmandaImg from '../images/site/amanda.jpg'
import Minion404Img from '../images/site/minion404.jpg'
import SpecialNeedsImg from '../images/site/daniel-molly-rossberg-sally-hart.jpg'
import SpringPerformanceImg from '../images/performances/piedpiper-compressed.jpg'
import SummerPoster from '../images/performances/SummerGazetteAd2018.jpg'

/* eslint-disable max-len */
export const Logo = () => <img className="logo-image" src={AbtLogo} alt="abt logo" />
export const SallyImage = () => <img src={SallyImg} alt="Sally Hart" title="Sally Hart" />
export const VeronicaImage = () => <img src={VeronicaImg} alt="Veronica Piller" title="Sally Hart" />
export const AshleyImage = () => <img src={AshleyImg} alt="Ashley Geisler" title="Ashley Geisler" />
export const AmandaImage = () => <img src={AmandaImg} alt="Amanda Jo Parks" title="Amanda Jo Parks" />
export const Minion404 = () => <img src={Minion404Img} alt="Minion 404" title="Minion 404" />
export const SpecialNeedsImage = () => <img src={SpecialNeedsImg} alt="special needs classes" title="special needs classes" />
export const SpringPerformanceImage = () => <img src={SpringPerformanceImg} alt="spring performance poster" title="spring performance poster" />
export const SummerPosterImage = () => <img src={SummerPoster} alt="summerperformance poster" title="summer performance poster" />
