import React from "react";
import './why.css';
import Button from "../../UI/Button/Button";
import WhyImage from '../../Assets/logistics.svg';


const Why = () => {
    return(
        <div className = 'why' id='why'>

            <div className='why-image'>
                <img src={WhyImage} alt = 'whyimage'/>
            </div>

            <div className='why-details'>
                <h1 className='topic'>
                <span className='topic-span'>Why Taste Clan?</span>
                </h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et diam aliquam congue arcu suspendisse ipsum elit posuere Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et diam aliquam congue 
                </p>
                <div className='why-button'>
                    <Button name='JOIN THE CLAN'/>
                </div>
            </div>
            
        </div>
    );
}


export default Why;