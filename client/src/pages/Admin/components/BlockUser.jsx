import React from "react";
import Dialog from "@mui/material/Dialog";
import PropTypes from "prop-types";

export default function BlockUser(props) {
  const { onClose, open, status } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <div className="w-[400px] p-10">
        <h1 className=" text-center text-2xl font-semibold pb-10">BLOCK</h1>
        <div className="text-center">
          {status === "Active" ? "Block successfully!" : "Unblock successfully!"}
        </div>
        <div className="text-right mt-5">
          <button
            onClick={handleClose}
            className="bg-slate-500 rounded-md px-3 py-2"
          >
            Close
          </button>
        </div>
      </div>
    </Dialog>
  );
}

BlockUser.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
