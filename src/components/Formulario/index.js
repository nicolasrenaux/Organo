import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'
const Formulario = () =>{

    const times = [
        'Front-End', 'Programação', 'Data Science', 'Back-End', 'Devops', 'Ux e Design',
        'Mobile', 'Inovacao e Gestão'
    ]

    const aoSalvar = (evento) =>{
        evento.preventDefault();
        console.log('Formulario foi enviado')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o card do colabordador</h2>
            <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome"/>
            <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo"/>
            <CampoTexto label="Imagem" placeholder="Insira o endereço da imagem"/>
            <ListaSuspensa obrigatorio={true} label="Time" itens = {times}/>
            <Botao>
                Criar Card
            </Botao>
            </form>
        </section>
    )
}
export default Formulario;