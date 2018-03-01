import React from 'react';
import "./styles/PhotoGallery.css";
import Gallery from 'react-grid-gallery';
import img1 from "../images/gallery/1.jpg";
import img2 from "../images/gallery/2.jpg";
import img3 from "../images/gallery/3.jpg";
import img4 from "../images/gallery/4.jpg";
import img5 from "../images/gallery/5.jpg";
import img6 from "../images/gallery/6.jpg";
import img7 from "../images/gallery/7.jpg";
import img8 from "../images/gallery/8.jpg";
import img9 from "../images/gallery/9.jpg";
import img10 from "../images/gallery/10.jpg";
import img11 from "../images/gallery/11.jpg";
import img12 from "../images/gallery/12.jpg";
import img13 from "../images/gallery/13.jpg";
import img14 from "../images/gallery/14.jpg";
import img15 from "../images/gallery/15.jpg";
import img16 from "../images/gallery/16.jpg";
import img17 from "../images/gallery/17.jpg";
import img18 from "../images/gallery/18.jpg";
import img19 from "../images/gallery/19.jpg";
import img20 from "../images/gallery/20.jpg";
import img21 from "../images/gallery/21.jpg";
import img22 from "../images/gallery/22.jpg";
import img23 from "../images/gallery/23.jpg";
import img24 from "../images/gallery/24.jpg";
import img25 from "../images/gallery/25.jpg";
import img26 from "../images/gallery/26.jpg";
import img27 from "../images/gallery/27.jpg";
import img28 from "../images/gallery/28.jpg";
import img29 from "../images/gallery/29.jpg";
import img30 from "../images/gallery/30.jpg";
import img31 from "../images/gallery/31.jpg";
import img32 from "../images/gallery/32.jpg";

const IMAGES = [{
    src: img1,
    thumbnail: img1,
    thumbnailWidth: 400,
    thumbnailHeight: 300,
    caption: 'image 1'
},
{
    src: img2,
    thumbnail: img2,
    thumbnailWidth: 400,
    thumbnailHeight: 300,
    caption: 'image 2'
},

{
    src: img3,
    thumbnail: img3,
    thumbnailWidth: 400,
    thumbnailHeight: 300,
    caption: 'image 3'
},
{
    src: img4,
    thumbnail: img4,
    thumbnailWidth: 400,
    thumbnailHeight: 300,
    caption: 'image 4'
},
{
    src: img5,
    thumbnail: img5,
    thumbnailWidth: 400,
    thumbnailHeight: 300,
    caption: 'image 5'
},
{
    src: img6,
    thumbnail: img6,
    thumbnailWidth: 400,
    thumbnailHeight: 300,
    caption: 'image 6'
},
{
    src: img7,
    thumbnail: img7,
    thumbnailWidth: 400,
    thumbnailHeight: 300,
    caption: 'image 7'
},
{
    src: img8,
    thumbnail: img8,
    thumbnailWidth: 400,
    thumbnailHeight: 300,
    caption: 'image 8'
},
{
    src: img9,
    thumbnail: img9,
    thumbnailWidth: 400,
    thumbnailHeight: 400,
    caption: 'image 9'
},
{
    src: img10,
    thumbnail: img10,
    thumbnailWidth: 400,
    thumbnailHeight: 300,
    caption: 'image 10'
},
{
    src: img11,
    thumbnail: img11,
    thumbnailWidth: 400,
    thumbnailHeight: 400,
    caption: 'image 11'
},
{
    src: img12,
    thumbnail: img12,
    thumbnailWidth: 400,
    thumbnailHeight: 300,
    caption: 'image 12'
},
{
    src: img13,
    thumbnail: img13,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    caption: 'image 13'
},
{
    src: img14,
    thumbnail: img14,
    thumbnailWidth: 400,
    thumbnailHeight: 300,
    caption: 'image 14'
},
{
    src: img15,
    thumbnail: img15,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    caption: 'image 15'
},
{
    src: img16,
    thumbnail: img16,
    thumbnailWidth: 400,
    thumbnailHeight: 300,
    caption: 'image 16'
},
{
    src: img17,
    thumbnail: img17,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    caption: 'image 17'
},
{
    src: img18,
    thumbnail: img18,
    thumbnailWidth: 500,
    thumbnailHeight: 500,
    caption: 'image 18'
},
{
    src: img19,
    thumbnail: img19,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    caption: 'image 19'
},
{
    src: img20,
    thumbnail: img20,
    thumbnailWidth: 400,
    thumbnailHeight: 300,
    caption: 'image 20'
},
{
    src: img21,
    thumbnail: img21,
    thumbnailWidth: 400,
    thumbnailHeight: 300,
    caption: 'image 21'
},
{
    src: img22,
    thumbnail: img22,
    thumbnailWidth: 400,
    thumbnailHeight: 300,
    caption: 'image 22'
},
{
    src: img23,
    thumbnail: img23,
    thumbnailWidth: 400,
    thumbnailHeight: 300,
    caption: 'image 23'
}, {
    src: img24,
    thumbnail: img24,
    thumbnailWidth: 400,
    thumbnailHeight: 300,
    caption: 'image 24'
}, {
    src: img25,
    thumbnail: img25,
    thumbnailWidth: 400,
    thumbnailHeight: 300,
    caption: 'image 25'
},
{
    src: img26,
    thumbnail: img26,
    thumbnailWidth: 400,
    thumbnailHeight: 300,
    caption: 'image 26'
},
{
    src: img27,
    thumbnail: img27,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    caption: 'image 27'
},
{
    src: img28,
    thumbnail: img28,
    thumbnailWidth: 400,
    thumbnailHeight: 300,
    caption: 'image 28'
},
{
    src: img29,
    thumbnail: img29,
    thumbnailWidth: 400,
    thumbnailHeight: 300,
    caption: 'image 29'
},
{
    src: img30,
    thumbnail: img30,
    thumbnailWidth: 400,
    thumbnailHeight: 300,
    caption: 'image 30'
},
{
    src: img31,
    thumbnail: img31,
    thumbnailWidth: 400,
    thumbnailHeight: 300,
    caption: 'image 31'
},
{
    src: img32,
    thumbnail: img32,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    caption: 'image 32'
}
];

const PhotoGallery = () => (
    <div className="photo-gallery-container">
        <Gallery images={IMAGES} />
    </div>
)

export default PhotoGallery;

