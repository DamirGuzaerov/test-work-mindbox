import React, { PropsWithChildren } from 'react'
import {render, screen} from '@testing-library/react'
import { Provider } from 'react-redux'

import {mainStore} from "../../store/mainStore";
import {initState} from "../../store/slices/todoSlice/todoSlice";
import {ExtendedRenderOptions, Filter} from "../../types/types";
import userEvent from "@testing-library/user-event";

export function renderWithProviders(
    ui: React.ReactElement,
    {
        preloadedState = initState,
        store = mainStore(),
        ...renderOptions
    }: ExtendedRenderOptions = {}
) {
    function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
        return <Provider store={store}>{children}</Provider>
    }

    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}

export const addTodo = (text: string)=>{
    const TodoInput: HTMLInputElement = screen.getByRole("todoInput");
    const TodoAddBtn = screen.getByRole("addButton")
    userEvent.type(TodoInput,text)
    userEvent.click(TodoAddBtn)
}

export const switchTodo = (inx: number)=>{
    const TodoItem = screen.getAllByRole("checkbox")[inx]
    userEvent.click(TodoItem)
}

export const clearTodos = ()=>{
    const ClearBtn = screen.getByRole("clearButton")
    userEvent.click(ClearBtn)
}

export const changeNav = (nav: Filter)=>{
    const ClearBtn = screen.getByRole(`navBtn-${nav.toString()}`)
    userEvent.click(ClearBtn)
}