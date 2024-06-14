import React, { useState } from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import "./InviteMemberModal.css";

const InviteMemberModal = ({ isOpen, closeModal, handleInvite }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleInviteClick = () => {
    if (name.trim() !== "" && email.trim() !== "" && role.trim() !== "") {
      handleInvite({ name, email, role });
      setName("");
      setEmail("");
      setRole("");
      closeModal();
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} className="modal-container">
      <div className="modal-header">
        <h2>Invite Member</h2>
        <button type='button' className="close-btn" onClick={closeModal}>✕</button>
      </div>
      <div className="modal-body">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={handleRoleChange}
          required
        />
      </div>
      <div className="modal-footer">
        <button type='button' className="primary" onClick={handleInviteClick}>Invite</button>
        <button type='button' className="secondary" onClick={closeModal}>Cancel</button>
      </div>
    </Modal>
  );
};

InviteMemberModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  handleInvite: PropTypes.func.isRequired,
};

export default InviteMemberModal;
