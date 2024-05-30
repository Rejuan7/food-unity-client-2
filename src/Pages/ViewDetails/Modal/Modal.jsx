import { useState } from "react";

const RequestModal = ({ food }) => {
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleAdditionalNotesChange = (event) => {
    setAdditionalNotes(event.target.value);
  };

  const handleRequest = () => {
    // Implement request logic here
    console.log("Request sent with additional notes:", additionalNotes);
    closeModal();
  };

  return (
    <>
      <button className="btn w-3/4 text-xl btn-primary" onClick={openModal}>
        Request
      </button>
      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Request Form</h2>
            <p>Food Name: {food.foodName}</p>
            <p>
              Food Image: <img src={food.foodImage} alt={food.foodName} />
            </p>
            <p>Food ID: {food._id}</p>
            <p>Food Donator Email: {food.email}</p>
            <p>Food Donator Name: {food.donatorName}</p>
            <p>User Email: {/* Insert logic to get user email */}</p>
            <p>Request Date: {new Date().toLocaleString()}</p>
            <p>Pickup Location: {food.pickupLocation}</p>
            <p>Expire Date: {food.expire}</p>
            <textarea
              value={additionalNotes}
              onChange={handleAdditionalNotesChange}
              placeholder="Enter additional notes"
            />
            <button onClick={handleRequest}>Submit Request</button>
          </div>
        </div>
      )}
    </>
  );
};

export default RequestModal;
