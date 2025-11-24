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

function App() {
  return (
    <Father>
        <Box bgColor={"teal"}>
            <Text>Hello World</Text>
        </Box>
        <Box bgColor={"tomato"}/>
        <Circle bgColor={"yellow"} />
    </Father>
  )
}

export default App
