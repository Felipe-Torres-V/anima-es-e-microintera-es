import React from 'react'
import styled from 'styled-components';

const DropDownLI = styled.ul`
  padding: 10px 0;
`;
const DropDownText = styled.a`
  max-width: 100px;
  color: white;
  cursor: default;
  flex-wrap: wrap;
  margin-left: 10px;
`;

const DropDownItem = (props) => {
  return (
    <div style={{
        'display': 'flex',
        'margin': '10px auto'
    }}>
        <DropDownLI>
            <DropDownText>{props.text}</DropDownText>
        </DropDownLI>
    </div>
  )
}

export default DropDownItem