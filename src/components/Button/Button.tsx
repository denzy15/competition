import './Button.scss'

const Button: React.FC<{content: string}> = ({content}) => {
	return <button className='btn'>{content}</button>
}

export default Button;