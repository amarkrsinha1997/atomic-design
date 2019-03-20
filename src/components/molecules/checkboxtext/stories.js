/* @flow */

import React from 'react'
import { storiesOf } from '@storybook/react'


import CheckBoxText from './'

storiesOf('CheckBoxText', module).add('default', () => {
    const onChange = (e) => {
        console.log(e.target.name, e.target.value)
    }
    const checkBoxText = "Remember me"
    return <CheckBoxText onChange={onChange} checkBoxName={checkBoxText} text={checkBoxText}/>

})
