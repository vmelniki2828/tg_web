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
  ThunderDark,
  ThunderLight,
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

const StatisticPage = ({ itemTheme }) => {
  return (
    <StatisticPageConteiner>
      <ButtonBlock>
        <CacheButton>Clear cache</CacheButton>
        <ServersButton>Selecting servers</ServersButton>
      </ButtonBlock>
      <InformationBlock
        bgColor={
          itemTheme === '#ffffff' ? 'rgb(255, 255, 255)' : 'rgb(18, 23, 32)'
        }
      >
        <HPowerBlock>
          <TotalNumberText
            color={
              itemTheme === '#ffffff' ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)'
            }
          >
            Total number of hPower
          </TotalNumberText>
          <NumberBlock
            bgColor={
              itemTheme === '#ffffff' ? 'rgb(0, 122, 255)' : 'rgb(42, 47, 57)'
            }
          >
            <NumberText>530 905</NumberText>
            {itemTheme === '#ffffff' ? <ThunderLight /> : <ThunderDark />}
          </NumberBlock>
        </HPowerBlock>
        <UserBlock
          bgColor={
            itemTheme === '#ffffff' ? 'rgb(244, 245, 245)' : 'rgb(23, 28, 38)'
          }
        >
          <UserImg src={user_img} />
          <UserInfoBlock>
            <UserName
              color={
                itemTheme === '#ffffff' ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)'
              }
            >
              Poposha
            </UserName>
            <UserInfo>In the top 20%</UserInfo>
          </UserInfoBlock>
          <UserNumber
            color={
              itemTheme === '#ffffff' ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)'
            }
          >
            #20
          </UserNumber>
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
