import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'
const Formulario = () =>{

    const times = [
        'Front-End', 'Programação', 'Data Science', 'Back-End', 'Devops', 'Ux e Design',
        'Mobile', 'Inovacao e Gestão'
    ]

    return (
        <section className='formulario'>
            <form>
            <h2>Preencha os dados para criar o card do colabordador</h2>
            <CampoTexto label="Nome" placeholder="Digite seu nome"/>
            <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
            <CampoTexto label="Imagem" placeholder="Insira o endereço da imagem"/>
            <ListaSuspensa label="Time" itens = {times}/>
            </form>
        </section>
    )
}
export default Formulario;