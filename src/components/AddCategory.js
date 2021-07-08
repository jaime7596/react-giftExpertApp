import PropTypes from 'prop-types'
import React, {useState} from 'react'


export const AddCategory = ({setCategories, Categories}) => {
    
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        console.log(Categories);
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(cats => [...cats, inputValue]);
            setInputValue('');
        }
    }

    return (
        <>
            <h2>Add Category</h2>
            <form onSubmit={handleSubmit}> 
                <input
                    type="text"
                    value= {inputValue}
                    onChange={handleInputChange}
                />
            </form>
        </>

    )

}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
