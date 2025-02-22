import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const GalleryCard3 = (props) => {
  return (
    <>
      <div className={`gallery-card3-gallery-card ${props.rootClassName} `}>
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="gallery-card3-image"
        />
      </div>
      <style jsx>
        {`
          .gallery-card3-gallery-card {
            width: 100%;
            height: 300px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .gallery-card3-image {
            top: -6px;
            left: -8px;
            width: 100%;
            height: 300px;
            position: absolute;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
          }
        `}
      </style>
    </>
  )
}

GalleryCard3.defaultProps = {
  imageAlt: 'image',
  imageSrc:
    'https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fG1pbmltYWxpc20lMjBjb3VjaHxlbnwwfHx8fDE2MjY0NDg1NTk&ixlib=rb-1.2.1&w=1500',
  rootClassName: '',
}

GalleryCard3.propTypes = {
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default GalleryCard3
