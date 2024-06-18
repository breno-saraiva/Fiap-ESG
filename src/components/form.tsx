import React, { useState } from "react";

function Form(): JSX.Element {
    function cadastrarUsuario(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(name);
        console.log(password);
        console.log(email);
    }

    const [name, setName] = useState<string | undefined>()
    const [password, setPassword] = useState<string | undefined>()
    const [email, setEmail] = useState<string | undefined>()

    return (
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">nome: </label>
                    <input type="text" placeholder="digite seu nome" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="emial">e-mail: </label>
                    <input type="email" placeholder="digite seu e-mail" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">senha: </label>
                    <input type="password" placeholder="digite sua senha" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    );
}

export default Form;