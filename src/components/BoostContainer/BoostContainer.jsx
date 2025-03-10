import {
  BoostMainContainer,
  NodeBlock,
  NodeMainText,
  ProcentBlock,
  ProcentText,
  ProgressBar,
  Circle,
  BoldSpan,
  HPowerBlock,
  HPowerText,
  HPowerNum,
  TimeBlock,
  ThunderLight,
  ThunderDark,
  TextTimeBlock,
  ClearBut,
  CleanIconLight,
} from './BoostContainer.styled';

const BoostContainer = ({ itemTheme }) => {
  const percentage = 70;
  const totalCircles = Math.round((percentage / 100) * 11);

  return (
    <BoostMainContainer>
      <NodeBlock>
        <NodeMainText>Node1</NodeMainText>
        <ProcentBlock>
          <ProcentText>
            Cash - <BoldSpan>{percentage}%</BoldSpan>
          </ProcentText>
          <ProgressBar>
            {Array.from({ length: totalCircles }).map((_, index) => (
              <Circle key={index} />
            ))}
          </ProgressBar>
        </ProcentBlock>
        <HPowerBlock>
          <HPowerText>hPower</HPowerText>
          <HPowerNum>
            85 {itemTheme === '#ffffff' ? <ThunderDark /> : <ThunderLight />}
          </HPowerNum>
        </HPowerBlock>
      </NodeBlock>
      <TimeBlock>
        <TextTimeBlock>
          <BoldSpan>3 hours</BoldSpan> before the efficiency decrease
        </TextTimeBlock>
        <ClearBut>
          Clear <CleanIconLight />
        </ClearBut>
      </TimeBlock>
    </BoostMainContainer>
  );
};

export default BoostContainer;
