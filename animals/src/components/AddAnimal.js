import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddAnimal extends Component {

    state ={
        title: ''
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addAnimal(this.state.title);
        this.setState({title:''})
    }


    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input type='text' name='title' placeholder='Add Animal...' value={this.state.title} onChange={this.onChange} style={{flex:'10', padding: '5px'}}  />
                <input type='submit' value='Submit' className='btn' style={{flex: '1'}}/>
            </form>
        )
    }
}
//Proptypes
AddAnimal.propTypes = {
    addAnimal: PropTypes.func.isRequired
}

export default AddAnimal
