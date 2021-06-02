import * as React from "react";
import styled from 'styled-components';

export default (props: React.PropsWithChildren<{}>) => {
  return <Div>{props.children}</Div>;
}

const Div = styled.div`
    color: orange;
    font-weight: bold;
    display: inline-block;
`;