import React from 'react'
import './MovingIcon.scss'

interface Props{
	src: string,
	className: string,
	position: React.CSSProperties
}

const MovingIcon:React.FC<Props> = ({src, className, position}) => {
  return (
	<img src={src} alt="" className={className} style={position}/>
  )
}

export default MovingIcon