import reducer, {addTodo, deleteTodo, initState, setTodos} from './todoSlice'
import {Filter, TodoListState, TodoProps} from "../../../types/types";
import {v4 as uuidv4} from "uuid"

test('should return the initial state', () => {
    expect(reducer(undefined, {type: undefined})).toEqual(
        initState
    )
})

test('should handle a todo being added to an empty list', () => {
    const previousState: TodoListState = {
        filter: Filter.All,
        todoList: []
    }
    let uuid = uuidv4();
    let newTodo: TodoProps = {
        id: uuid,
        isCompleted: false,
        label: "New task"
    }
    expect(reducer(previousState, addTodo(newTodo)).todoList).toEqual([
        {label: 'New task', isCompleted: false, id: uuid},
    ])
})

test('should handle a todo being added to an existing list', () => {
    let uuidFirstTask = uuidv4();

    const previousState: TodoListState = {
        filter: Filter.All,
        todoList: [{label: 'First task', isCompleted: false, id: uuidFirstTask},]
    }

    let uuidSecondTask = uuidv4();
    let newTodo: TodoProps = {
        id: uuidSecondTask,
        isCompleted: false,
        label: "New task"
    }
    expect(reducer(previousState, addTodo(newTodo)).todoList).toEqual([
        {label: 'First task', isCompleted: false, id: uuidFirstTask},
        {label: 'New task', isCompleted: false, id: uuidSecondTask},
    ])
})

test('should clear if there are already elements', () => {
    const previousState: TodoListState = {
        filter: Filter.All,
        todoList:
            [
                {label: 'First task', isCompleted: false, id: uuidv4()},
                {label: 'Second task', isCompleted: false, id: uuidv4()},
            ]
    }

    expect(reducer(previousState, setTodos([])).todoList).toEqual([])
})

test('should clear if there are not elements', () => {

    const previousState: TodoListState = {
        filter: Filter.All,
        todoList: []
    }

    expect(reducer(previousState, setTodos([])).todoList).toEqual([])
})

test('should not change after delete if not exists', () => {

    const previousState: TodoListState = {
        filter: Filter.All,
        todoList: [
            {label: 'First task', isCompleted: false, id: uuidv4()},
        ]
    }

    expect(reducer(previousState, deleteTodo(uuidv4())).todoList).toEqual(previousState.todoList)
})

test('should delete if exists', () => {
    let uuidFirst = uuidv4()
    let uuidSecond = uuidv4()
    const previousState: TodoListState = {
        filter: Filter.All,
        todoList: [
            {label: 'First task', isCompleted: false, id: uuidFirst},
            {label: 'Second task', isCompleted: false, id: uuidSecond},
        ]
    }

    expect(reducer(previousState, deleteTodo(uuidFirst)).todoList).toEqual([
        {
            label: 'Second task',
            isCompleted: false,
            id: uuidSecond
        }]
    )
})



