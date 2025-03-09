import {
  ButtonBlock,
  CacheButton,
  HPowerBlock,
  InformationBlock,
  NumberBlock,
  NumberText,
  ServersButton,
  StatisticPageConteiner,
  TotalNumberText,
} from './StatisticPage.styled';

const StatisticPage = () => {
  return (
    <StatisticPageConteiner>
      <ButtonBlock>
        <CacheButton>Clear cache</CacheButton>
        <ServersButton>Selecting servers</ServersButton>
      </ButtonBlock>
      <InformationBlock>
        <HPowerBlock>
          <TotalNumberText>Total number of hPower</TotalNumberText>
          <NumberBlock>
            <NumberText>530 905</NumberText>
          </NumberBlock>
        </HPowerBlock>
      </InformationBlock>
    </StatisticPageConteiner>
  );
};

export default StatisticPage;
