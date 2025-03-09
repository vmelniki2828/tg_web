import {
  ButtonBlock,
  CacheButton,
  HomeButton,
  HPowerBlock,
  InformationBlock,
  NumberBlock,
  NumberText,
  ServersButton,
  StatisticPageConteiner,
  TextInfo,
  TotalNumberText,
  UserBlock,
  UserImg,
  UserInfo,
  UserInfoBlock,
  UserInfoTextBlock,
  UserName,
  UserNumber,
} from './StatisticPage.styled';
import user_img from '../../images/user_img.png';

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
        <UserBlock>
          <UserImg src={user_img} />
          <UserInfoBlock>
            <UserName>Poposha</UserName>
            <UserInfo>In the top 20%</UserInfo>
          </UserInfoBlock>
          <UserNumber>#20</UserNumber>
        </UserBlock>
        <UserInfoTextBlock>
          <TextInfo>
            Every 14 days, 1% of the servers are shut down. Keep an eye on your
            capacities so as not to disappear from the rating.
          </TextInfo>
        </UserInfoTextBlock>
      </InformationBlock>
      <HomeButton>Go to home</HomeButton>
    </StatisticPageConteiner>
  );
};

export default StatisticPage;
