import React from 'react';

const Modal = ({ deleteRooms, confirmDeleteRooms }) => {
    return (
        <div>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold my-5">Do you want to delete <span className='text-red-500'>{deleteRooms.name}</span></h3>
                    <button className='btn btn-primary mt-3 w-full' onClick={()=>confirmDeleteRooms(deleteRooms?._id)}>Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;