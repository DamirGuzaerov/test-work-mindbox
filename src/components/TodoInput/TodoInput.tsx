import {Box, Button, FormControl, TextField} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, {FormEvent, useRef, useState} from "react";
import {useAppDispatch} from "../../utils/hooks/redux-hooks";
import {addTodo} from "../../store/slices/todoSlice";
import {TodoProps} from "../../types/types";
import {v4 as uuidv4} from "uuid"

export const TodoInput = () => {
    const dispatch = useAppDispatch()
    const [value,setValue] = useState("")
    const addNewTodo = (e: FormEvent) => {
        e.preventDefault()
        if (value && value.trim() !== "") {
            let newTodo: TodoProps = {
                id: uuidv4(),
                isCompleted: false,
                label: value
            }
            dispatch(addTodo(newTodo));
            setValue("")
        }
    }

    return (
        <>
            <form onSubmit={addNewTodo}>
                <Box sx={{display: "flex", gap: "10px"}}>
                    <FormControl fullWidth>
                        <TextField
                            value={value}
                            onChange={e=>setValue(e.target.value)}
                            label="New task"
                            variant="outlined"
                        />
                    </FormControl>
                    <Button type={'submit'} variant={"outlined"}>
                        <AddIcon/>
                    </Button>
                </Box>
            </form>
        </>
    )
}