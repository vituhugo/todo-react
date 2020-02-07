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

        //
    }

    //2º passo, criar o metodo que foi adicionado no evento onClick,
    //   Esse methodo precisa fazer duas coisas:
    //      I.  Enviar os dados do formulário para o callback do componente pai pelo props
    //      II. Limpar os campos do formulário após o envio.
    handleSubmit(e) {
        //Envia o estado atual do formulário
        this.props.onSubmit(this.state.form);

        //Limpa os dados fo formulário
        this.setState({
            form: {
                name: "",
                description: "",
            }
        })
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