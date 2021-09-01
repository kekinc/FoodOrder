import React from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';


const MealItemForm = (props)=>{
    return (
        <form className={classes.form}>
            {/* id="quantity" name="quantity" type="number" */}
            <Input label="Quantity" input={{id:`quantity_${props.id}`, 
                        name: 'quantity',
                        type: 'number',
                        min: 1,
                        max:5,
                        defaultValue: 1}} />
            <button type="submit">Add to cart</button>
        </form>
    );
}

export default MealItemForm;