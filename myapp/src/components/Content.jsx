import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/room.jpeg';
import img2 from '../assets/recipe.jpeg';
import img3 from '../assets/maid-2.jpg';
const Content = () => {
    return (
        <div >
            <div className='maid-title'>
                <h2>Here your looking for</h2>
            </div>
            <div className='container'>
                <div className='container-1'>
                    <div className='img1'>
                        <img src={img1} alt="Image 1" />
                    </div>
                    <div className='text1'>
                        <p >
                            If your searching for rooms, you can visit the following page for more information:
                            <Link to="/rooms">Rooms</Link>
                        </p>
                    </div>
                </div>
                <div className='container-1'>
                    <div className='img1'>
                        <img src={img2} alt="Image 2" />
                    </div>
                    <div className='text1'>
                        <p >
                            If you wana try some new recipes, you can visit the following page for more information:
                            <Link to="/recipes">Recipes</Link>
                        </p>
                    </div>
                </div>
                <div className='container-1'>
                    <div className='img3'>
                        <img id="i3" src={img3} alt="Image 3" />
                    </div>
                    <div className='text1'>
                        <p >
                        If you are looking for a maid service, you can visit the following website for more information: 
                        <a href="https://www.maids.com/" target="_blank" rel="noopener noreferrer"> The Maids</a>
                        </p>
                    </div>
                </div>
                <div className='more-info'>
                    <p>
                        </p>
                </div>
            </div>
        </div>
    );
};

export default Content;
