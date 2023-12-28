import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Prompt.css';

export var Prompt = function Prompt(ref) {
    const { content, title, width, theme, align, animation, speed } = ref;

    const [displayedContent, setDisplayedContent] = useState('');
    const headerBlackColor = '#2d2d2d';
    const contentBlackColor = '#1e1e1e';
    const whiteColor = '#ffffff';

    const promptStyles = {
        width: width,
        backgroundColor: theme === 'dark' ? headerBlackColor : whiteColor,
    };

    const contentStyle = {
        color: theme === 'dark' ? whiteColor : contentBlackColor,
        textAlign: align,
        fontWeight: 'bold',
    };

    useEffect(() => {
        let timeout;
        if (animation === 'right-show') {
            setDisplayedContent('');
            for (let i = 0; i < content.length; i++) {
                timeout = setTimeout(() => {
                    setDisplayedContent((prevContent) => prevContent + content[i]);
                }, speed * i);
            }
        }
        return () => {
            clearTimeout(timeout);
        };
    }, [content, speed, animation]);

    return (
        <div className="prompt" style={promptStyles}>
            <div className="header">
                <div className="buttons">
                    <div className="button close"></div>
                    <div className="button minimize"></div>
                    <div className="button maximize"></div>
                </div>
                {title !== undefined && <div className="title">{title}</div>}
            </div>
            <div className="content" style={contentStyle}>
                {animation === 'right-show' ? displayedContent : content}
            </div>
        </div>
    );
};

Prompt.defaultProps = {
    content: '',
    title: undefined,
    theme: 'dark',
    width: 'auto',
    align: 'left',
    animation: 'none',
    speed: 50
};

Prompt.propTypes = {
    content: PropTypes.string,
    title: PropTypes.string,
    theme: PropTypes.oneOf(['white', 'dark']),
    width: PropTypes.string,
    align: PropTypes.oneOf(['left', 'right', 'center']),
    animation: PropTypes.oneOf(['none', 'right-show']),
    speed: PropTypes.bigint
};

export default Prompt;
