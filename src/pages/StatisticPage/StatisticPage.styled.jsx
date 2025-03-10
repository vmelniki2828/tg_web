import styled from 'styled-components';
import { AiFillThunderbolt } from 'react-icons/ai';

export const StatisticPageConteiner = styled.div``;

export const ButtonBlock = styled.div`
  margin-top: 34px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CacheButton = styled.button`
  background-color: rgb(23, 28, 38);

  width: 161px;
  height: 40px;

  font-size: 11px;
  font-family: 'ProductSans', sans-serif;
  color: rgb(255, 255, 255);
  font-weight: bold;
  line-height: 1.2;

  border-radius: 30px;

  margin-right: 12px;
`;

export const ServersButton = styled.button`
  background-color: rgb(0, 122, 255);
  width: 161px;
  height: 40px;

  font-size: 11px;
  font-family: 'ProductSans', sans-serif;
  color: rgb(255, 255, 255);
  font-weight: bold;
  line-height: 1.2;

  border: 0;
  border-radius: 30px;
`;

export const InformationBlock = styled.div`
  margin: 12px auto;
  border-radius: 35px;
  background-color: ${({ bgColor }) => bgColor};

  max-width: 332px;
  height: 259px;

  padding: 21px 24px 25px 24px;
`;

export const HPowerBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const TotalNumberText = styled.p`
  font-size: 12px;
  font-family: 'ProductSans', sans-serif;
  color: ${({ color }) => color};
  line-height: 1.905;

  margin-right: 6px;

  font-weight: bold;
`;

export const NumberBlock = styled.div`
  background-color: ${({ bgColor }) => bgColor};

  width: 72px;
  height: 24px;

  border-radius: 15px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NumberText = styled.p`
  font-size: 12px;
  font-family: 'ProductSans', sans-serif;
  color: #ffff;
  line-height: 1.905;

  font-weight: bold;
`;

export const UserBlock = styled.div`
  background-color: ${({ bgColor }) => bgColor};

  width: 285px;
  height: 57px;

  margin-top: 21px;

  border-radius: 30px;

  display: flex;
  align-items: center;

  padding: 9px;
`;

export const UserImg = styled.img`
  width: 39px;
  height: 39px;

  margin-right: 12px;
`;

export const UserInfoBlock = styled.div`
  margin-right: 95px;
`;

export const UserName = styled.p`
  font-size: 12px;
  font-family: 'ProductSans', sans-serif;

  font-weight: bold;
  line-height: 1.914;
  margin-bottom: -8px;

  color: ${({ color }) => color};
`;

export const UserInfo = styled.p`
  font-size: 11px;
  font-family: 'ProductSans', sans-serif;
  color: rgb(147, 152, 161);
  line-height: 2.01;
`;

export const UserNumber = styled.p`
  font-size: 14px;
  font-family: 'ProductSans', sans-serif;
  color: ${({ color }) => color};
  font-weight: bold;
  line-height: 1.2;
`;

export const UserInfoTextBlock = styled.div`
  border-radius: 30px;
  background-color: rgba(0, 122, 255, 0.102);
  width: 285px;
  height: 90px;

  margin-top: 24px;

  padding: 23px;
`;

export const TextInfo = styled.p`
  font-size: 11px;
  font-family: 'ProductSans', sans-serif;
  color: rgb(72, 160, 255);
  line-height: 1.2;
`;

export const HomeButton = styled.button`
  display: block;
  margin: auto;
  text-align: center;

  background-color: rgb(255, 255, 255);

  width: 332px;
  height: 40px;

  font-size: 11px;
  font-family: 'ProductSans', sans-serif;
  color: rgb(0, 0, 0);
  font-weight: bold;
  line-height: 1.2;

  border: 0;
  border-radius: 30px;
`;

export const ThunderLight = styled(AiFillThunderbolt)`
  width: 12px;
  height: 12px;

  color: rgb(0, 0, 0);

  margin-left: 4px;
`;

export const ThunderDark = styled(AiFillThunderbolt)`
  width: 12px;
  height: 12px;

  color: rgb(255, 255, 255);

  margin-left: 4px;
`;
