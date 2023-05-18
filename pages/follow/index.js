import Link from 'next/link'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { Layout } from 'common'
import useStore from 'hooks'
import { getRandom } from 'utils'
import { getText, getStreams, getItems, getItemSize } from 'selectors'

const Follow = ({ ...props }) => {
	const theme = useTheme()
	const { locale } = useStore()
	const streams = getStreams()
	const items = getItems()
	// console.log(items)

	// const handleClick = e => {
	// 	const stream = e.target.value
	// 	if(streams.some(s => s.slug === stream))
	// 		setStream(stream)
	// }

	return (
		<Layout>
			<Stack
				direction='row'
				alignItems='center'
				justifyContent='center'
				flexWrap='wrap'
				spacing={1}
				sx={{
					m: 'auto',
					width: '100%',
					maxWidth: theme.spacing(80),
					'& > a': {
						mb: 5,
						maxWidth: theme.spacing(25),
						display: 'block',
					},
				}}
			>
				{streams.map((stream, i) => (
					<Link key={i} href={`/follow/${stream}`}>
						<Box
							sx={{
								pb: '100%',
								width: theme.spacing(25),
								position: 'relative',
							}}
						>
							{items
								.filter(item => item.stream === stream)
								.sort((a, b) => getItemSize(b.slug) - getItemSize(a.slug))
								.map((item, i) => (
									<img
										key={i}
										src={`/images/items/${item.slug}.png`}
										style={{
											width: `${getItemSize(item.slug) / 2}%`,
											minWidth: `${getItemSize(item.slug) * 10}px`,
											height: 'auto',
											position: 'absolute',
											top: '50%',
											left: '50%',
											// TODO: Remove randomness
											transform: `translate(-50%, -50%) rotate(${getRandom(
												-80,
												80,
											)}deg)`,
											marginLeft: getRandom(-25, 0),
											marginRight: getRandom(-25, 0),
											marginTop: getRandom(-25, 0),
											marginBottom: getRandom(-25, 0),
										}}
										alt=''
									/>
								))}
						</Box>
						<Typography variant='h3' align='center' mt={-4}>
							{getText(locale, 'system', stream)}
						</Typography>
					</Link>
				))}
			</Stack>
		</Layout>
	)
}

export default Follow
