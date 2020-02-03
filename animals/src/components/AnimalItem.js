import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class AnimalItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc solid',
            textDecoration: this.props.animal.adopted ? 'line-through' : 'none'
        }
    }

        render() {
            const {id, title} = this.props.animal;
            return (
                <div style={this.getStyle()}>
                    <p>
                    <input type='checkbox' onChange={this.props.markAdopted.bind(this, id)}/> {' '}
                    {title}
                    <button onClick={this.props.delAnimal.bind(this, id)} style={btnStyle}>X</button>
                    </p>
                </div>
            )
        }
    }

    //Proptypes
    AnimalItem.propTypes = {
        animals: PropTypes.object.isRequired,
        markAdopted: PropTypes.func.isRequired,
        delAnimal: PropTypes.func.isRequired
}

    const btnStyle = {
        background: '#ff0000',
        color: '#fff',
        border: 'none',
        padding: '5px 8px',
        borderRadius: '50%',
        cursor: 'pointer',
        float: 'right'
    }
    export default AnimalItem
