export default function Modal({
  children,
  setShowModal,
}: {
  children: React.ReactNode;
  setShowModal: any;
}) {
  return (
    <div>
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-black/80 opacity-90"></div>
          </div>
          <div className="flex justify-center items-center h-screen">
            <div
              className="bg-white h-[200px] w-[250px] px-4 py-5 rounded-lg overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <svg
                onClick={() => {
                  setShowModal(false);
                  }
                }
                className="h-6 w-6 text-red-600 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
