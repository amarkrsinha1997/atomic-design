/* @flow */
import * as React from 'react'
import Proptypes from 'prop-types'
import { Button, Row, Col } from 'antd'

const styles = {
    inverted: {
        color: "white",
        background: "#333"
    }
}

const DoubleButton = (props) => (
    <Row type="flex" justify="space-around">
        <Col span={11}>
            <Button style={styles.inverted} onChange={props.leftOnChange} size="large" block>
                {props.leftButtonName}
            </Button>
        </Col>
        <Col span={11}>
            <Button onChange={props.rightOnChange} size="large" block>
                {props.rightButtonName}
            </Button>
        </Col>
    </Row >
)

DoubleButton.propTypes = {
    leftOnChange: Proptypes.func,
    rightOnChange: Proptypes.func,
    leftButtonName: Proptypes.string.isRequired,
    rightButtonName: Proptypes.string.isRequired,
}

DoubleButton.defaultProps = {
    leftOnChange: (e) => console.log(e.target.name, e.target.value),
    rightOnChange: (e) => console.log(e.target.name, e.target.value),
}

export default DoubleButton
