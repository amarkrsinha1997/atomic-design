/* @flow */
import * as React from 'react'
import Proptypes from 'prop-types'
import { Typography } from 'antd'
import Logo from "../../../components/atoms/logo"

const { Text } = Typography

const styles = {
    centerText: {
        textAlign: "center",
    },
    displayBlock: {
        display:"block"
    }

}

const LogoHeading = (props) => (
    <div style={styles.centerText}>
        <Logo />
        <Text style={styles.displayBlock} type={props.textType}>{props.text}</Text>
    </div>
)

LogoHeading.propTypes = {
    textType: Proptypes.string,
    text: Proptypes.string.isRequired,
}

LogoHeading.defaultProps = {
    textType: 'secondary'
}

export default LogoHeading
