import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const { is_flex, width, margin, padding, bg, children, center, left, right, _onClick, height, flex_end, flex_start } =
    props;

  const styles = {
    is_flex: is_flex,
    width: width,
    height: height,
    margin: margin,
    padding: padding,
    bg: bg,
    center: center,
    left: left,
    right: right,
    flex_end: flex_end,
    flex_start: flex_start,
  };
  return (
    <React.Fragment>
      <GridBox {...styles} onClick={_onClick}>
        {children}
      </GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  children: null,
  is_flex: false,
  width: "100%",
  height: "100%",
  padding: false,
  margin: false,
  bg: false,
  center: false,
  left: false,
  right: false,
  flex_end: false,
  flex_start: false,
  _onClick: () => {},
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.width};
  box-sizing: border-box;
  border-radius: 20px;
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content
    : space-between`
      : ""}
  ${(props) => (props.center ? `text-align: center` : "")}
  ${(props) => (props.left ? `text-align: left;` : '')}
  ${(props) => (props.right ? `text-align: right;` : '')}
  ${(props) => (props.flex_end ? `align-items: flex-end;` : '')}
  ${(props) => (props.flex_start ? `align-items: flex-start;` : '')}
`;

export default Grid;
