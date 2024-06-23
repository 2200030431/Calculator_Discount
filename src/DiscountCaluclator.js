// import statements 

import React, { useState } from 'react';
import './cal.css';
import styled from 'styled-components';


// styled components for button used for the web page

const Cbutton = styled.button`
  padding: 17px 128px;
  margin-left: 30px;
  margin-top: -3px;
  background-color: #1877F2;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
  &:hover {
    background-color: #145dbf;
  }
`;

const Rbutton = styled.button`
  padding: 17px 142px;
  margin-left: 30px;
  margin-top: -15px;
  background-color: #1877F2;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
  &:hover {
    background-color: #145dbf;
  }
`;


// Logic to be written used promise, useState() 
// Promise refer to either reslove or reject of the task

const DiscountCalculator = () => {
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');

  const calculateDiscount = () => {
    const discount = (originalPrice * discountPercentage) / 100;
    const priceAfterDiscount = originalPrice - discount;
    alert(`Final Price: ₹${priceAfterDiscount.toFixed(2)}`);
  };

  const resetCalculator = () => {
    setOriginalPrice('');
    setDiscountPercentage('');
  };

  
// placing tags to which user can view in the web page 

  return (
    <div>
      <div>
        <nav>
          <h2>Calculator</h2>
        </nav>
        <h4>Discount Calculator</h4>
        <p>Calculate Discounts in Seconds</p>
      </div>

      <div className='card'>
        <h5>Discount Calculator</h5>
        <input
          type='number'
          placeholder='Enter the Original Cost'
          value={originalPrice}
          required
          onChange={(e) => setOriginalPrice(e.target.value)}
        />
        <input
          type='number'
          placeholder='Select Discount %'
          value={discountPercentage}
          required
          onChange={(e) => setDiscountPercentage(e.target.value)}
        />
        <hr />
        <Cbutton onClick={calculateDiscount}>Calculate</Cbutton>
        <br /><br />
        <Rbutton onClick={resetCalculator}>Reset</Rbutton>
      </div>
    </div>
  );
};

export default DiscountCalculator;

