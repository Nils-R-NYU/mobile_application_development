import ReactDOM from "react-dom";
import { useEffect } from "react";

export default function Modal(props) {
  const { children, onClose, actionBar } = props;
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      {/* Overlay */}
      <div onClick={onClose} className="fixed inset-0 bg-gray-300 opacity-50" />
      {/* Modal Content */}
      <div className="fixed inset-40 bg-white p-10 flex flex-col justify-between">
        <div>{children}</div>
        {/* Action Bar */}
        <div className="flex justify-end">{actionBar}</div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
