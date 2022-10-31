import React from "react";

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

