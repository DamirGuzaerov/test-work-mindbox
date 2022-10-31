import {Box, Button, Card, Checkbox, FormControl, FormControlLabel, Typography} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {switchCompleting, deleteTodo} from "../../store/slices/todoSlice";
import {useAppDispatch} from "../../utils/hooks/redux-hooks";
import {TodoProps} from "../../types/types";

export const TodoItem = (props: TodoProps) => {
    const {label, isCompleted, id} = props
    const dispatch = useAppDispatch();

    const switchTodo = () => {
        dispatch(switchCompleting(id));
    }

    const removeTodo = () => {
        dispatch(deleteTodo(id))
    }

    return (
        <Card variant={"outlined"} >
            <Box p={1} sx={{display: 'flex', justifyContent: 'space-between'}}>
                <FormControl fullWidth>
                    <FormControlLabel
                        control={<Checkbox
                            inputProps={{role:"checkbox"}}
                            checked={isCompleted}
                            onChange={() =>
                                switchTodo()
                            }
                            size={"medium"}
                        />} label={<Typography variant={"body1"}>{label}</Typography>}/>
                </FormControl>
                <Button
                    role={"deleteButton"}
                    name={`delete-btn-${id}`}
                    variant={"outlined"}
                    size={"small"}
                    color={"error"}
                    onClick={removeTodo}>
                    <DeleteIcon/>
                </Button>
            </Box>
        </Card>
    )
}