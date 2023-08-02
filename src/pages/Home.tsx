import { Link } from 'react-router-dom';
import { Button, Container, Header, Segment, Image, Divider } from "semantic-ui-react";
import { useStore } from '../stores/store';
import LoginForm from '../components/UI/LoginForm/LoginForm';
import RegisterForm from '../components/UI/RegisterForm/RegisterForm';
import FacebookLogin from '@greatsumini/react-facebook-login';

export default function HomePage() {
    const {userStore,modalStore} = useStore();
    return (
        <Segment inverted textAlign='center' vertical className='masthead' >
            <Container text>
                <Header as='h1' inverted>
                    <Image size='massive' src='/assets/logo.png' alt='logo' style={{ marginBottom: 12 }} />
                    Reactivities
                </Header>
                {userStore.isLoggedIn ? (
                    <>
                <Header as='h2' inverted content='Welcome to Reactivities' />
                <Button as={Link} to='/activities' size='huge' inverted>
                    Go To Activities!
                </Button>
                    </>
                ) : (
                    <>
                        <Button onClick={() => modalStore.openModal(<LoginForm/>)} as={Link} size='huge' inverted>
                            Login!
                        </Button>
                        <Button onClick={() => modalStore.openModal(<RegisterForm/>)} as={Link} size='huge' inverted>
                            Register!
                        </Button>
                        <Divider horizontal inverted>
                            Or
                        </Divider>
                        <Button 
                             as={FacebookLogin}
                             appId='150890864658576'
                             size='huge' 
                             inverted 
                             color='facebook'
                             content='Login with Facebook'
                             loading={userStore.fbLoading}
                             onSuccess={(response: any) => {
                                userStore.facebookLogin(response.accessToken);
                                console.log('Login success',response);
                             }}
                             onFail={(response: any) => {
                                console.log('Login failed',response);
                             }}
                        />
                    </>
                )}
            </Container>
        </Segment>
    )
}