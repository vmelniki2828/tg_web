import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatusContainer = styled.div`
  width: 250px;
  height: 60px;
  background-color: rgb(255, 255, 255);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;

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
