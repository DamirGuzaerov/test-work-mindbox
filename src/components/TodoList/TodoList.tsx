import {TodoItem} from "../TodoItem/TodoItem";
import {useAppSelector} from "../../utils/hooks/redux-hooks";
import {Filter} from "../../types/types";
import {Box} from "@mui/material";


export const TodoList = () => {
    const {todoList, filter} = useAppSelector(state => state.TodoReducer);
    return (
        <>
            {filter === Filter.All && todoList.map(el => (
                <Box mb={1}>
                    <TodoItem key={el.id} id={el.id} isCompleted={el.isCompleted} label={el.label}/>
                </Box>
            ))}
            {filter === Filter.Checked && todoList.filter(el => el.isCompleted).map(el => (
                <Box mb={1}>
                    <TodoItem key={el.id} id={el.id} isCompleted={el.isCompleted} label={el.label}/>
                </Box>
            ))}
            {filter === Filter.NotChecked && todoList.filter(el => !el.isCompleted).map(el => (
                <Box mb={1}>
                    <TodoItem key={el.id} id={el.id} isCompleted={el.isCompleted} label={el.label}/>
                </Box>
            ))}
        </>
    )
}