import react from 'react';
import { useHistory } from 'react-router-dom';



import { Container, NumberContainer } from './styles';

const UserNumbers = props => (
    <Container>
        <NumberContainer>
            <h1>13</h1>
            <h2>Repositórios</h2>
        </NumberContainer>

        <NumberContainer>
            <h1>15</h1>
            <h2>Seguidores</h2>
        </NumberContainer>

        <NumberContainer>
            <h1>18</h1>
            <h2>Seguindo</h2>
        </NumberContainer>

    </Container>
)

export default UserNumbers;