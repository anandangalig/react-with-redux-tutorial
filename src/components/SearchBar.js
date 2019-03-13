import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {searchTerm: ''};
        this.onFormSubmit = this.onFormSubmit.bind(this);
        // grab this, recreate the method thats bound to it. So, when constructor method is ran as the component is instantiated, onFormSubmit() will have its this keyword fixed to the original class. In result, we can refer to this inside onFormSubmit()
    }
    
    onFormSubmit(event) {
        // event object is automatically passed from the onChange callback function
        // this is undefined here. Why? Because reference to onFormSubmit is passed as a callback, thus losing the this.
        event.preventDefault();
        // this.props has the methods passed in from parent App. Using it to invoke a parent method and pass data from child:
        this.props.onFormSubmit(this.state.searchTerm);
    }

    render() {
        return(
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <label>Image Search</label>
                        <input 
                            type = 'text' 
                            value = {this.state.searchTerm}
                            // by routing the input through the state, we are gaining control over the element and the input, so it can be massaged if need be. Otherwise, the code needs to pull it from the DOM
                            onChange = {(event) => this.setState({searchTerm: event.target.value})} 
                            // if onChange={this.onInputChange} is passing that function as reference for the callback, do no include the (). If included, the code will run once during render
                            /> 
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;