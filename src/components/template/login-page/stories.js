import React from 'react'
import { storiesOf } from '@storybook/react'


import LoginTemplate from './'

storiesOf('LoginTemplate', module).add('default', () => {
    return (
        <LoginTemplate />
    )

})
