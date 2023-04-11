import React, { Component } from 'react'

class Contato extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nome: '',
            email: '',
            sexo: '',
            preferencia: ''
        }
        this.cadastrar = this.cadastrar.bind(this)
    }

    cadastrar(event) {
        event.preventDefault()
        const { nome, email, sexo, preferencia } = this.state
        if (nome === '' || email === '' || sexo === '' || preferencia === '') {
            alert('Campos em branco')
            return
        }
        alert(`Nome: ${nome} \nE-mail: ${email} \nSexo: ${sexo} \nPreferencia: ${preferencia}`)

    }

    render() {
        return (
            <div>
                <h1>Contato</h1>
                <form onSubmit={this.cadastrar}>
                    <label>Nome:</label>
                    <input type="text" value={this.state.nome} onChange={(e) => this.setState({ nome: e.target.value })} /><br />
                    <label>E-mail:</label>
                    <input type="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} /><br />
                    <label>Sexo:</label>
                    <select value={this.state.sexo} onChange={(e) => this.setState({ sexo: e.target.value })}>
                        <option value=''></option>
                        <option value='feminino'>Feminino</option>
                        <option value='masculino'>Masculino</option>
                    </select><br />
                    <label>Preferência:</label><br />
                    <div value={this.state.preferencia} onChange={(e) => this.setState({ preferencia: e.target.value })}>
                        <input type="radio" value='filme' name='preferencia' />Filme <br />
                        <input type="radio" value='serie' name='preferencia' />Série <br />
                    </div>
                    <button type='submit'>Enviar</button>
                </form>
            </div>
        )
    }
}

export default Contato

