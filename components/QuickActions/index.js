import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

// 19. turnAllLightsOff, turnAllLightsOn added as props and function calls.
export default function QuickActions({ turnAllLightsOff, turnAllLightsOn }) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => {
          turnAllLightsOff();
        }}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={() => {
          turnAllLightsOn();
        }}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
