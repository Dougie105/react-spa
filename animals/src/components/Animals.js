import React, { Component } from 'react';
import AnimalItem from './AnimalItem'
import PropTypes from 'prop-types';

class Animals extends Component {
    render() {
        return this.props.animals.map((animal) => (
            <AnimalItem key={animal.id} animal={animal} markAdopted={this.props.markAdopted} delAnimal={this.props.delAnimal}/>
        ));
    }
}

//Proptypes
Animals.propTypes ={
    animals: PropTypes.array.isRequired,
    markAdopted: PropTypes.func.isRequired,
    delAnimal: PropTypes.func.isRequired
}



export default Animals;
