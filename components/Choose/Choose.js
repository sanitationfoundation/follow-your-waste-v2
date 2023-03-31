import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { getText, getSections } from 'selectors' ;
import useStore from 'hooks';

const Choose = ({ ...props }) => {
	const { locale } = useStore();

	return (
		<Stack
			alignItems='center'
			justifyContent='center'
			sx={{
				margin: 'auto'
			}}>

			<Typography
				align='center'>
				TEST
			</Typography>

			{getSections().map((section, i) =>
				<Link
					key={i}
					href={`/${section}`}>
					<Button
						variant='contained'
						// onClick={onClose}
						>
						{getText(locale, 'system', section)}
					</Button>
				</Link>
			)}

		</Stack>
	);
};

export default Choose;
