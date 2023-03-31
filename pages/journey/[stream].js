import { useRouter } from 'next/router'
import { Layout } from 'common'
import { WasteJourney } from 'components/WasteJourney'

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
			<WasteJourney stream={stream} />
		</Layout>
	);
}

export default Stream