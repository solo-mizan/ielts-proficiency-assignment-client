import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const Dashboard = () => {
    return (
        <div>
            <AddTodo></AddTodo>
            <TodoList></TodoList>
        </div>
    );
};

export default Dashboard;