import { forwardRef } from 'react'
import useStore from 'hooks'

const Audio = forwardRef(({ type, slug, ...props }, ref) => {
	const { mute } = useStore()

	return (
		<>
			{type && slug ?
				<audio
					ref={ref}
					src={`/audio/${type}/${slug}.wav`}
					muted={mute}
					{...props}
				/>
			: null}
		</>
	)
})

export default Audio