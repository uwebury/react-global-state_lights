import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

// 19. turnAllLightsOff, turnAllLightsOn added as props and function calls.
export default function QuickActions({
  lights,
  lightsOnCount,
  turnAllLightsOff,
  turnAllLightsOn,
}) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={turnAllLightsOff}
        disabled={lightsOnCount === 0}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={turnAllLightsOn}
        disabled={lightsOnCount === lights.length}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
