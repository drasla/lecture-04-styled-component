import styled from "styled-components";
import {Link} from "react-router";

const Container = styled.div`
    padding: 0 20px;
`;

const Header = styled.header`
    height: 15dvh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 48px;
    color: #9c88ff;
`;

const CoinList = styled.ul``;

const Coin = styled.li`
    background-color: white;
    color: ${props => props.color};
    border-radius: 15px;
    margin-bottom: 10px;

    /* 지금 작성하고 있는 li(Coin) 안에 a 태그가 있으면, 걔에 대해서 적용하는 CSS */
    a {
        padding: 20px;
        display: block; /* 원래 a 태그는 inline 요소임. 그것을 block 요소로 변경함 */
    }
`;

const coins = [
    {
        id: "btc-bitcoin",
        name: "Bitcoin",
        symbol: "BTC",
        rank: 1,
        is_new: false,
        is_active: true,
        type: "coin",
    },
    {
        id: "eth-ethereum",
        name: "Ethereum",
        symbol: "ETH",
        rank: 2,
        is_new: false,
        is_active: true,
        type: "coin",
    },
    {
        id: "hex-hex",
        name: "HEX",
        symbol: "HEX",
        rank: 3,
        is_new: false,
        is_active: true,
        type: "token",
    },
];

function Home() {
    return <>
        <Container>
            <Header>
                <Title>코인</Title>
            </Header>
            <CoinList>
                {coins.map(
                    (item, index) => {
                        // HTML에서 &를 하고 특정 키워드를 넣으면 특수문자가 표시됨
                        // &rarr 은 우측 화살표 특수문자
                        return <Coin key={index}>
                            <Link to={`/${item.id}`}>{item.name} &rarr;</Link>
                        </Coin>
                    }
                )}
            </CoinList>
        </Container>
    </>
}

export default Home;