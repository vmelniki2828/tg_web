import BoostContainer from 'components/BoostContainer/BoostContainer';
import { BoostPageMain, MainButton } from './BoostPage.styled';

const BoostPage = ({ itemTheme }) => {
  return (
    <BoostPageMain>
      <BoostContainer itemTheme={itemTheme} />
      <BoostContainer itemTheme={itemTheme} />
      <BoostContainer itemTheme={itemTheme} />

      <MainButton>Clear all nodes</MainButton>
    </BoostPageMain>
  );
};

export default BoostPage;
