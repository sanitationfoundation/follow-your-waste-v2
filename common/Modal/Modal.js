import React from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { default as MuiModal } from '@mui/material/Modal'
import Typography from '@mui/material/Typography'

const Modal = ({ open, children, ...props }) => {
	return (
		<MuiModal open={open} {...props}>
			<Box>{children}</Box>
		</MuiModal>
	)
}

Modal.defaultProps = {
	open: true,
}

export default Modal
