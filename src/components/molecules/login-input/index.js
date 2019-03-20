/* @flow */
import * as React from 'react'
import Proptypes from 'prop-types'
import { Input, Row, Col } from 'antd'

const styles = {
    gap: {
        marginBottom: "10px"
    }
}
const size = {
    xxxl: 22,
    xxl:20,
    xl:15,
    lg: 12,
    sm: 9,
    xs: 6,
    xxs: 4.5
}

const LoginInput = (props) => (
    <div style={props.style}>
        {
            props.fieldNames.map((fieldName, index) => (
                <Row 
                    key={index} 
                    type="flex" 
                    justify="space-around" 
                    style={styles.gap}
                    >
                    <Col span={size[props.size]}>    
                        <Input 
                            placeholder={fieldName} 
                            onChange={props.onChange} 
                            name={fieldName}
                            />
                    </Col>
                </Row>
            ))
        }
    </div>
)

LoginInput.propTypes = {
    onChange: Proptypes.func,
    size: Proptypes.oneOf(Object.keys(size)),
    fieldNames: Proptypes.arrayOf(Proptypes.string),
    style: Proptypes.object,
}

LoginInput.defaultProps = {
    onChange: (e) => console.log(e.target.name, e.target.value),
    size: "xs",
    fieldNames: ['username', 'password'],
    style: {},
}

export default LoginInput
