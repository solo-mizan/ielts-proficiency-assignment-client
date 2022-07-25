import React, { useEffect, useRef, useState } from 'react';
import { useAuthState, useUpdatePassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const ManageProfile = () => {
    const [storedData, setStoredData] = useState('');

    const [updatePassword, updating, error] = useUpdatePassword(auth);
    const passwordRef = useRef('');
    const userNameRef = useRef('');
    const [user, loading, error1] = useAuthState(auth);

    const handlePassword = async () => {
        const password = passwordRef.current.value;
        console.log(password);
        await updatePassword(password);
        alert('Updated password');
    }

    const handleUserName = async () => {

    }

    useEffect(() => {
        fetch(`http://localhost:5000/user/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setStoredData(data);
            })
    }, [user])

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
                            <td>{user?.displayName}</td>
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