import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Gallery = (props) => {
  return (
    <>
      <div className="gallery-gallery">
        <h1 id="parts" className="gallery-gallery-heading heading2">
          {props.galleryHeading}
        </h1>
        <span className="gallery-gallery-sub-heading">
          {props.gallerySubHeading}
        </span>
        <div className="gallery-container1">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="gallery-image1"
          />
        </div>
        <div className="gallery-container2">
          <img
            alt={props.imageAlt1}
            src={props.imageSrc1}
            className="gallery-image2"
          />
        </div>
        <div className="gallery-container3">
          <img
            alt={props.imageAlt2}
            src={props.imageSrc2}
            className="gallery-image3"
          />
        </div>
      </div>
      <style jsx>
        {`
          .gallery-gallery {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
          }
          .gallery-gallery-heading {
            text-align: center;
            font-family: 'Raleway';
            line-height: 1.6;
          }
          .gallery-gallery-sub-heading {
            color: rgb(153, 153, 153);
            text-align: center;
            line-height: 1.6;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
          }
          .gallery-container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .gallery-image1 {
            width: 384px;
            height: 258px;
            object-fit: cover;
          }
          .gallery-container2 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .gallery-image2 {
            width: 457px;
            height: 254px;
            object-fit: cover;
          }
          .gallery-container3 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .gallery-image3 {
            width: 396px;
            height: 253px;
            object-fit: cover;
          }
          @media (max-width: 1600px) {
            .gallery-image1 {
              width: 380px;
              height: 244px;
            }
            .gallery-image2 {
              width: 464px;
              height: 247px;
            }
            .gallery-image3 {
              width: 409px;
              height: 248px;
            }
          }
          @media (max-width: 1200px) {
            .gallery-image1 {
              width: 350px;
              height: 200px;
            }
            .gallery-image2 {
              width: 350px;
              height: 200px;
            }
            .gallery-image3 {
              width: 350px;
              height: 200px;
            }
          }
          @media (max-width: 991px) {
            .gallery-gallery-sub-heading {
              text-align: center;
            }
            .gallery-image1 {
              width: 279px;
              height: 131px;
            }
            .gallery-image2 {
              width: 260px;
              height: 123px;
            }
            .gallery-image3 {
              width: 241px;
              height: 125px;
            }
          }
          @media (max-width: 767px) {
            .gallery-gallery {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .gallery-gallery-sub-heading {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .gallery-image1 {
              width: 370px;
              height: 91px;
            }
            .gallery-image2 {
              width: 291px;
              height: 456px;
            }
            .gallery-image3 {
              width: 483px;
              height: 117px;
            }
          }
          @media (max-width: 479px) {
            .gallery-gallery {
              padding: var(--dl-space-space-unit);
            }
            .gallery-image1 {
              width: 350px;
              height: 200px;
            }
            .gallery-image2 {
              width: 350px;
              height: 246px;
            }
            .gallery-image3 {
              width: 350px;
              height: 200px;
            }
          }
        `}
      </style>
    </>
  )
}

Gallery.defaultProps = {
  imageSrc2: '/pancakeswap-cake3276-500w.jpg',
  imageSrc: '/1_0y89qcf-ncigqqxds1ch8g-300h.jpg',
  imageAlt2: 'image',
  imageSrc1: '/f7bla1hx0aar8ld-500h.jpg',
  galleryHeading: 'Our Partners',
  imageAlt: 'image',
  gallerySubHeading:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis.  Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.',
  imageAlt1: 'image',
}

Gallery.propTypes = {
  imageSrc2: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt2: PropTypes.string,
  imageSrc1: PropTypes.string,
  galleryHeading: PropTypes.string,
  imageAlt: PropTypes.string,
  gallerySubHeading: PropTypes.string,
  imageAlt1: PropTypes.string,
}

export default Gallery
