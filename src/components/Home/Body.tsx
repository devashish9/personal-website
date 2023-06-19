import styled from "styled-components";

const BodyDiv = styled.div`
  flex: 1;
  padding: 3vw 0;
`;
const Text = styled.p`
  font-size: 2em;
`;

export default function HomePageBody() {
  return (
    <BodyDiv>
      <Text>
        I'm beginning to use my work on this website as a means for distraction
        from other work I need to get to. Time to stop for a bit lol.
      </Text>
    </BodyDiv>
  );
}
