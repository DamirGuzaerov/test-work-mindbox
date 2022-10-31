import {NavButton} from "../NavButton/NavButton";
import {Box, Button} from "@mui/material";
import {Filter} from "../../types/types";
import {useAppDispatch, useAppSelector} from "../../utils/hooks/redux-hooks";
import {setTodos} from "../../store/slices/todoSlice";

export const NavPanel = () => {
    const {todoList} = useAppSelector(state => state.TodoReducer);
    const dispatch = useAppDispatch();
    const clearTodos = () => {
        let newTodoList = todoList.filter(el => !el.isCompleted)
        dispatch(setTodos(newTodoList))
    }
    return (
        <>
            <Box sx={{display: "flex", justifyContent: "space-between", gap: "10px", overflowX: "scroll"}}>
                <Box sx={{display: "flex", gap: "10px"}}>
                    <NavButton filterValue={Filter.All}>All</NavButton>
                    <NavButton filterValue={Filter.Checked}>Completed</NavButton>
                    <NavButton filterValue={Filter.NotChecked}>Not completed</NavButton>
                </Box>
                <Box>
                    <Button
                        role={"clearButton"}
                        variant={'contained'}
                        color={'error'}
                        onClick={clearTodos}>Clear</Button>
                </Box>
            </Box>
        </>
    );
}