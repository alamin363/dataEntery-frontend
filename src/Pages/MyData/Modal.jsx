import React from "react";
import PrimaryButton from "../../component/Button/PrimaryButton";

const Modal = ({
  userDataFormHandler,
  setOption,
  setUpdatedData,
  setName,
  setMessage,
  data,
}) => {
  return (
    <div className="">
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="">
            <form className="userDataForm gap-4" onSubmit={userDataFormHandler}>
              <h4 className="lg:text-2xl">Please enter your Update</h4>
              <label htmlFor="">Name</label>
              <input
                type="text"
                placeholder="Name"
                required
                defaultValue={data?.data[0]?.name}
                onChange={(e) => setName(e.target.value)}
              />
              <label></label>
              <input
                defaultValue={data?.data[0]?.selectedData}
                type="text"
                onBlur={(e) => setUpdatedData(e.target.value)}
              />
              <input
                placeholder=""
                defaultValue={data?.data[0]?.Option}
                type="text"
                onBlur={(e) => setOption(e.target.value)}
              />

              <textarea
                placeholder="you are currently involved Sectors details"
                required
                cols="30"
                rows="10"
                onBlur={(e) => setMessage(e.target.value)}
              ></textarea>

              <PrimaryButton
                type="submit"
                classes="w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100"
              >
                Save
              </PrimaryButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
