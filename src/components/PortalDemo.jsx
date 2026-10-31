
import { useState } from "react";
import { createPortal } from "react-dom";
import "./PortalDemo.css";

function PortalDemo() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <h1>React Portal Demo</h1>

      <button onClick={() => setShowModal(true)}>
        Open Modal
      </button>

      {showModal &&
        createPortal(
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Hello! This is a Modal</h2>
              <p>This modal is rendered using a React Portal.</p>

              <button onClick={() => setShowModal(false)}>
                Close Modal
              </button>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
export default PortalDemo;
