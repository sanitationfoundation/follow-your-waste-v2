import { useEffect } from 'react'
import useStore from 'hooks'
import { DATA } from 'constants'
import { Layout } from 'common'
import { Header, Welcome, Choose } from 'components'

export default function Home({ env, ...props }) {
	return (
		<Layout>
			<Welcome />
			<Choose />
		</Layout>
	)
}