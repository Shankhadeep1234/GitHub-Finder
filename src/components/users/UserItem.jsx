import React from "react";
import PropTypes from "prop-types";

const UserItem = ({ user: { avatar_url, login, html_url } }) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt="avatar_image"
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <a
        href={html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-dark btn-sm my-1"
      >
        More
      </a>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
