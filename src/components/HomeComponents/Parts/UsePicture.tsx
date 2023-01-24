import React from 'react'

interface Props {
  url: string
  alt?: string
  width: number
  heigth: number
}

export const UsePicture: React.FC<Props> = ({ url, alt, width, heigth }) => {
  return (
    <img
      className="rounded-full"
      src={url}
      alt={alt}
      width={width}
      height={heigth}/>
  )
}