import PropTypes from 'prop-types';

const newMsg = {
  name: 'Salem',
  msg: 'Hello world',
};

const getResult = () => 4 + 4;

export const FirstApp = ({ title, subtitle, name }) => {
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      {/* Objects have to be convert to be able to display in the DOM */}
      {/* <h1>{JSON.stringify(newMsg)}</h1> */}
      <p>{subtitle}</p>
      <p>{subtitle}</p>
      <p>{subtitle}</p>h1
      <p>{name}</p>
      {/* <p>{getResult()}</p> */}
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};
FirstApp.defaultProps = {
  name: 'Salem Martinez',
  subtitle: 'No subtitle',
  // title: 'No title',
};
