import React from "react"
import Proptypes from "prop-types"
import LeftBackGroundCover from "../../../components/organism/left-half-background-cover"
import LoginForm from "../../../components/organism/login-form"

const LoginTemplate = (props) => {
    const loginFormProps = {
        inputHandler: props.inputHandler,
        checkBoxHandler: props.checkBoxHandler,
        loginButtonOnClick: props.loginButtonOnClick,
        signupButtonOnClick: props.signupButtonOnClick,
    }
    return (
        <LeftBackGroundCover 
            footer="Term of use. Privacy policy"
            >
            <LoginForm {...loginFormProps} />
        </LeftBackGroundCover>
    )
}

LoginTemplate.propTypes = {
    inputHanlder: Proptypes.func,
    checkBoxHandler: Proptypes.func,
    loginButtonOnClick: Proptypes.func,
    signupButtonOnClick: Proptypes.func,
    style: Proptypes.object
}

LoginTemplate.defaultProps = {
    inputHandler: (e) => console.log(e.target.name, e.target.value),
    checkBoxHandler: (e) => console.log(e.target.name, e.target.value),
    loginButtonOnClick: (e) => console.log(e.target.name, e.target.value),
    signupButtonOnClick: (e) => console.log(e.target.name, e.target.value),
    style: {},
}

export default LoginTemplate;