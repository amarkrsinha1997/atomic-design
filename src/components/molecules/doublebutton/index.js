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
    <Row 
        style={props.style} 
        type="flex" 
        justify="space-around"
        >
        <Col span={11}>
            <Button 
                style={styles.inverted} 
                onClick={props.leftOnClick} 
                size="large" 
                block
                >
                {props.leftButtonName}
            </Button>
        </Col>
        <Col span={11}>
            <Button 
                onClick={props.rightOnClick} 
                size="large" 
                block
                >
                {props.rightButtonName}
            </Button>
        </Col>
    </Row >
)

DoubleButton.propTypes = {
    leftOnClick: Proptypes.func,
    rightOnClick: Proptypes.func,
    leftButtonName: Proptypes.string.isRequired,
    rightButtonName: Proptypes.string.isRequired,
    style: Proptypes.object,
}

DoubleButton.defaultProps = {
    leftOnClick: (e) => console.log(e.target.name, e.target.value),
    rightOnClick: (e) => console.log(e.target.name, e.target.value),
    style: {},
}

export default DoubleButton
