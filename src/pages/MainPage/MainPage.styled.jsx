import styled from 'styled-components';
import { BiQuestionMark } from 'react-icons/bi';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-between;
`;

export const StatusContainer = styled.div`
  width: 250px;
  height: 60px;
  background-color: rgb(255, 255, 255);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 40px;

  font-size: 20px;
  font-family: 'ProductSans', sans-serif;
  color: rgb(0, 0, 0);
  font-weight: bold;
  line-height: 1.2;
`;

export const CircleStatus = styled.div`
  width: 10px; /* Размер кружочка */
  height: 10px;
  border-radius: 50%; /* Круглая форма */
  background-color: #4caf50; /* Внутренний зеленый цвет */
  border: 2px solid #81c784; /* Ободок более светлого зеленого цвета */
  display: inline-block; /* Чтобы кружочек корректно отображался */
  box-shadow: 0 0 8px rgba(76, 175, 80, 0.6); /* Эффект свечения */
`;

export const QuestionCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: rgb(209, 216, 223);
  width: 30px;
  height: 30px;
  font-size: 20px;
  font-family: 'ProductSans', sans-serif;
  color: rgb(255, 255, 255);
  font-weight: bold;
  line-height: 1.2;
`;

export const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 95%; /* На всю ширину */
  position: absolute;
  bottom: 0;
  margin-bottom: 41px;
`;

export const ClearCasheBottom = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: rgb(0, 0, 0);
  width: 270px;
  height: 65px;
  border-radius: 32.5px;

  font-size: 20px;
  font-family: 'ProductSans', sans-serif;
  color: rgb(255, 255, 255);
  font-weight: bold;
  line-height: 1.2;
  cursor: pointer;
  border: none;
`;

export const UpdateBottom = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: rgb(0, 122, 255);
  width: 270px;
  height: 65px;
  border-radius: 32.5px;

  font-size: 20px;
  font-family: 'ProductSans', sans-serif;
  color: rgb(255, 255, 255);
  font-weight: bold;
  line-height: 1.2;
  cursor: pointer;
  border: none;
`;
