
import React from 'react'
import { storiesOf } from '@storybook/react'


import CheckBoxTextLinkText from './'

storiesOf('CheckBoxTextLinkText', module).add('default', () => {
    const onChange = (e) => {
        console.log(e.target.name, e.target.value)
    }
    
    const props = {
        onChange: onChange,
        onChange: (e) => console.log(e.target.name, e.target.value),
        checkBoxText: 'Remember Me',
        linkText: 'Forgot Password',
        checkBoxName: 'remember-me',
        linkTextHref: '#',
    }
    return (
        <div style={{width: "350px"}}>
        {/** making it inside a limited width to check the floating. */}
            <CheckBoxTextLinkText {...props} />
        </div>
    )

})
