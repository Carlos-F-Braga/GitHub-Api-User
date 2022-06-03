import react from 'react';
import { useHistory } from 'react-router-dom';



import { Container, NumberContainer, NumberH1, NumberH2 } from './styles';

const UserNumbers = props => (
    <Container>
        <NumberContainer>
            <NumberH1>13</NumberH1>
            <NumberH2>Repositórios</NumberH2>
        </NumberContainer>

        <NumberContainer>
            <NumberH1>15</NumberH1>
            <NumberH2>Seguidores</NumberH2>
        </NumberContainer>

        <NumberContainer>
            <NumberH1>18</NumberH1>
            <NumberH2>Seguindo</NumberH2>
        </NumberContainer>

    </Container>
)

export default UserNumbers;