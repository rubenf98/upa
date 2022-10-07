import React from 'react'
import styled, { withTheme } from "styled-components";
import { maxWidth } from '../../helper';

const Container = styled.section`
    width: 100%;
    max-width: ${maxWidth};
    margin: auto;
    padding: 100px 0px;  
    box-sizing: border-box;

    @media (max-width: ${maxWidth}){
        padding: 60px 20px;
    }

    h2, h3 {
        font-weight: bold;
    }

    p, h3 {
        font-size: 16px;
        text-align: justify;
    }
`;


function PrivacyPolicy() {
    return (
        <Container>
            <h2>POLÍTICA DE PRIVACIDADE</h2>
            <p>A política de privacidade exposta neste documento visa clarificar o cliente no que respeita à utilização das informações cedidas pelo mesmo, em assuntos relativos à privacidade e proteção de dados do utilizador.</p>
            <p>A UPA tratará todas as informações do utilizador de acordo com as disposições do Regulamento Geral 2016/679 sobre Proteção de Dados. Aquando da aquisição dos nossos produtos/serviços as informações de identificação e de contato de cada utilizador serão armazenadas e tratadas numa base de dados durante o tempo de utilização do produto comprado, normalmente terá a duração de 1 ano, salvo exceções.</p>
            <p>Alertamos para a possibilidade de ser alterada a nossa Política de Privacidade. Caso haja alterações à mesma, e aceda aos nossos produtos/serviços, consideramos que o utilizador aceitou tais alterações. Aconselhamos a consulta da nossa Política de Privacidade regularmente.</p>
            <p>Os tipos de informação que serão solicitados serão: informações pessoais (nome, endereço, endereço de email e número de telefone), informações dos serviços/produtos e informações de faturação (além das informações pessoais, podemos solicitar número de identificação fiscal, morada fiscal, número de cartão de débito, número de crédito, data de validade, endereço de cobrança e informações semelhantes.</p>
            <p>A finalidade da solicitação dos dados é enviar informações para os interessados sobre os produtos e atividades da UPA, bem como para fins de faturação e aquisição de produtos/serviços. Informamos que não haverá partilha de tais informações com terceiros.</p>

            <h3>Acesso e Alterações de Informações Pessoais</h3>
            <p>Após realizar o seu registo de cliente poderá realizar alterações seguindo as instruções no nosso site.</p>

            <h3>Modificações à Política de Privacidade</h3>
            <p>A utilização de informações cedidas, será sempre regido pela Política de Privacidade em vigor no momento em que recolhemos as informações. De modo a se inteirar de possíveis alterações nesta Política de Privacidade recomendamos que consulte a mesma regularmente</p>

            <h3>Como entrar em contato connosco</h3>
            <p>Pode sempre exercer os seus direitos de acesso, retificação ou exclusão enviando um email para  <a href="mailto:unidospelaatividade@gmail.com">unidospelaatividade@gmail.com</a>, com “Política de Privacidade “ na linha de assunto.</p>
            <p>Obrigada!</p>
        </Container>
    )
}

export default PrivacyPolicy