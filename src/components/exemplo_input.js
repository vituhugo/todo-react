import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class Form extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            form: {
                nome: "",
                descricao: ""
            }
        }

        //3º passo, essa linha é necessária sempre que um metodo for usado por
        // outro componente, ele força o metódo para não perder o "this"
        // quando executado de fora da classe.
        this.handleName = this.handleName.bind(this);
    }

    //2º passo, criar o metodo que foi adicionado no evento onChange.
    //   
    //   O que esse metódo faz?
    //
    //   Toda vez que for alterado o valor do input, esse methodo
    //   vai atualizar o novo valor pro state, caso o onChange não 
    //   seja implementado o input não alterará o valor do state
    handleName(event) {
        e.target.value
        this.setState({
            form: {
                ...this.state.form,
                name: e.target.value,
            }
        })
    }

    // Teste o que acontece quando você tenta editar o campo de descrição.
    // Depois implemente esse methodo com base no de cima para que o input funcione.
    handleDescription(event) {
        
    }

    render() {
        return (
            <input
                //1º passo, capturar o Evento onChange com um metodo deste componente
                //   e adicionar o valor do campo uma variável do state
                onChange={this.handleName}
                value={this.state.form.name} />

            <input
                //1º passo, capturar o Evento onChange com um metodo deste componente
                //   e adicionar o valor do campo uma variável do state
                onChange={this.handleDescription}
                value={this.state.form.description} />
        )
    }
}