import React from 'react';

class SearchBar extends React.Component {
    onInputChange(event) {
        // event object is automatically passed from the onChange callback function
        
    }
    render() {
        return(
            <div className='ui segment'>
                <form className='ui form'>
                    <div className='field'>
                        <label>Image Search</label>
                        <input type='text' onChange={this.onInputChange} /> 
                        {/* onChange={this.onInputChange} is passing that function as reference for the callback. Therefore, we do no include the (). If included, the code will run once during render */}
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;