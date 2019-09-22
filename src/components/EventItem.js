import React from 'react';
import { transformText } from '../services/transformText';

const EventItem = ({ event }) => {

    const description = transformText(event.description)

    return (
        <div className='col-4 mt-3'>
            <div className='card'>
                <div className='card-header'>
                    {
                        event.logo ?
                            <img className='img-fluid' src={event.logo.url} alt={event.name.text} />
                            : null
                    }
                </div>
                <div className='card-body'>
                    <h3 className='card-title text-center'>{event.name.text}</h3>
                    <p className='text-justify'>{description}</p>
                </div>
                <div className='card-footer text-center'>
                    <a className='btn btn-secondary' target='blank' rel='noopener noreferrer' href={event.url}>
                        Mas informacion
                    </a>
                </div>

            </div>
        </div>
    );
};

export default EventItem;