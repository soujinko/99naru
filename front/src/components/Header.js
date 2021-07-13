import React from "react";
import styled from "styled-components";

const Header = (props) => {
  const { text, children } = props;
  return (
    <React.Fragment>
      <Container>
        {text ? text : children}
      </Container>
    </React.Fragment>
  )
};

Header.defaultProps = {
  text: false,
  children: null,
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 10%;
  box-sizing: border-box;
  padding: 20px;
  font-size: 26px;
  font-weight: 800;
  border: 2px #f7f9f9 solid;
`;

export default Header;