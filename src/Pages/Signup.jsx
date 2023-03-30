import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import Image1 from '../assets/images/slider-2.jpg'
import { useLocation, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import useToken from '../hooks/useToken';

const Signup = () => {
    const { createUser, updateName } = useContext(AuthContext)
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [confiquredEmail, setConfiquredEmail] = useState('')
    const [token] = useToken(confiquredEmail)

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, navigate, from])

    const signupUser = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const image = form.image.files

        uploadUserData(name, email, password, image)
    }

    const uploadUserData = (name, email, password, image) => {
        const formData = new FormData();
        formData.append('image', image[0]);
        fetch(`https://api.imgbb.com/1/upload?&key=26198e22613019ba3964d468733ea9ea`, {
            method: 'POST',
            body: formData
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.data) {
                    console.log(result.data)
                    createUser(email, password)
                        .then((userCredential) => {
                            console.log(userCredential)
                            const user = userCredential.user;
                            const image = result.data.url
                            if (user) {

                                updateName(name, image)
                                const guest = {
                                    name,
                                    email,
                                    img: image
                                }
                                saveUserData(guest)
                            }

                        })
                        .catch((error) => toast(`${error}`, {
                            style: {

                                background: '#3e0101cc',
                                color: 'white'
                            },
                        }));
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    const saveUserData = (guest) => {
        fetch("https://hotelbookings-server.vercel.app/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(guest),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                setConfiquredEmail(guest.email)

            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    return (
        <div className='min-h-[100vh]'>
            <div style={{ backgroundImage: `url(${Image1})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className='h-[40vh]'>
            </div>
            <div className='relative -top-[54px]'>
                <form action="" className='md:w-1/3 mx-auto border p-5 signin-form rounded shadow-lg' onSubmit={signupUser}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Name</span>
                        </label>
                        <div class="username flex border rounded text-gray-500 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 mx-2 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                            <input class="outline-none px-2 h-full py-2 text-lg w-full" type="text" placeholder="name" name='name' />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text ">Email</span>
                        </label>
                        <div class="username flex border rounded text-gray-500 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 mx-2 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                            <input class="outline-none px-2 h-full py-2 text-lg w-full" type="email" placeholder="Email" name='email' required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div class="password flex border rounded text-gray-500 mb-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 mx-2 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>
                            <input class="outline-none px-2 h-full py-2 text-lg w-full" type="password" placeholder="password" name='password' required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Upload your photo</span>
                        </label>
                        <div class="password flex border rounded text-gray-500 mb-1">
                            <input class="outline-none px-2 h-full py-2 text-lg w-full" type="file" placeholder="Upload your photo" name='image' required />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" value="signup" className="btn btn-primary text-white" htmlFor="my-modal" />
                    </div>
                </form>
            </div>
            <Toaster />
        </div>
    );
};

export default Signup;