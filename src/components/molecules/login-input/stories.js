import React from 'react'
import { storiesOf } from '@storybook/react'


import LoginInput from './'

storiesOf('LoginInput', module).add('default', () => {
    const onChange = (e) => {
        console.log(e.target.name, e.target.value)
    }
    return <LoginInput onChange={onChange}/>

})
