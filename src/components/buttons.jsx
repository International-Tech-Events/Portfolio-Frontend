import { Download, Edit, Trash2 } from 'lucide-react';

const Buttons = () => {
  return (
    <div>
      <div className="absolute top-0 right-0 flex space-x-2 p-2">
        <span className="cursor-pointer">
          <Edit className="text-gray-600 hover:text-primary " />{' '}
        </span>
        <span className="cursor-pointer">
          <Download className="text-gray-600 hover:text-primary " />{' '}
        </span>
        <span className="cursor-pointer">
          <Trash2 className="text-gray-600 hover:text-primary " />{' '}
        </span>
      </div>
    </div>
  );
};

export default Buttons;
