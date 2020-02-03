import React from 'react';

import Card from './card';
export default class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newName: "",
            newDescription: "",
            cards: JSON.parse(sessionStorage.getItem('cards') || "[]")
        }
    }
    
    handleSubmitNewCard(e) {
        e.preventDefault();
        
        const newCards = [
            ...this.state.cards,
            {
                id: +new Date(),
                name: this.state.newName,
                description: this.state.newDescription
            }
        ];
        this.setState({
            ...this.state,
            newDescription: "",
            newName: "",
            cards: newCards
        })
        
        sessionStorage.setItem('cards', JSON.stringify(newCards));
    }

    handleDescription(e) {
        this.setState({
            ...this.state,
            newDescription: e.target.value
        })
    }

    handleName(e) {
        console.log(this);
        this.setState({
            ...this.state,
            newName: e.target.value
        })
    }

    handleRemoveCard(card) {
        let newCards = this.state.cards;
        
        newCards.splice(newCards.indexOf(card), 1)

        this.setState({
            ...this.state,
            cards: newCards
        });

        sessionStorage.setItem('cards', JSON.stringify(newCards))
    }

    render() {
        let { cards, newName, newDescription } = this.state;

        return (
            <div className="content">
                <div className="row">
                    {cards.map((card, index) => (
                        <Card key={card.id} card={card} onRemoveCard={card => this.handleRemoveCard(card)} />
                    ))}
                </div>
                <form onSubmit={e => this.handleSubmitNewCard(e)} className="fixed-bottom bg-dark">
                    <div className="form-group col-sm-12">
                        <label className="form-label text-white">Nome da tarefa:</label>
                        <input className="form-control" onChange={e=>this.handleName(e)} value={newName} required/>
                    </div>
                    <div className="form-group col-sm-12">
                        <label className="form-label text-white">Descreva a tarefa:</label>
                        <textarea className="form-control" onChange={e => this.handleDescription(e)} value={newDescription} required/>
                    </div>
                    <div className="col-sm-12 text-right">
                        <button className="btn btn-primary">Adicionar Card</button>
                    </div>
                </form>
            </div>
        );
    }
}