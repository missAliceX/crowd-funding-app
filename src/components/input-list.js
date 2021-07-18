import styled from "styled-components";
import Input from "components/input";
import React, { useState } from "react";

const Wrapper = styled.div`
  > * {
    margin: 0.25em 0;
  }
`;

function InputList(props) {
  const [items, setItems] = useState(props.items || []);
  const id = props["id"];

  return (
    <Wrapper role="list" data-testid={id}>
      {items.map((item, i) => {
        return (
          <Input
            key={i}
            id={`${id}-${i}`}
            data-testid={`${id}-${i}`}
            value={item}
            onChange={e => {
              items[i] = e.target.value;
              setItems([...items]);
            }}
            onDelete={e => {
              items.splice(i, 1);
              setItems([...items]);
            }}
            onBlur={e => {
              if (e.target.value === "") {
                items.splice(i, 1);
              }
              setItems([...items]);
            }}
          />
        );
      })}
      <Input
        data-testid={`${id}-add`}
        placeholder="add another..."
        addAnother={true}
        onChange={e => {
          items.push(e.target.value);
          setItems([...items]);
        }}
      />
    </Wrapper>
  );
}

export default InputList;
