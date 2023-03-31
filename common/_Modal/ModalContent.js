import React from 'react';
import { useTheme } from '@mui/material/styles';
import ModalBox from './ModalBox';

const ModalContent = ({ children, sx, ...props }) => {
	const theme = useTheme();
	return (
		<ModalBox sx={{
			maxHeight: theme.spacing(50),
			overflow: 'scroll',
			...sx
		}}>
			{children}
		</ModalBox>
	);
};

export default ModalContent;
