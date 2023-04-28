import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { visuallyHidden } from '@mui/utils'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { getText, getSections } from 'selectors'
import useStore from 'hooks'

const Choose = ({ ...props }) => {
	const { locale } = useStore()

	return (
		<Stack
			alignItems='center'
			justifyContent='center'
			sx={{
				my: 'auto',
			}}
		>
			{/*<Typography align='center'></Typography>*/}
			<Stack
				direction={{
					sm: 'row',
				}}
				spacing={{
					xs: 2,
					sm: '10%',
				}}
				alignItems='center'
				justifyContent='center'
				sx={{
					'& > *': {
						// width: '50%',
						maxWidth: 300,
						display: 'block',
					},
					'& .MuiTouchRipple-root': {
						transform: `scale(${5})`,
					},
					'& img': {
						width: '100%',
						height: 'auto',
					},
				}}
			>
				{getSections().map((section, i) => (
					<Link key={i} href={`/${section}`}>
						<Box>
							<Image
								alt=''
								src={`/images/${section}.png`}
								width={345}
								height={345}
								aria-hidden
							/>
							<Typography variant='h3' align='center' mt={-1}>
								{getText(locale, 'system', section)}
							</Typography>
						</Box>
					</Link>
				))}
			</Stack>
		</Stack>
	)
}

export default Choose
