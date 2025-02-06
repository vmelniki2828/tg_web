import styled from 'styled-components';
import { CgMenuLeftAlt } from 'react-icons/cg';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BurgerIcon = styled(CgMenuLeftAlt)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  background-color: white;
`;
