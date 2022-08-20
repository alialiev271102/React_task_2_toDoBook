import {Box, Button} from "rebass/styled-components";
import {Input, Label} from "@rebass/forms/styled-components";
import {useForm} from "react-hook-form";
import {ThreeDots} from "react-loader-spinner";

export const BookForm = ({defaultValues, onFormSubmit, isLoading}) => {
    console.log(defaultValues);
    const {register, handleSubmit} = useForm({defaultValues});

    const onSubmit = data => {
        onFormSubmit(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{marginBottom: 3}}>
                <Label htmlFor="title">Title</Label>
                <Input {...register("title")} id="title" name="title" type="text" />
            </Box>
            <Box sx={{marginBottom: 3}}>
                <Label htmlFor="author">Author</Label>
                <Input {...register("author")} id="author" name="author" type="text"/>
            </Box>
            <Button variant="primary" mr={2}>
                { isLoading ? <ThreeDots color="#fff" height={10} /> : "Submit" }
            </Button>
        </form>
    );
};