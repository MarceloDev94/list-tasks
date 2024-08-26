import React from "react"
import styled from "styled-components";

const Main = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    align-items: center;
    margin-bottom: 30px;
    padding-bottom: 80px;
`;

const MainContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Main>
            {children}
        </Main>
    );
};

export default MainContent