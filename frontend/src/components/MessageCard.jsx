import PropTypes from "prop-types";

export default function MessageCard({ contact }) {
  return (
    <>
      <p>{contact.userFname}</p>
      {/* <p>{contact.userEmail}</p>; */}
    </>
  );
}
MessageCard.propTypes = {
  contact: PropTypes.shape({
    userFname: PropTypes.string,
    // userEmail: PropTypes.string,
  }).isRequired,
};
