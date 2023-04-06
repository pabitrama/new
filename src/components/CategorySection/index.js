import React from 'react';
import './style.css';
import pic1 from '../../images/category/c0.avif';
import pic2 from '../../images/category/c1.webp';
import pic3 from '../../images/category/c2.avif';
import pic4 from '../../images/category/c3.avif';
import pic5 from '../../images/category/c4.webp';
import pic6 from '../../images/category/c5.avif';
import pic7 from '../../images/category/c6.avif';
import pic8 from '../../images/category/c7.avif';
import pic9 from '../../images/category/c8.avif';
import pic10 from '../../images/category/c9.avif';

const CategoryS = () => {
  return (
    <div className='main-div'>
        <div className='cont-div'>
            <div className='cont'>
                <div className='objects'>
                    <img src={pic1} />
                </div>
                <h2>Offers</h2>
            </div>
            <div className='cont'>
                <div className='objects'>
                    <img src={pic2} />
                </div>
                <h2>Gardening</h2>
            </div>
            <div className='cont'>
                <div className='objects'>
                    <img src={pic3} />
                </div>
                <h2>Plants</h2>
            </div>
            <div className='cont'>
                <div className='objects'>
                    <img src={pic4} />
                </div>
                <h2>Seeds</h2>
            </div>
            <div className='cont'>
                <div className='objects'>
                    <img src={pic5} />
                </div>
                <h2>Bulbs</h2>
            </div>
            <div className='cont'>
                <div className='objects'>
                    <img src={pic6} />
                </div>
                <h2>Pots</h2>
            </div>
            <div className='cont'>
                <div className='objects'>
                    <img src={pic7} />
                </div>
                <h2>Fortilizers</h2>
            </div>
            <div className='cont'>
                <div className='objects'>
                    <img src={pic8} />
                </div>
                <h2>Corporate</h2>
            </div>
            <div className='cont'>
                <div className='objects'>
                    <img src={pic9} />
                </div>
                <h2>Pebbles</h2>
            </div>
            <div className='cont'>
                <div className='objects'>
                    <img src={pic10} />
                </div>
                <h2>Accoseries</h2>
            </div>
        </div>
    </div>
  )
}

export default CategoryS
