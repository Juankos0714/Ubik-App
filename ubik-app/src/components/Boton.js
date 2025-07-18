import PropTypes from 'prop-types';

function Boton({ texto, link }) {
  return (
    <a
      className="boton"
      href={link}
    >
      {texto}
    </a>
  );
}

Boton.propTypes = {
  texto: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Boton;