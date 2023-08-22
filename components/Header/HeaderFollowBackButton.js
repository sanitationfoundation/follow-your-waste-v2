import Link from 'next/link'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import useStore from 'hooks'
import { getText } from 'selectors'

const HeaderFollowBackButton = () => {
	const { locale } = useStore()

	return (
		<Box
			sx={{
				display: {
					xs: 'none',
					sm: 'block',
				},
			}}
		>
			<Link href='/follow'>
				<Button
					size='small'
					variant='contained'
					color='green'
					sx={{
						mx: 'auto',
					}}
				>
					{getText(locale, 'system', 'follow_choose')}
				</Button>
			</Link>
		</Box>
	)
}

export default HeaderFollowBackButton
