import React from 'react'

import PropTypes from 'prop-types'

const Gallery = (props) => {
  return (
    <>
      <div className="gallery-gallery">
        <h1 id="parts" className="gallery-gallery-heading heading2">
          {props.GalleryHeading}
        </h1>
        <span className="gallery-gallery-sub-heading">
          {props.GallerySubHeading}
        </span>
        <div className="gallery-container">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="gallery-image"
          />
        </div>
        <div className="gallery-container1">
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            className="gallery-image1"
          />
        </div>
        <div className="gallery-container2">
          <img
            alt={props.image_alt2}
            src={props.image_src2}
            className="gallery-image2"
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
          .gallery-container {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .gallery-image {
            width: 384px;
            height: 258px;
            object-fit: cover;
          }
          .gallery-container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .gallery-image1 {
            width: 457px;
            height: 254px;
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
            width: 396px;
            height: 253px;
            object-fit: cover;
          }
          @media (max-width: 1600px) {
            .gallery-image {
              width: 380px;
              height: 244px;
            }
            .gallery-image1 {
              width: 464px;
              height: 247px;
            }
            .gallery-image2 {
              width: 409px;
              height: 248px;
            }
          }
          @media (max-width: 1200px) {
            .gallery-image {
              width: 350px;
              height: 200px;
            }
            .gallery-image1 {
              width: 350px;
              height: 200px;
            }
            .gallery-image2 {
              width: 350px;
              height: 200px;
            }
          }
          @media (max-width: 991px) {
            .gallery-gallery-sub-heading {
              text-align: center;
            }
            .gallery-image {
              width: 279px;
              height: 131px;
            }
            .gallery-image1 {
              width: 260px;
              height: 123px;
            }
            .gallery-image2 {
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
            .gallery-image {
              width: 370px;
              height: 91px;
            }
            .gallery-image1 {
              width: 291px;
              height: 456px;
            }
            .gallery-image2 {
              width: 483px;
              height: 117px;
            }
          }
          @media (max-width: 479px) {
            .gallery-gallery {
              padding: var(--dl-space-space-unit);
            }
            .gallery-image {
              width: 350px;
              height: 200px;
            }
            .gallery-image1 {
              width: 350px;
              height: 246px;
            }
            .gallery-image2 {
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
  GalleryHeading: 'Our Partners',
  GallerySubHeading:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis.  Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.',
  image_src: '/1_0y89qcf-ncigqqxds1ch8g-300h.jpg',
  image_alt: 'image',
  image_src1: '/f7bla1hx0aar8ld-500h.jpg',
  image_alt1: 'image',
  image_src2: '/pancakeswap-cake3276-500w.jpg',
  image_alt2: 'image',
}

Gallery.propTypes = {
  GalleryHeading: PropTypes.string,
  GallerySubHeading: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src2: PropTypes.string,
  image_alt2: PropTypes.string,
}

export default Gallery
