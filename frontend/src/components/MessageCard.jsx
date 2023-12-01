import PropTypes from "prop-types";

export default function MessageCard({ contact }) {
  return <p>{contact.userEmail}</p>;
}
MessageCard.propTypes = {
  contact: PropTypes.shape({
    userEmail: PropTypes.string,
  }).isRequired,
};
