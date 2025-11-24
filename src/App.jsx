import styled from "styled-components";

const Father = styled.div`
    display: flex;
`;

const Box = styled.div`
    background-color: ${(props) => props.bgColor};
    width: 100px;
    height: 100px;
`;

const Text = styled.span`
    color: white;
`;

const Circle = styled(Box)`
    border-radius: 50px;
`;

const Input = styled.input.attrs({ required: true })`
    background-color: tomato;
`;

function App() {
  return (
    <Father as={"header"}>
        <Input />
        <Input />
        <Input />
        <Input />
        <Box bgColor={"teal"}>
            <Text>Hello World</Text>
        </Box>
        <Box bgColor={"tomato"}/>
        <Circle bgColor={"yellow"} />
    </Father>
  )
}

export default App
