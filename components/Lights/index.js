import styled from "styled-components";
import Light from "../Light";

const StyledLights = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;
// 4. Function receives prop 'lights' (array);
// in order to do that it needs to be lifted down from app.js, see step 5.
// 12. Function receives prop toggleLight & add onToggle in Light
export default function Lights({ lights, toggleLight }) {
  return (
    <StyledLights>
      {/* 7. After prop light has been lifted down from app.js through Rooms to Lights,
      we can use it for mapping to create a dynamic list from array: */}
      {lights.map((light) => (
        <li key={light.id}>
          <Light
            name={light.name}
            isOn={light.isOn}
            onToggle={() => toggleLight(light.id)}
          />
        </li>
      ))}
    </StyledLights>
  );
}
