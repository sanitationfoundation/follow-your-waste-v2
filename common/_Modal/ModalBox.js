import React from 'react'
import Box from '@mui/material/Box'

const ModalBox = ({ children, sx, ...props }) => {
	return (
		<Box {...props}>
			<Box
				sx={{
					px: 2.5,
					py: 2.5,
					...sx,
				}}
			>
				{children}
			</Box>
		</Box>
	)
}

export default ModalBox
