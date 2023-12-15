/* eslint-disable react/prop-types */
export default function FullScreenModal({ image, onClose }) {
  return (
    <div className="fixed left-[50%] top-[50%] z-50 h-[90vh] w-[90vw] -translate-x-1/2 -translate-y-1/2 ">
      <button onClick={onClose}></button>
      <img src={image} className="rounded-3xl" />
    </div>
  );
}
