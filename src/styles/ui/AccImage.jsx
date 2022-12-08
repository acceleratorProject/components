import React, { cloneElement, useCallback } from 'react'
import styled from '@emotion/styled'


const PROPS_SHOULD_NOT_BE_PASSED_TO_DOM = ['width', 'height', 'aspectRatio']


const ImageWrapper = styled('div', {
  shouldForwardProp: (prop) => !PROPS_SHOULD_NOT_BE_PASSED_TO_DOM.includes(prop)
})`
  position: relative;
  overflow: hidden;
  aspect-ratio: ${({ aspectRatio }) => aspectRatio};
  width: ${({ width }) => width};
  height: ${({ height }) => height}; 
`


const Image = styled('img', {
  shouldForwardProp: (prop) => !PROPS_SHOULD_NOT_BE_PASSED_TO_DOM.includes(prop)
})`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

const AccImage = ({ children, src, width, height, aspectRatio, ...rest }) => {
  const [ratioHeight, ratioWidth] = aspectRatio ? aspectRatio.split(':') : [undefined, undefined]

  const getWidht = useCallback(() => {
    if (width) return width
    if (height && ratioWidth && ratioHeight) {
      const ratio = Number(ratioHeight) / Number(ratioWidth);
      return width || (height || 1) * Number(ratio)
    }
    return undefined
  }, [width, height, ratioHeight, ratioWidth])

  const getHeight = useCallback(() => {
    if (height) return height
    if (width && ratioHeight && ratioWidth) {
      const ratio = Number(ratioHeight) / Number(ratioWidth);
      return height || (width || 1) * Number(ratio)
    }
    return undefined
  }, [width, height, ratioHeight, ratioWidth])

  return (
    <ImageWrapper
      width={getWidht()}
      height={getHeight()}
      {...(aspectRatio && { aspectRatio: `${ratioHeight} / ${ratioWidth}` })}
    >
      <Image src={src} {...rest} />
      {children && cloneElement(children, {
        style: { position: 'absolute', ...children.props.style }
      })}
    </ImageWrapper>
  )
}

export default AccImage