import toast from 'react-hot-toast';

export default function AlertMessage({
  id,
  message,
  Icon,
  visible,
  dismissCallback,
}) {
  return (
    <div
      className={`${
        visible ? 'animate-enter' : 'animate-leave'
      } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className='flex-1 w-0 p-4'>
        <div className='flex items-start'>
          <div className='flex-shrink-0 pt-0.5'>{Icon}</div>
          <div className='ml-3 flex-1'>
            <p className='mt-1 text-sm text-gray-500'>{message}</p>
          </div>
        </div>
      </div>
      <div className='flex border-l border-gray-200'>
        <button
          type='button'
          onClick={() => {
            toast.dismiss(id);
            if (dismissCallback) {
              dismissCallback();
            }
          }}
          className='w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer'
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}
