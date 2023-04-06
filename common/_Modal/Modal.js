import React from 'react'
import { useTheme } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'

//<Dialog />
//<DialogActions />
//<DialogContent />
//<DialogContentText />
//<DialogTitle />

const Modal = ({ sx, children, ...props }) => {
	const theme = useTheme()
	return (
		<Dialog
			sx={{
				zIndex: 100,
				// overflow: 'hidden',
				// bgcolor: 'secondary.main',
				// boxShadow: 2,
				// borderTopWidth: 1.5,
				// borderTopStyle: 'solid',
				// borderTopColor: 'tertiary.main',
				...sx,
			}}
			PaperProps={{
				sx: {
					width: '100%',
					maxWidth: theme.spacing(45),
				},
			}}
			{...props}
		>
			{children}
		</Dialog>
	)
}

export default Modal
