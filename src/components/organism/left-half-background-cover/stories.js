
import React from 'react'
import { storiesOf } from '@storybook/react'


import LeftBackGroundCover from './'

storiesOf('LeftBackGroundCover', module).add('default', () => {
    // const onChange = (e) => {
    //     console.log(e.target.name, e.target.value)
    // }
    
    // const props = {
    //     onChange: onChange,
    //     onChange: (e) => console.log(e.target.name, e.target.value),
    //     checkBoxText: 'Remember Me',
    //     linkText: 'Forgot Password',
    //     checkBoxName: 'remember-me',
    //     linkTextHref: '#',
    // }
    return (
        <LeftBackGroundCover opacity="0.5" />
    )

})
