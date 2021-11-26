import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
    const newArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>Linkedin News</h2>
                <InfoIcon />
            </div>

            {newArticle("Dev React is Back", "Enjoy the content")}
            {newArticle("Programming React is Back", "Enjoy the content")}
            {newArticle("Designing React is Back", "Enjoy the content")}
        </div>
    )
}

export default Widgets
