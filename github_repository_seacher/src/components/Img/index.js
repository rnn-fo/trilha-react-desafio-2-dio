import React from 'react'
import { ImgContainer } from './styles'

export function Img({src,alt}) {
  return (
    <ImgContainer src={src} alt={alt}/>
  )
}
