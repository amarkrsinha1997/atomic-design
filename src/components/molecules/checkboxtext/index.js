import * as React from 'react'
// import classnames from 'classnames'
import Proptypes from 'prop-types'
import { Typography, Checkbox } from 'antd'

// const styles = {
//     checkBox: {
//         // marginRight: "2px",
//     }
// }


const CheckBoxText = (props) => (
    <div style={props.style}>
        <Checkbox onChange={props.onChange} name={props.checkBoxName}/>
        <Typography.Text>{props.text}</Typography.Text>
    </div>
)

CheckBoxText.propTypes = {
    onChange: Proptypes.func,
    text: Proptypes.string,
    checkBoxName: Proptypes.string,
    style: Proptypes.object,
}

CheckBoxText.defaultProps = {
    onChange: (e) => console.log(e.target.name, e.target.value),
    text: '',
    checkBoxName: '',
    style: {}
}

export default CheckBoxText
