import React from 'react'
import ModalBox from './ModalBox'

const ModalFooter = ({ children, sx, ...props }) => {
	return (
		<ModalBox
			sx={{
				textAlign: 'center',
				borderTopWidth: 1.5,
				borderTopStyle: 'solid',
				borderTopColor: 'tertiary.main',
				...sx,
			}}
		>
			{children}
		</ModalBox>
	)
}

export default ModalFooter
