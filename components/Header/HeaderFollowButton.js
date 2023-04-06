import Link from 'next/link'
import Button from '@mui/material/Button'

const HeaderFollowButton = () => {
	return (
		<Link href="/follow">
			<Button
				color="primary"
				variant="outlined"
				aria-label="Switch to follow your waste"
			>
				Follow your waste
			</Button>
		</Link>
	)
}

export default HeaderFollowButton
