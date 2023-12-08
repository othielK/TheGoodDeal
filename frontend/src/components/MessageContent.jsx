/* eslint-disable react/prop-types */

import "../styles/messages.css";

export default function MessageContent({ message }) {
  return (
    <div className="message_content">
      <p>{message.content}</p>
    </div>
  );
}
