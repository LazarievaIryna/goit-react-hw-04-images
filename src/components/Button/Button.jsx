import PropTypes from 'prop-types';
export const Button = ({ onLoad }) => {
  return (
    <div className="Button-wrapper">
      <button
        className="Button"
        type="button"
        onClick={() => {
          onLoad();
        }}
      >
        Load more
      </button>
    </div>
  );
};
Button.propTypes = {
  onLoad: PropTypes.func.isRequired,
};
