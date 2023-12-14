import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

// 1. Create an array in order to handle it as a state, see step 2.
// (In order to avoid a naming conflict between state 'lights' (in useState) the array will be named 'initialLights'.)
const initialLights = [
  { id: 1, name: "Living Room", isOn: false },
  { id: 2, name: "Kitchen", isOn: false },
  { id: 3, name: "Bedroom", isOn: false },
  { id: 4, name: "Bathroom", isOn: false },
  { id: 5, name: "Garage", isOn: false },
  { id: 6, name: "Porch", isOn: false },
  { id: 7, name: "Garden", isOn: false },
  { id: 8, name: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {
  // 2. to handle the array from step 1 as a state,
  // we create a variable in which we will save the lights
  // and the setter function (setLights) in order to change state later on:
  const [lights, setLights] = useState(initialLights);
  // 5. To lift down the state from const as a prop to the component,
  // it needs to be added as lights={lights} in <Component> in return statement:
  // (In doing so, component Lights can access the state.)

  // 9. Function for toggling light state:
  // id will determine for which room the light should be on or off.
  // in the function, we will call the setter function.

  // 15. Following const is not a state but a derived state for the number of lights with isOn=true.
  // it will be handed down as (derived) state to component functions.
  const lightsOnCount = lights.filter((light) => light.isOn).length;

  function toggleLight(id) {
    setLights(
      lights.map((light) =>
        light.id === id ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  // 17. Functions to toggle on and toggle off all lights on matching quick action buttons:
  // To use in other Components, they will be added as props in Component:
  function turnAllLightsOff() {
    setLights(lights.map((light) => ({ ...light, isOn: false })));
  }

  function turnAllLightsOn() {
    setLights(lights.map((light) => ({ ...light, isOn: true })));
  }

  return (
    <Layout isDimmed={lightsOnCount === 0}>
      <GlobalStyle />
      {/* 10. The function toggleLight needs to be lifted down
      because it is needed in Light component where the buttons are being clicked on. 
      (Next step in Rooms)*/}
      <Component
        {...pageProps}
        lights={lights}
        toggleLight={toggleLight}
        lightsOnCount={lightsOnCount}
        turnAllLightsOff={turnAllLightsOff}
        turnAllLightsOn={turnAllLightsOn}
      />
    </Layout>
  );
}
