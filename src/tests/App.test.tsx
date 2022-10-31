import React from 'react';
import {screen} from '@testing-library/react';
import {
    addTodo,
    changeNav,
    clearTodos,
    renderWithProviders as customRender,
    switchTodo
} from "../utils/test-utils/test-utils"
import App from "../App";
import userEvent from "@testing-library/user-event";
import {Filter} from "../types/types";

test('renders all buttons', () => {
    customRender(<App/>)

    const AllNavButton = screen.getByText(/^All$/i);
    const CompletedNavButton = screen.getByText(/^Completed$/i);
    const NotCompletedNavButton = screen.getByText(/^Not completed$/i);
    expect(AllNavButton).toBeInTheDocument();
    expect(CompletedNavButton).toBeInTheDocument();
    expect(NotCompletedNavButton).toBeInTheDocument();
});

test('renders todo input', () => {
    customRender(<App/>)

    const TodoInput = screen.getByRole("todoInput");
    expect(TodoInput).toBeInTheDocument();
});

test('todos count is correct after adding todo', () => {
    customRender(<App/>)

    addTodo("New Task 1")
    addTodo("New Task 2")
    addTodo("New Task 3")

    let TodoItems= screen.getAllByRole('checkbox');
    expect(TodoItems.length).toEqual(4)
})

test('todos count is correct after adding and deleting todo', () => {
    customRender(<App/>)

    addTodo("New Task 1")
    addTodo("New Task 2")
    addTodo("New Task 3")

    const DeleteButton = screen.getAllByRole("deleteButton")
    userEvent.click(DeleteButton[0])
    let TodoItems= screen.getAllByRole('checkbox');
    expect(TodoItems.length).toBe(3)
})

test('active todos is correct after switching todo', () => {
    customRender(<App/>)

    addTodo("New Task 1")
    addTodo("New Task 2")

    switchTodo(1)
    switchTodo(2)
    const TodoItems = screen.getAllByRole('checkbox', {checked: true});
    expect(TodoItems.length).toEqual(2)
})

test('inActive todos is correct after switching todo', () => {
    customRender(<App/>)

    addTodo("New Task 1")
    addTodo("New Task 2")

    switchTodo(1)
    const TodoItems = screen.getAllByRole('checkbox', {checked: false});
    expect(TodoItems.length).toEqual(2)
})

test('todos count is correct after clearing', () => {
    customRender(<App/>)

    addTodo("New Task 1")
    addTodo("New Task 2")
    addTodo("New Task 3")
    addTodo("New Task 4")

    switchTodo(0)
    switchTodo(1)
    switchTodo(3)

    clearTodos()

    const TodoItemsNotChecked = screen.getAllByRole('checkbox', {checked: false});
    expect(TodoItemsNotChecked.length).toEqual(2)

    const TodoItems = screen.getAllByRole('checkbox');
    expect(TodoItems.length).toEqual(TodoItemsNotChecked.length)
})

test('todos count is correct after changing tab', () => {
    customRender(<App/>)

    addTodo("New Task 1")
    addTodo("New Task 2")
    addTodo("New Task 3")
    addTodo("New Task 4")

    switchTodo(0)
    switchTodo(1)
    switchTodo(3)

    changeNav(Filter.All)

    let TodoItems= screen.getAllByRole('checkbox');
    expect(TodoItems.length).toEqual(5);

    changeNav(Filter.Checked)

    TodoItems = screen.getAllByRole('checkbox');
    expect(TodoItems.length).toEqual(3)

    changeNav(Filter.NotChecked)

    TodoItems = screen.getAllByRole('checkbox');
    expect(TodoItems.length).toEqual(2)
})

