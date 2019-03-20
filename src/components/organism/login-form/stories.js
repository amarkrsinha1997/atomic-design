
import React from 'react'
import { storiesOf } from '@storybook/react'


import LoginForm from './'

storiesOf('LoginForm', module).add('default', () => {
    return (
        <LoginForm />
    )

})
