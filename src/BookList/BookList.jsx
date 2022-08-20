import {getAllBooks, removeBook} from "../api";
import { Flex, Text, Button, Link as StyledLink } from "rebass/styled-components";
import {Container} from "../shared";
import {useEffect, useState} from "react";
import {ThreeDots} from "react-loader-spinner";
import {Link as RouterLink} from "react-router-dom";

export const BookList = () => {
    let [data, setData] = useState([]);
    const fun = async () => {
        const newData = await getAllBooks();
        setData(newData)
    }

    const remove = async (id) => {
        setData(data.filter((item) => item.id !== id));
        await removeBook(id);
    }
    useEffect(() => {
        fun();
    },[])
    let [load, setLoad] = useState();
    useEffect(() => {
        if (data) {
            setLoad(<Container>
                <Flex flexDirection="column" alignItems="center">
                    {
                        data.map(({author, title, id}) => (
                            <Flex key={id} p={3} width="100%" alignItems="center">
                                <StyledLink as={RouterLink} to={`/update-book/${id}`} mr="auto">{title}</StyledLink>
                                <Text>{author}</Text>
                                <Button onClick={() => remove(id)} ml="5">
                                    Delete
                                </Button>
                            </Flex>
                        ))
                    }
                </Flex>
            </Container>)
        } else {
            setLoad(<Container>
                <Flex py="5" justifyContent="center">
                    <ThreeDots color="#ccc" height={30}/>
                </Flex>
            </Container>)
        }
    },[data])


    return (<Container>
        {load}
    </Container>)

}