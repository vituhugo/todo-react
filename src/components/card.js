import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class Card extends React.Component {
    render() {
        let { onRemoveCard, card } = this.props;
        let create_date = (new Date(card.id).toString());

        return (
            <div className="col-auto">
                <div className="card mb-4 card-lg">
                    <div className="card-header">
                        <h2 className="card-title">
                            <span>{card.name}</span>
                            <button
                                className="btn btn-danger ml-3"
                                onClick={(e) => onRemoveCard(card)}>
                                x
                            </button>
                        </h2>
                    </div>
                    <div className="card-body">
                        <p className="card-text">
                            {card.description}
                        </p>
                    </div>
                    <div className="card-footer">
                        <small>criação: {create_date}</small>
                    </div>
                </div>
            </div>
        )
    }
}