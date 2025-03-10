import styled from 'styled-components';
import { AiFillThunderbolt } from 'react-icons/ai';
import { MdCleaningServices } from 'react-icons/md';

export const BoostMainContainer = styled.div`
  border-radius: 35px;
  background-color: rgb(255, 255, 255);
  width: 333px;
  height: 120px;
  padding: 14px 27px;
  margin: 0 auto;
`;

export const NodeBlock = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 28px;
`;

export const BoldSpan = styled.span`
  font-weight: 700;
`;

export const NodeMainText = styled.h1`
  font-size: 14px;
  font-family: 'ProductSans', sans-serif;
  color: rgb(0, 0, 0);
  font-weight: bold;
  line-height: 1.2;

  margin-right: 20px;
`;

export const ProcentBlock = styled.div`
  margin-right: 31px;
`;

export const ProcentText = styled.p`
  font-size: 11px;
  font-family: 'ProductSans', sans-serif;
  color: rgb(0, 0, 0);
  line-height: 1.2;

  margin-bottom: 3px;
`;

export const ProgressBar = styled.div`
  display: flex;
  gap: 5px;
  background-color: rgb(239, 242, 245);
  width: 144px;
  height: 16px;
  border-radius: 8px;
  align-items: center;
  padding: 2px;
`;

export const Circle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgb(209, 216, 223);
  transition: background-color 0.3s ease-in-out;
`;

export const HPowerBlock = styled.div``;

export const HPowerText = styled.p`
  font-size: 11px;
  font-family: 'ProductSans', sans-serif;
  color: rgb(0, 0, 0);
  line-height: 1.2;
`;

export const HPowerNum = styled.p`
  font-size: 17px;
  font-family: 'ProductSans', sans-serif;
  color: rgb(0, 0, 0);
  font-weight: bold;
  line-height: 1.2;
`;

export const ThunderLight = styled(AiFillThunderbolt)`
  width: 12px;
  height: 12px;

  color: rgb(0, 0, 0);

  margin-left: -3px;
`;

export const ThunderDark = styled(AiFillThunderbolt)`
  width: 12px;
  height: 12px;

  color: rgb(255, 255, 255);

  margin-left: -3px;
`;

export const TimeBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TextTimeBlock = styled.p`
  font-size: 11px;
  font-family: 'ProductSans', sans-serif;
  color: rgb(0, 0, 0);

  line-height: 1.2;
`;

export const ClearBut = styled.button`
  font-size: 11px;
  font-family: 'ProductSans', sans-serif;
  color: rgb(18, 23, 32);
  font-weight: bold;
  line-height: 1.2;

  border: 0;
  background-color: transparent;

  display: flex;
  align-items: center;
`;

export const CleanIconLight = styled(MdCleaningServices)`
  width: 11px;
  height: 11px;

  color: rgb(18, 23, 32);

  margin-left: 3px;
`;
