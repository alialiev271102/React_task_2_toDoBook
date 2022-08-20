import { BookForm, Container } from "../shared";
import { useQuery, useMutation } from "react-query";
import { Box, Heading, Flex } from "rebass/styled-components";
import { getAllBooks, updateBook } from "../api";
import { useParams, useNavigate } from "react-router-dom";
import {ThreeDots} from "react-loader-spinner";

export const UpdateBook = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { data, error, isLoading, isError } = useQuery(["book", { id }], getAllBooks);
    const { mutateAsync, isLoading: isMutating } = useMutation(updateBook)

    console.log(id);

    const onFormSubmit = async (formData) => {
        await mutateAsync({...formData, id})
        navigate("/")
    }

    if (isLoading) {
        return (
            <Container>
                <Flex py="5" justifyContent="center">
                    <ThreeDots color="#cccccc" height={30} />
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
                <Heading sx={{ marginBottom: 3 }}>Update Book</Heading>
                <BookForm defaultValues={data} onFormSubmit={onFormSubmit} isLoading={isMutating}/>
            </Box>
        </Container>
    );
};