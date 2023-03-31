import React from 'react';
import Image from 'next/image';
// import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { getText } from 'selectors' ;
import useStore from 'hooks';

const Intro = ({ ...props }) => {
	// const theme = useTheme();
	const { lang, showIntro, setShowIntro } = useStore();

	const onClose = () => {
		setShowIntro(false)
	}

// 	{text.system.title}
// {text.system.tagline}
// <img src={withPrefix("images/loading.png")}
// {text.system.loading}
// {text.system.get_started}

	return (
		<Fade in={showIntro}>
			<Stack
				alignItems='center'
				justifyContent='center'
				sx={{
					width: '100%',
					height: '100%',
					position: 'fixed',
					top: 0,
					left: 0,
					zIndex: 10,
					bgcolor: 'orange.main'
				}}>

				<Image
					width={737}
					height={427}
					src='svg/title.svg'
					alt='Follow Your Waste logo' />

				<Typography
					align='center'>
					{getText(lang,'system','tagline')}
				</Typography>

				<Image
					width={300}
					height={120}
					src='images/loading.png'
					alt='Illustration of DSNY collection truck' />

				<Button
					variant='contained'
					onClick={onClose}>
					{getText(lang,'system','get_started')}
				</Button>

			</Stack>
		</Fade>
	);
};

export default Intro;
