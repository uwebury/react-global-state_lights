import { LightButton, Icon, Text, Name, State } from "./Light.styled";

// 8. Locally managed state is being removed; step 9. in app.js.
// 13. on Toggle prop added.
// 14. isOn prop added, next step in Lights.
export default function Light({ name, onToggle, isOn }) {
  return (
    <LightButton type="button" onClick={onToggle} $isOn={isOn}>
      <Icon $isOn={isOn}>💡</Icon>
      <Text>
        <Name>{name}</Name>
        <State>{isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
