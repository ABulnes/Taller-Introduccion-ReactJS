import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            category: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleEvents(this.state);
    }


    render() {
        return (
            
            <form
                className='form-row p-4 m-3'
                onSubmit={this.handleSubmit}
            >
                <div className='col-4'>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='Nombre de Evento o Ciudad'
                        name='name'
                        onChange={this.handleChange}
                    />
                </div>
                <div className='col-4'>
                    <select
                        className='form-control'
                        name='category'
                        onChange={this.handleChange}
                    >
                        <option value=''>Seleccione una opcion</option>
                        {this.props.categories.map(
                            category =>
                                <option key={category.id} value={category.id}>
                                    {category.name_localized}
                                </option>
                        )}
                    </select>
                </div>
                <div className='col-4'>
                    <input
                        className='btn btn-primary btn-block'
                        type='submit'
                        value='Buscar eventos'
                    />
                </div>
            </form>
        )
    }
}

export default Form;