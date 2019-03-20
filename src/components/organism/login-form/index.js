import React from "react";
import Proptypes from "prop-types";

import { Form } from 'antd';

import LogoHeading from "../../../components/molecules/logo-heading"
import LoginInput from "../../../components/molecules/login-input"
import DoubleButton from "../../../components/molecules/doublebutton"
import CheckBoxTextLinkText from "../../../components/molecules/checkboxtext-linktext"


const styles = {
    centerForm: {
        margin: "20% auto",
        width:"50%",
        alignText: "center"
    },
    inlineBlock: {
        display: 'inline-block'
    }
};

const LoginForm = (props) => {
    const subHeading = "Welcome back! Please login to your account.";
    const loginProps = {
        onChange: props.inputHandler,
        fieldNames: ['username', 'password'],
        size: 'xxxl'
    }
    const checkBoxTextLinkText = {
        onChange:props.checkBoxHandler,
        checkBoxText:"Remember Me",
        linkText:"Forgot Password",
        checkBoxName:"remember-me",
    }
    const doubleButton = {
        leftButtonName: "Login",
        rightButtonName: "Sign up",
        leftOnClick: props.loginButtonOnClick,
        rightOnClick: props.signupButtonOnClick
    }
    return ( 
        <Form style={{...styles.centerForm, ...props.style}}>
            <Form.Item>
                <LogoHeading text={subHeading} />
            </Form.Item>
            <Form.Item>
                <LoginInput {...loginProps} />
            </Form.Item>
            <Form.Item>
                <CheckBoxTextLinkText {...checkBoxTextLinkText} />
            </Form.Item>
            <Form.Item>
                <DoubleButton {...doubleButton}/>
            </Form.Item>
        </Form>
    );
};

LoginForm.propTypes = {
    inputHanlder: Proptypes.func,
    checkBoxHandler: Proptypes.func,
    loginButtonOnClick: Proptypes.func,
    signupButtonOnClick: Proptypes.func,
    style: Proptypes.object
}

LoginForm.defaultProps = {
    inputHandler: (e) => console.log(e.target.name, e.target.value),
    checkBoxHandler: (e) => console.log(e.target.name, e.target.value),
    loginButtonOnClick: (e) => console.log(e.target.name, e.target.value),
    signupButtonOnClick: (e) => console.log(e.target.name, e.target.value),
    style: {}
}

export default LoginForm;