import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddTodo = () => {
    const { register, handleSubmit, clearErrors, reset } = useForm();

    const onSubmit = d => {
        const isComplete = false;
        const data = { ...d, isComplete };
        console.log(data);
        const url = `http://localhost:5000/list`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result) {
                    toast.success('New Todo added successfully!')
                    reset();
                    window.location.reload();
                }
            })
    };

    return (
        <div class="card max-w-lg bg-neutral mx-auto text-center m-5">
            <div class="card-body items-center text-center"></div>

            <h1 className='text-3xl lg:text-4xl font-sans font-semibold text-white'>Add a new <span className='text-red-500'>TO DO</span> here</h1>

            <form onSubmit={handleSubmit(onSubmit)} className='flex-auto'>
                <input type="text" placeholder="TO DO Name" class="input input-bordered input-primary w-1/2 max-w-xs m-5" {...register("name", { required: true })} />

                <input type="text" placeholder="TO DO Description" class="input input-bordered input-primary w-full max-w-xs" {...register("description", { required: true })} /> <br />

                <input type="submit" className='btn btn-accent m-5' value="Add Task" />
            </form>
        </div>
    );
};

export default AddTodo;