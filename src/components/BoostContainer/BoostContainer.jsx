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
    <BoostMainContainer
      bgColor={
        itemTheme === '#ffffff' ? 'rgb(255, 255, 255)' : 'rgb(18, 23, 32)'
      }
    >
      <NodeBlock>
        <NodeMainText
          color={
            itemTheme === '#ffffff' ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)'
          }
        >
          Node1
        </NodeMainText>
        <ProcentBlock>
          <ProcentText
            color={
              itemTheme === '#ffffff' ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)'
            }
          >
            Cash - <BoldSpan>{percentage}%</BoldSpan>
          </ProcentText>
          <ProgressBar
            bgColor={
              itemTheme === '#ffffff' ? 'rgb(239, 242, 245)' : 'rgb(42, 47, 57)'
            }
          >
            {Array.from({ length: totalCircles }).map((_, index) => (
              <Circle
                key={index}
                bgColor={
                  itemTheme === '#ffffff'
                    ? 'rgb(209, 216, 223)'
                    : 'rgb(82, 90, 104)'
                }
              />
            ))}
          </ProgressBar>
        </ProcentBlock>
        <HPowerBlock>
          <HPowerText
            color={
              itemTheme === '#ffffff' ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)'
            }
          >
            hPower
          </HPowerText>
          <HPowerNum
            color={
              itemTheme === '#ffffff' ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)'
            }
          >
            85 {itemTheme === '#ffffff' ? <ThunderLight /> : <ThunderDark />}
          </HPowerNum>
        </HPowerBlock>
      </NodeBlock>
      <TimeBlock>
        <TextTimeBlock
          color={
            itemTheme === '#ffffff' ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)'
          }
        >
          <BoldSpan>3 hours</BoldSpan> before the efficiency decrease
        </TextTimeBlock>
        <ClearBut
          bgColor={
            itemTheme === '#ffffff' ? 'transparent' : 'rgb(255, 255, 255)'
          }
        >
          Clear <CleanIconLight />
        </ClearBut>
      </TimeBlock>
    </BoostMainContainer>
  );
};

export default BoostContainer;
