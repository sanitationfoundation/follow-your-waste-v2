import Link from 'next/link'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const HeaderFollowBackButton = () => {
	return (
		<Box
			sx={{
				display: {
					xs: 'none',
					sm: 'block'
				}
			}}
		>
			<Link href='/follow'>
				<Button
					size='small'
					variant='contained'
					color='green'
					sx={{
						mx: 'auto'
					}}
				>
					Choose another stream
				</Button>
			</Link>
		</Box>
	)
}

export default HeaderFollowBackButton
