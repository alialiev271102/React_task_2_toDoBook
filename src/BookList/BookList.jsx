import {getAllBooks} from "../api";
import {Container} from "../shared/Container";
import {Flex} from "rebass/styled-components";
import {useEffect, useState} from "react";
import {ThreeDots} from "react-loader-spinner";

export const BookList = () => {
    let [data, setData] = useState();
    const fun = async () => {
        data = await getAllBooks();
        setData(data)
        console.log(data)
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
                        data.data.map(({author, title, id}) => (
                            <div key={id}>
                                {author} - {title}
                            </div>
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