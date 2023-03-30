import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';
import Modal from '../../components/Modal/Modal';
import ModalForEdit from '../../components/ModalForEdit/ModalForEdit';

const RoomList = () => {
    const [deleteRooms, setDeleteRooms] = useState(null)
    const [editRooms, setEditRooms] = useState(null)
    const { refetch, isLoading, error, data = [] } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('https://hotelbookings-server.vercel.app/rooms')
                .then((res) => res.json())
    })

    const roomData = (e) => {
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
                        prize: price,
                        details,
                        people: {
                            adults: guest,
                            children,
                        },
                        img: image
                    }
                    form.reset()
                    saveRoomData(updateData)
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });


    }

    const saveRoomData = (updateData) => {
        fetch("https://hotelbookings-server.vercel.app/room", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);

                refetch()
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }


    const confirmDeleteRooms = (id) => {
        setDeleteRooms(null)
        fetch(`https://hotelbookings-server.vercel.app/deleteRooms?id=${id}`, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    refetch()
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            })

    }


    const confirmEditRooms = (updateData) => {
        console.log(updateData)
        setEditRooms(null)
        fetch(`https://hotelbookings-server.vercel.app/updateRooms?id=${editRooms._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                refetch()
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }


    return (
        <div>
            <div className='overflow-x-hidden'>
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-4 py-3">Id number</th>
                            <th scope="col" class="px-4 py-3">Name</th>
                            <th scope="col" class="px-4 py-3">Price</th>
                            <th scope="col" class="px-4 py-3">Adult</th>
                            <th scope="col" class="px-4 py-3">Children</th>
                            <th scope="col" class="px-4 py-3">Status</th>
                            <th scope="col" class="px-4 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {data?.map((room, index) => <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{index + 1}</th>
                            <td scope="row" class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{room.name}</td>
                            <td scope="row" class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{room.prize}</td>
                            <td scope="row" class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{room?.people?.adults}</td>
                            <td scope="row" class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{room?.people?.children}</td>
                            <td scope="row" class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{room.status}</td>
                            <td scope="row" class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap flex dark:text-white">
                                <label htmlFor="my-modal-4" className='mr-3' onClick={() => setEditRooms(room)}>
                                    <AiOutlineEdit />
                                </label>
                                <label htmlFor="my-modal-3" onClick={() => setDeleteRooms(room)}>
                                    <BsFillTrashFill />
                                </label>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
            <div className='mt-14'>
                <div className="md:grid grid-cols-5">
                    <div className="col-span-2">
                        <form action="" className='bg-[#2221216b] p-8 rounded-none' onSubmit={roomData}>
                            <div className="form-control border-b border-[#9999990e] my-2">
                                <input type="text" className="input bg-transparent px-0 text-white focus:bg-transparent " placeholder='Name' name='name' />
                            </div>
                            <div className="form-control border-b border-[#9999990e] my-2">
                                <input type="text" className="input bg-transparent px-0 text-white focus:bg-transparent" placeholder='price' name='price' />
                            </div>
                            <div className="form-control border-b border-[#9999990e] focus:bg-transparent my-2">
                                <textarea className="textarea bg-transparent px-0 text-white focus:bg-transparent" placeholder="Details" name='details' />
                            </div>
                            <div className="form-control ">
                                <div className='flex my-2'>
                                    <input type="number" className="input bg-transparent px-0 w-20 text-white focus:bg-transparent" min={1} placeholder='guest' name='guest' />
                                    <input type="number" className="input bg-transparent px-0 w-20 text-white ml-4 focus:bg-transparent" min={1} placeholder='children' name='children' />
                                </div>
                            </div>

                            <div className="form-control border border-[#9999990e] my-2 py-10">
                                <input type="file" className="input bg-transparent px-0 text-white w-52 mx-auto focus:bg-transparent" placeholder='price' name='image' />
                            </div>
                            <div className="mt-4">
                                <input type="submit" value='submit' className='btn bg-transparent text-[#9CA3AF] border-[#9CA3AF] border rounded-none' placeholder='price' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {
                deleteRooms && <Modal deleteRooms={deleteRooms} confirmDeleteRooms={confirmDeleteRooms} />
            }

            {
                editRooms && <ModalForEdit editRooms={editRooms} confirmEditRooms={confirmEditRooms} setEditRooms={setEditRooms} />
            }

        </div>


    );
};

export default RoomList;