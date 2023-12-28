import React from 'react';
import PropTypes from 'prop-types';
import './Prompt.css';

export var Prompt = function Prompt (ref) {
    const content = ref.content,
        title = ref.title ,
        width = ref?.width,
        theme = ref?.theme,
        align = ref?.align

    const headerBlackColor = '#2d2d2d'
    const contentBlackColor = '#1e1e1e'
    const whiteColor = '#ffffff'

    const promptStyles = {
        width: width ,
        backgroundColor: theme === 'dark' ? headerBlackColor : whiteColor
    };

    const contentStyle = {
        color: theme === 'dark' ? whiteColor : contentBlackColor,
        textAlign : align,
        fontWeight: 'bold'
    }

    return (
        <div className="prompt" style={promptStyles}>
            <div className="header">
                <div className="buttons">
                    <div className="button close"></div>
                    <div className="button minimize"></div>
                    <div className="button maximize"></div>
                </div>
                {title !== undefined &&  <div className="title">{title}</div>}
            </div>
            <div className="content" style={contentStyle}>
                {content}
            </div>
        </div>
    );
};
Prompt.defaultProps = {
    content: '',
    title: undefined,
    theme: 'dark',
    width : 'auto',
    align : 'left',
}

Prompt.propTypes = {
    content: PropTypes.string,
    title: PropTypes.string,
    theme: PropTypes.oneOf(['white', 'dark']),
    width : PropTypes.string,
    align : PropTypes.oneOf(['left', 'right', 'center']),
};

export default Prompt;
