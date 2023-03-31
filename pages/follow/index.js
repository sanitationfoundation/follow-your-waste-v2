import Link from 'next/link'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

import { Layout } from 'common'
import useStore from 'hooks'
import { getText, getStreams } from 'selectors'

const Follow = ({ ...props }) => {
	const { locale } = useStore()
 	const streams = getStreams()

 	// const handleClick = e => {
 	// 	const stream = e.target.value
 	// 	if(streams.some(s => s.slug === stream))
 	// 		setStream(stream)
 	// }

	return (
		<Layout>
			<Stack
				spacing={1}
				alignItems='center'
				sx={{m: 'auto'}}>
				{streams.map((stream, i) =>
					<Link
						key={i}
						href={`/follow/${stream}`}>
						<Button
							key={i}
							variant='contained'>
							{getText(locale, 'system', stream)}
						</Button>
					</Link>
				)}
			</Stack>
		</Layout>
	)
}

export default Follow