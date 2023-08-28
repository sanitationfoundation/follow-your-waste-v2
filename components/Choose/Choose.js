import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from '@mui/material/styles'
import { visuallyHidden } from '@mui/utils'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { getText, getSections } from 'selectors'
import useStore from 'hooks'
import { Chyron } from 'common/Chyron'

const Choose = ({ ...props }) => {
	const theme = useTheme()
	const { locale } = useStore()

	return (
		<Stack
			alignItems='center'
			sx={{
				flex: 1,
			}}
		>
			<Stack
				width='80%'
				direction={{
					sm: 'row',
				}}
				spacing={{
					xs: 5,
					sm: '20%',
				}}
				alignItems='center'
				justifyContent='center'
				sx={{
					m: 'auto',
					'& > *': {
						// width: '50%',
						maxWidth: 350,
						display: 'block',
					},
					'& .MuiTouchRipple-root': {
						transform: `scale(${5})`,
					},
					'& img': {
						mx: 'auto',
						width: '100%',
						height: 'auto',
					},
				}}
			>
				{getSections().map((section, i) => (
					<Link key={i} href={`/${section}`}>
						<Box>
							<Box
								sx={{
									display: 'flex',
									transition: theme.transitions.create(['transform']),
									// maxWidth: {
									// 	xs: 200,
									// 	sm: '100%',
									// },
									'&:hover, &:focus': {
										transform: `scale(1.1)`,
									},
								}}
							>
								<Image
									alt=''
									src={`/images/${section}.png`}
									width={345}
									height={345}
									aria-hidden
								/>
							</Box>
							<Typography component='div' variant='h3' align='center' mt={-1}>
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
