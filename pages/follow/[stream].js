import { useRouter } from 'next/router'
import { Layout } from 'common'
import { Follow } from 'components/Follow'

const Stream = ({ ...props }) => {
	const router = useRouter()
	const { stream } = router.query
	return (
		<Layout
			HeaderProps={{
				position: 'fixed',
				color: 'transparent',
				sx: {
					top: 32
				}
			}}>
			<Follow stream={stream} />
		</Layout>
	);
}

export default Stream