import React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import ModalBox from './ModalBox';

const ModalHeader = ({ children, sx, ...props }) => {
	return (
		<ModalBox
			sx={{
				borderBottomWidth: 1.5,
				borderBottomStyle: 'solid',
				borderBottomColor: 'tertiary.main',
			}}>
			<DialogTitle sx={{
				p: 0,
				textAlign: 'center',
				...sx
			}}>
				{children}
			</DialogTitle>
		</ModalBox>
	);
};

export default ModalHeader;
