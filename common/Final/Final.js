import { Fragment, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import { alpha, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import LaunchIcon from '@mui/icons-material/Launch'

import useStore from 'hooks'
import { getText, getStreamColor } from 'selectors'

const Final = ({ section, children, ...props }) => {
	const { locale } = useStore()

	const resources = ['workers', 'lessons', 'about', 'quiz']
	
	return (
		<Container
			maxWidth='sm'
			sx={{
				my: 'auto'
			}}
		>
			<Box m='auto'>
				<Typography
					variant='h2'
					component='h2'
					mb={3}
				>
					{getText(locale, 'system', `final_${section}_title`)}
				</Typography>
				<Typography
					variant='h4'
				>
					{getText(locale, 'system', `final_${section}_desc`)}
				</Typography>

				{children}

				<Typography
					variant='h4'
					component='div'
					mt={4}
					mb={1}
				>
					{getText(locale, 'system', 'resources_label')}:
				</Typography>

				<Box
					bgcolor='green.main'
					borderRadius={3}
				>
					
					<List
						sx={{
							py: 0
						}}
					>
						{resources.map((resource, i) =>
							<Fragment key={i}>
								{i !== 0 ?
									<Divider
										component='li'
										aria-hidden={true}
									/>
								: null}
								<ListItem disablePadding>
									<ListItemButton
										href={getText(locale, 'system', `resource_${resource}_url`)}
										target='_blank'
									>
										<ListItemText primary={getText(locale, 'system', `resource_${resource}`)} />
										<ListItemIcon>
	                    					<LaunchIcon color='primary' />
	                  					</ListItemIcon>
									</ListItemButton>
								</ListItem>
							</Fragment>
						)}
					</List>
				</Box>
			</Box>
		</Container>
	)
}

export default Final
