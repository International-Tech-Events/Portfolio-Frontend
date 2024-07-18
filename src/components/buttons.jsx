import { Download, Edit, Trash2 } from 'lucide-react';

const Buttons = () => {
  return (
    <div>
      <div className="absolute top-0 right-0 flex space-x-2 p-2">
        <button className="cursor-pointer">
          <Edit className="text-gray-600 hover:text-primary" />{' '}
        </button>
        <button className="cursor-pointer">
          <Download className="text-gray-600 hover:text-primary " />{' '}
        </button>
        <Trash2 />
        {/* <button className="cursor-pointer">
          onClick={() => handleDelete(_id)}
          className="text-gray-600 hover:text-primary "
          {isDeleting ? <Loader /> : <Trash2 />}
        </button> */}
      </div>
    </div>
  );
};

export default Buttons;
