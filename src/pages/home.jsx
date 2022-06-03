import Container from '../components/container';
import Header from '../components/header';
import UserContainer from '../components/userContainer';
import UserDetails from '../components/userDetails';
import UserNumbers from '../components/UserNumbers';
import UserPicture from '../components/userPicture';

export default function Home() {
    return (
        <Container>
            <Header />
            <UserContainer>
                <UserPicture url="https://avatars.githubusercontent.com/u/52041311?v=4" alternativeText="image" />
                <UserDetails name="Marcos Ferreira" login="#absolutetrue" bio="Texto sim Verdadeiro"/>
                <UserNumbers />
            </UserContainer>
        </Container>
    );
}