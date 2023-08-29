import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { alpha, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import useStore from 'hooks'
import { getText, getStreams } from 'selectors'

const FollowSelect = ({ stream, current, small, title, ...props }) => {
	const theme = useTheme()
	const streams = getStreams()
	const { locale, setCurrentScene } = useStore()

	return (
		<Box
			sx={{
				height: '100%',
				overflowY: 'scroll',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<Box m='auto' maxWidth={theme.spacing(100)}>
				{title ? (
					<Typography
						flex={1}
						variant={small ? 'h4' : 'h3'}
						component={small ? 'h3' : 'h2'}
						align={small ? 'left' : 'center'}
						width={small ? '80%' : '80%'}
						mx={small ? null : 'auto'}
						mb={2}
					>
						{title}
					</Typography>
				) : null}
				<Stack
					direction='row'
					alignItems='center'
					alignContent='center'
					justifyContent={small ? 'unset' : 'center'}
					flexWrap='wrap'
					// spacing={1}
					flex={1}
					sx={{
						m: 'auto',
						width: '100%',
						'& > a': {
							mb: small ? 1 : 5,
							maxWidth: small ? theme.spacing(9) : theme.spacing(25),
							display: 'block',
						},
					}}
					{...props}
				>
					{streams.map((stream, i) => (
						<a
							key={i}
							href={`/${locale}/follow/${stream}`}
						>
							<Box
								sx={{
									// pb: '100%',
									width: small ? theme.spacing(9) : theme.spacing(25),
									position: 'relative',
									transition: theme.transitions.create(['transform']),
									'&:hover, &:focus': {
										transform: `scale(1.1)`,
									},
								}}
							>
								<img
									key={i}
									src={`/images/streams/${stream}.png`}
									style={{
										width: `100%`,
										height: 'auto',
									}}
									alt=''
								/>
							</Box>
							{!small ? (
								<Typography
									component='div'
									variant='h3'
									align='center'
									color='primary'
									mt={-1}
								>
									{getText(locale, 'system', stream)}
								</Typography>
							) : null}
						</a>
					))}
				</Stack>
			</Box>
		</Box>
	)
}

FollowSelect.defaultProps = {}

export default FollowSelect
