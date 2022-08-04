import React, { useEffect, useRef, useState } from 'react';
import { useAuthState, useUpdatePassword } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const ManageProfile = () => {
    const [storedData, setStoredData] = useState('');

    const [updatePassword, updating, error] = useUpdatePassword(auth);
    const passwordRef = useRef('');
    const userNameRef = useRef('');
    const [user, loading, error1] = useAuthState(auth);

    useEffect(() => {
        fetch(`http://localhost:5000/user/${user.email}`)
            .then(res => res.json())
            .then(data => console.log(data));
    }, [])

    const handlePassword = async () => {
        const password = passwordRef.current.value;
        console.log(password);
        await updatePassword(password);
        toast.success('Password updated');
    }

    const handleUserName = async () => {
        const userName = userNameRef.current.value;
        console.log(userName);
        const body = { name: userName };
        fetch(`http://localhost:5000/profile/${user.email}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(data => {
                if (!data.modifiedCount) {
                    toast.success("username updated successfully");
                }
            })
    }

    return (
        <div className='text-center'>
            <h1 className='text-3xl uppercase text-zinc-900 m-5'>Manage your Profile</h1>
            <div class="overflow-x-auto mx-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {
                                storedData.userName ? <td>{storedData.userName}</td>
                                    :
                                    <td>{user?.displayName}</td>
                            }
                            <td>{user?.email}</td>
                            <td><label htmlFor="my-modal-4" class="btn btn-xs modal-button">Add username</label></td>
                            <td><label htmlFor="my-modal-3" class="btn btn-xs modal-button">Change Password</label></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <input type="text" ref={passwordRef} placeholder="Enter new password here" class="input input-bordered input-info w-full max-w-xs" />
                    <button onClick={handlePassword} className='btn btn-outline m-4'>Update</button>
                </div>
            </div>

            <input type="checkbox" id="my-modal-4" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="my-modal-4" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <input type="text" ref={userNameRef} placeholder="Enter username here" class="input input-bordered input-info w-full max-w-xs" />
                    <button onClick={handleUserName} className='btn btn-outline m-4'>Update</button>
                </div>
            </div>
        </div>
    );
};

export default ManageProfile;