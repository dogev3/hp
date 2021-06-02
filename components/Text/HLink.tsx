import * as React from "react";
import styled from 'styled-components';

export default (props: React.PropsWithChildren<React.HTMLProps<"a">>) => {
  return <Div href={props.href} target="_blank" rel=" noopener noreferrer">{props.children}</Div>;
}

const Div = styled.a`
    color: blue;
    font-weight: bold;
    display: inline-block;
    border-bottom : 0.1rem solid;
    cursor: pointer;
`;