import React from 'react'
import { storiesOf } from '@storybook/react'


import DoubleButton from './'

storiesOf('Double Button', module).add('default', () => {
    const onChange = (e) => {
        console.log(e.target.name, e.target.value)
    }
    const props = {
        leftButtonName: "Login",
        rightButtonName: "Sign Up",
    }
    return (
        <div style={{width:"300px"}}>
            <DoubleButton {...props} />
        </div>
    )
})
