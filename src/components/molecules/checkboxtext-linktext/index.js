import * as React from 'react'
import Proptypes from 'prop-types'
import { Typography, Row, Col } from 'antd'
import CheckBoxText from '../../../components/molecules/checkboxtext'

const styles = {
    link: {
        display: "inline",
    },
    checkBox: {
        display: "inline",
    }
}

const CheckBoxTextLinkText = (props) => (
    <Row type="flex" justify="space-around">
        <Col span={10}>
            <CheckBoxText 
                style={styles.checkBox}
                onChange={props.onChange} 
                checkBoxName={props.checkBoxName} 
                text={props.checkBoxText}
                />
        </Col>
        <Col span={10}>
            <a 
                href={props.linkTextHref} 
                style={styles.link}
            >
                <Typography.Text>{props.linkText}</Typography.Text>
            </a>
        </Col>
    </Row>
)
// const CheckBoxTextLinkText = (props: Props): React.Element<*> => (
//     <div className={props.className}>
//         <CheckBoxText 
//             className={
//                 classnames(
//                     styles.checkBox,
//                     props.elementClassName.checkBoxClassName
//                 )
//             }
//             onChange={props.onChange} 
//             checkBoxName={props.checkBoxName} 
//             text={props.checkBoxText}
//             />
//         <a 
//             href={props.linkTextHref} 
//             className={
//                 classnames(
//                     styles.link, 
//                     props.elementClassName.linkClassName
//                 )
//             }
//         >
//             <Typography.Text>{props.linkText}</Typography.Text>
//         </a>
//     </div>
// )

CheckBoxTextLinkText.propTypes = {
    onChange: Proptypes.func,
    checkBoxText: Proptypes.string,
    linkText: Proptypes.string,
    checkBoxName: Proptypes.string,
    linkTextHref: Proptypes.string,
}
CheckBoxTextLinkText.defaultProps = {
    className: '',
    onChange: (e) => console.log(e.target.name, e.target.value),
    checkBoxText: '',
    linkText: '',
    checkBoxName: '',
    linkTextHref: '#',
}

export default CheckBoxTextLinkText
