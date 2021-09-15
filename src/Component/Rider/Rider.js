import React from "react";
import './Rider.css';
import Button from "../../UI/Button/Button";
import RiderImage from '../../Assets/Rider-Image.svg';


const Rider = () => {
    return(
        <div className = 'Rider'>
            <div className='Rider-details'>
                <h1 className='topic'>
                <span className='topic-span'>Gain more delivering.</span>
                </h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et diam aliquam congue arcu suspendisse ipsum elit posuere neque. 
                </p>
                <div className='Rider-button'>
                    <Button name='JOIN THE CLAN'/>
                </div>
            </div>
            <div className='Rider-image'>
                <img src={RiderImage} alt = 'riderimage'/>
            </div>
        </div>
    );
}


export default Rider;