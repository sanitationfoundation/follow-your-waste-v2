import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import { alpha, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import useStore from 'hooks'
import { getText, getStreamColor } from 'selectors'

const FollowEnd = ({ stream, current, ...props }) => {
	return (
		<Box
			sx={{
				maxWidth: '100vw',
				flex: '0 0 100vw',
				overflow: 'hidden',
			}}
			{...props}
		>
			THE END
		</Box>
	)
}

export default FollowEnd
