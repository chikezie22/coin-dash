import { FadeLoader } from 'react-spinners';
const override = {
  display: 'block',
  margin: '0 auto',
};
function Spinner({ color = 'green', size = 150 }) {
  return (
    <div>
      <FadeLoader color={color} size={size} cssOverride={override} aria-label="Loading..." />
    </div>
  );
}

export default Spinner;
