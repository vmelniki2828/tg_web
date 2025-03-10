import BoostContainer from 'components/BoostContainer/BoostContainer';
import { BoostPageMain } from './BoostPage.styled';

const BoostPage = ({ itemTheme }) => {
  return (
    <BoostPageMain>
      <BoostContainer itemTheme={itemTheme} />
      <BoostContainer itemTheme={itemTheme} />
      <BoostContainer itemTheme={itemTheme} />
    </BoostPageMain>
  );
};

export default BoostPage;
