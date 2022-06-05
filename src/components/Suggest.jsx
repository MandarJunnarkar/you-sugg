import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import CancelIcon from '@mui/icons-material/Cancel';

const Suggest = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  

  return (
    <>
      <div className="bg-white w-full h-auto rounded p-2 flex items-center gap-5">
        <div className="w-10 h-10 rounded-full">
          <img
            src={require(`../images/samay-raina.jpg`)}
            className="rounded-full"
          />
        </div>

        <div onClick={handleOpen} className="w-full h-fit flex rounded-3xl ">
          <input
            className="bg-indigo-100 h-10 w-full rounded-3xl hover:bg-indigo-200"
            placeholder="  Suggest a Topic..."
            type="text"
            disabled
          />
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          className="absolute top-1/2 left-1/2 bg-white w-auto"
          style={{ transform: "translate(-50%, -50%)", minWidth: '300px', maxWidth:'500px' }}
        >
          <div className="w-full border border-b text-lg p-3 bg-indigo-600 text-white flex justify-between items-center">
            <h1>Suggest Something</h1>
            <CancelIcon className="hover:text-gray-300" onClick={handleClose} />
          </div>

          <div className="flex items-center w-full gap-3 p-3">
            <div className="rounded-full h-10 w-10">
              <img
                className="rounded-full"
                src={require(`../images/samay-raina.jpg`)}
                alt=""
              />
            </div>
            <div>Samay Raina</div>
          </div>

          <div className="w-full p-3">
              <textarea rows={4} cols={20} className="w-full outline-none" placeholder="Whats on your mind?" />
          </div>
          
          <div className="w-full flex justify-center mb-3">
              <button className="bg-indigo-600 text-white px-10 py-1 rounded-md hover:bg-indigo-500">Post</button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Suggest;
