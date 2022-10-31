import React from "react";
import {RenderOptions} from "@testing-library/react";
import {AppStore} from "../store/mainStore";

export enum Filter {
    Checked,
    NotChecked,
    All,
}

export interface TodoProps {
    id: string,
    isCompleted: boolean,
    label: string,
}

export interface TodoListState {
    filter: Filter,
    todoList: TodoProps[],
}

export interface NavButtonProps{
    filterValue: Filter,
    children: React.ReactNode
}

export interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
    preloadedState?: TodoListState
    store?: AppStore
}

