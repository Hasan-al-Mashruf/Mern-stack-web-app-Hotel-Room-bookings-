import React from 'react';

const ModalForEdit = ({ editRooms, confirmEditRooms, setEditRooms }) => {
    console.log(editRooms)

    const updateRoomData = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const price = parseInt(form.price.value)

        const details = form.details.value
        const guest = form.guest.value
        const children = form.children.value
        const image = form.image.files

        const formData = new FormData();
        formData.append('image', image[0]);
        fetch(`https://api.imgbb.com/1/upload?&key=26198e22613019ba3964d468733ea9ea`, {
            method: 'POST',
            body: formData
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.data) {
                    const image = result.data.url
                    const updateData = {
                        name,
                        price,
                        details,
                        people: {
                            adults: guest,
                            children,
                        },
                        image
                    }
                    confirmEditRooms(updateData)
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });

    }

    return (
        <div>
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-2 top-2" onClick={()=>setEditRooms(null)}>✕</label>
                    <form action="" className='p-8 rounded-none' spellcheck="false" onSubmit={updateRoomData}>
                        <div className="form-control border-b border-[#5c5c5c7e] my-1">
                            <input type="text" className="input bg-transparent px-0 text-gray-400 focus:bg-transparent " placeholder='Name' name='name' defaultValue={editRooms?.name} />
                        </div>
                        <div className="form-control border-b border-[#5c5c5c7e] my-1">
                            <input type="text" className="input bg-transparent px-0 text-gray-400 focus:bg-transparent" placeholder='price' name='price' defaultValue={editRooms?.prize} />
                        </div>
                        <div className="form-control border-b border-[#5c5c5c7e] my-1 focus:bg-transparent ">
                            <textarea className="textarea bg-transparent px-0 text-gray-400 focus:bg-transparent" placeholder="Details" name='details' defaultValue={editRooms?.details} />
                        </div>
                        <div className="form-control ">
                            <div className='flex my-2'>
                                <input type="number" className="input bg-transparent px-0 w-20 text-gray-400 focus:bg-transparent" min={1} placeholder='guest' name='guest' defaultValue={editRooms?.people.adults} />
                                <input type="number" className="input bg-transparent px-0 w-20 text-gray-400 ml-4 focus:bg-transparent" min={1} placeholder='children' name='children' defaultValue={editRooms?.people.children} />
                            </div>
                        </div>

                        <div className="form-control border border-[#5c5c5c7e] my-2 py-10">
                            <input type="file" className="input bg-transparent px-2 text-gray-400 w-52 mx-auto focus:bg-transparent" placeholder='price' name='image' />
                        </div>
                        <div className="mt-4">
                            <input type="submit" value='submit' className='btn bg-transparent text-[#9CA3AF] border-[#9CA3AF] border rounded-none' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ModalForEdit;