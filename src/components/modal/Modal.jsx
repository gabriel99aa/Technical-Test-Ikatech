import React from "react";
import PropTypes from "prop-types";

const Modal = ({ title, content, secondaryAction, primaryAction }) => {
  return (
    <>
      <div
        className="modal fade modal-lg"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{content}</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary">
                {secondaryAction}
              </button>
              <button type="button" className="btn btn-primary">
                {primaryAction}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  content: PropTypes.any,
  secondaryAction: PropTypes.string, 
  primaryAction: PropTypes.string,
};

export default Modal;
