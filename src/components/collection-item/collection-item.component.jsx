import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
    const {id, name, price, imageUrl} = item;

    return (
    <div key={id} className='collection-item'>
        <div 
            className='image' 
            style={{backgroundImage: `url(${imageUrl})`}}/>
        <div className='collection-footer'>
            <span className='name'> {name} </span>
            <span className='price'> {price} </span>
        </div>
        {/* on clicking the custom button here, 
            trigger the add item fuction, 
            using the item as the payload */}
        <CustomButton onClick={() => addItem(item)} inverted>
            ADD TO CART
            </CustomButton>
    </div>
)};

//send item to props
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps) (CollectionItem);