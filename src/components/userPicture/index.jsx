import { Container, ProfilePicture } from './styles';

const UserPicture = props => (
    <Container>
        <ProfilePicture src={props?.url} alt={props?.alternativeText}></ProfilePicture>
    </Container>
);

export default UserPicture;