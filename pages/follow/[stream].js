import { useEffect } from 'react'
import { useRouter } from 'next/router'

import useStore from 'hooks'
import { Layout } from 'common'
import { Follow } from 'components/Follow'

const Stream = ({ ...props }) => {
	const router = useRouter()
	// const { setStream } = useStore()
	const { stream } = router.query

	useEffect(() => {
		// setStream(stream)
	}, [])

	return (
		<Layout
			HeaderProps={{
				position: 'fixed',
				color: 'transparent',
				sx: {
					top: 32,
				},
			}}
		>
			<Follow stream={stream} />
		</Layout>
	)
}

export default Stream
