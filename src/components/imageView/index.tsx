import React, { FC, useState } from 'react'
import styled from 'styled-components'
import WindowHeader from 'components/windowHeader'
import colors from 'styles/colors'
import plusIcon from 'assets/icons/plus.png'
import minusIcon from 'assets/icons/minus.png'

type TProps = {
	onClose: () => void
	src: string
}

const ImageView: FC<TProps> = ({ onClose, src }) => {
	const [scale, setScale] = useState(70)
	const scaleUp = () => setScale(prevState => prevState + 5)
	const scaleDown = () => setScale(prevState => prevState - 5)

	return (
		<Container>
			<WindowHeader onClose={onClose} />
			<Content>
				<Image src={src} alt='image' $scale={scale} />
			</Content>
			<Scale>
				<ButtonPlus onClick={scaleUp} />
				<ButtonMinus onClick={scaleDown} />
			</Scale>
		</Container>
	)
}

export default ImageView

const Container = styled.div`
	display: flex;
	flex-direction: column;
	position: fixed;
	top: 40px;
	right: 40px;
	bottom: 40px;
	left: 40px;
	border-radius: 8px;
`
const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-grow: 1;
	background-color: ${colors.primaryBackground};
	overflow: auto;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
`
const Image = styled.img<{ $scale: number }>`
	width: ${props => props.$scale}%;
`
const Scale = styled.div`
	position: absolute;
	top: 100px;
	right: 50px;
	display: flex;
	flex-direction: column;
`
const Button = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #dadada;
	width: 30px;
	height: 30px;
	border-radius: 50%;
	padding: 5px;
	margin-bottom: 10px;
	cursor: pointer;
	background-position: center;
	background-repeat: no-repeat;
	background-size: 20px 20px;
`
const ButtonPlus = styled(Button)`
	background-image: url(${plusIcon});
`
const ButtonMinus = styled(Button)`
	background-image: url(${minusIcon});
`
