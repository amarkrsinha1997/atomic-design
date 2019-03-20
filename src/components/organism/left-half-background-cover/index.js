import React from "react";
import Proptypes from "prop-types";

const styles = {
    leftBackGround: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "50%",
        height: "100%",
        backgroundColor: "#44f",
    },
    rightBackGround: {
        backgroundColor: 'white',
        position: "fixed",
        top: 0,
        right: 0,
        width: "50%",
        height: "100%",
    },
    footer: {
        bottom: 0,  
        textAlign: "center",
    }
};

const LeftBackGroundCover = (props) => {
    const { leftBackGroundColor, opacity } = props;
    const { leftBackGround } = styles
    
    styles.leftBackGround = {
        ...leftBackGround,
        backgroundColor: leftBackGroundColor,
        opacity,
    }

    return ( 
        <div style={props.style}>
            <div style={styles.leftBackGround} />
            <div style={styles.rightBackGround}>
                {props.children}
                {
                    props.footer? 
                    (
                        <footer style={styles.footer}>
                            {props.footer}
                        </footer>
                    )
                    : null
                }
            </div>
        </div>
    );
};

LeftBackGroundCover.propTypes = {
    leftBackGroundColor: Proptypes.string,
    opacity: Proptypes.number,
    style: Proptypes.object,
    footer: Proptypes.oneOf([Proptypes.node, Proptypes.string])
}

LeftBackGroundCover.defaultProps = {
    leftBackGroundColor: "#44f",
    opacity: 1,
    style: {},
    footer: ''
}

export default LeftBackGroundCover;