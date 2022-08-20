import {Flex, Box, Link as StyledLink, Image} from 'rebass/styled-components'
import {Link} from "react-router-dom";
import {Container} from "./Container";
import './NavBar.css'

export const NavBar = () => {
    return (
        <Flex bg='black' color='white' justifyContent='center'>
            <Container>
            <Flex px={2} width='100%' alingItems='center'>
                <Link className='title' component={StyledLink} variant='nav' to='/'>
                    React query CRUD
                </Link>
                <Box mx='auto' />
                    <Link className='add' component={StyledLink} variant='nav' to='/create-book'>
                        + Add new book
                    </Link>
            </Flex>
            </Container>
        </Flex>
    );
}