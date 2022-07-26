import { toast } from 'react-toastify';
import useTodo from '../../Hooks/useTodo';

const TodoList = () => {

    const [todo, setTodo] = useTodo();

    const handleDelete = (id) => {
        const url = `http://localhost:5000/list/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data) {
                    toast.error('Task deleted successfully.')
                    const remaining = todo.filter(t => t._id !== id);
                    setTodo(remaining);
                }
            })
    }

    const handleComplete = (id, n, d) => {
        const isComplete = true;
        const name = n;
        const description = d;
        const data = { name, description, isComplete };
        console.log(data);
        const url = `http://localhost:5000/list/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(d => {
                window.location.reload();
                toast.success('Task marked as Completed.')
            })

    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-2 mx-auto text-center'>
            {
                todo.map(t => <div key={t._id}>
                    <div class="card w-96 bg-blue-900 text-primary-content">
                        <div class="card-body">
                            <h2 class="card-title">{t.name}</h2>
                            <p>{t.description}</p>
                            <div className='card-actions justify-evenly'>
                                <button onClick={() => handleComplete(t._id, t.name, t.description)} className={t.isComplete ? 'btn text-white btn-disabled' : 'btn text-white'}>{t.isComplete ? 'Completed' : 'Complete'}</button>
                                <button onClick={() => handleDelete(t._id)} class="btn btn-error">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default TodoList;