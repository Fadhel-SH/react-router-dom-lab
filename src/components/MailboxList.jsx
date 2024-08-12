// src/components/MailboxList.jsx

import { Link } from 'react-router-dom';

const MailboxList = ({ mailboxes }) => {
  return (
    <div>
      {mailboxes.map((mailbox) => (
        <Link to={`/mailboxes/${mailbox._id}`} key={mailbox._id}>
          <div className="mail-box">
            {mailbox._id}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MailboxList;
