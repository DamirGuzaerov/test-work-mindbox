import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {v4 as uuidv4} from 'uuid';

import {Filter, TodoProps, TodoListState} from '../../../types/types';

export const initState: TodoListState = {
    filter: Filter.All,
    todoList: [
        {
            id: uuidv4(),
            label: 'My task number 1',
            isCompleted: false
        },
    ],
};

export const todoSlice = createSlice({
    initialState: initState,
    name: 'todo',
    reducers: {
        addTodo(state, action: PayloadAction<TodoProps>) {
            state.todoList = [...state.todoList, action.payload];
        },
        switchCompleting(state, action: PayloadAction<string>) {
            const todo = state.todoList
                .find((item: TodoProps) => item.id === action.payload)!;
            todo.isCompleted = !todo.isCompleted;
        },
        setFilter(state, action: PayloadAction<Filter>) {
            state.filter = action.payload;
        },
        setTodos(state, action: PayloadAction<TodoProps[]>) {
            state.todoList = action.payload;
        },
        deleteTodo(state, action: PayloadAction<string>) {
            state.todoList = state.todoList.filter(el=>el.id !== action.payload)
        },
    }
});

export const {addTodo, switchCompleting, setFilter, setTodos,deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;
