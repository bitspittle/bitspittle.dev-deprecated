import React from 'react'
import {IconButton, IconButtonProps, useColorMode} from '@chakra-ui/react'
import {FiSun, FiMoon} from 'react-icons/fi'

interface LightModeToggleProps extends Omit<IconButtonProps, 'aria-label'> {}

export const LightModeToggle: React.FunctionComponent<LightModeToggleProps> = ({...props}) => {
    const {colorMode, toggleColorMode} = useColorMode()
    return (
        <IconButton
            aria-label="Toggle Light Mode"
            icon={colorMode === 'dark' ? <FiMoon/> : <FiSun/>}
            isRound={true}
            onMouseDown={toggleColorMode}
            {...props}
        />
    )
}