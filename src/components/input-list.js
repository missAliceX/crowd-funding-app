import styled from "styled-components";
import Input from "components/input";
import React, { useState } from "react";

const Wrapper = styled.div`
  > * {
    margin: 0.25em 0; /* this adds vertical space between the input fields */
  }
`;

// InputList is a list of input fields that supports adding and removing based on user input
function InputList(props) {
  // items: a list of strings that represents the text in the input fields
  // setItems: updates old items with the given new items
  const [items, setItems] = useState(props.items || []);
  const id = props["data-testid"];

  return (
    <Wrapper role="list" data-testid={id}>
      {items.map((item, i) => {
        return (
          <Input
            key={i}
            data-testid={`${id}-${i}`}
            value={item}
            onKeyPress={e => {
              if (e.key === "Enter") {
                // Adds another input when the user hits the Enter key
                items.push("");
                setItems([...items]);
              }
            }}
            onChange={e => {
              // Updates the value of the item when user types
              items[i] = e.target.value;
              setItems([...items]);
            }}
            onDelete={e => {
              // Deletes the item when user clicks the delete icon
              items.splice(i, 1);
              setItems([...items]);
            }}
            onBlur={e => {
              // Deletes the item if it's empty when user clicks away from the input
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
        // preventEdit is a flag to tell the Input component it should not be editted}
        preventEdit={true}
        onChange={e => {
          // Adds another input when the user types in the "add another" input field
          items.push(e.target.value);
          setItems([...items]);
        }}
      />
    </Wrapper>
  );
}

export default InputList;
