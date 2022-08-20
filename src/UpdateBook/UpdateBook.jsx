import {BookForm, Container} from "../shared";
import {useMutation, useQuery} from "react-query";
import {Box, Flex, Heading} from "rebass/styled-components";
import {getBook, updateBook} from "../api";
import {useNavigate, useParams} from "react-router-dom";
import {ThreeDots} from "react-loader-spinner";

export const UpdateBook = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    let {data, error, isLoading, isError} = useQuery(["book", {id}], getBook);
    const {mutateAsync, isLoading: isMutating} = useMutation(updateBook)

    const onFormSubmit = async (formData) => {
        await mutateAsync({...formData, id})
        navigate("/")
    }
    console.log(data);

    if (isLoading) {
        return (
            <Container>
                <Flex py="5" justifyContent="center">
                    <ThreeDots color="#cccccc" height={30}/>
                </Flex>
            </Container>
        );
    }

    if (isError) {
        return (
            <Container>
                <Flex py="5" justifyContent="center">
                    Error: {error.message}
                </Flex>
            </Container>
        );
    }

    return (
        <Container>
            <Box
                sx={{
                    py: 3,
                }}
            >
                <Heading sx={{marginBottom: 3}}>Update Book</Heading>
                <BookForm defaultValues={data} onFormSubmit={onFormSubmit} isLoading={isMutating}/>
            </Box>
        </Container>
    );
};