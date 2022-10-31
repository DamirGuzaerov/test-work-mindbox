import {useEffect, useRef, useState} from "react";
import {Box, Button, Card, Checkbox, FormControl, FormControlLabel, Typography} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

interface TodoItemProps {
    label?: string,
    isChecked: boolean
}

export const TodoItem = (props: TodoItemProps) => {
    const {label,isChecked} = props
    let checkRef = useRef();
    const [isCompleted, setIsCompleted] = useState(isChecked)

    const checkTodo = (checked: any) => {
        console.log(checked === checkRef.current,checked,checkRef.current)
        checkRef.current = checked
        setIsCompleted(checked.checked)
    }
    useEffect(()=>{
        console.log(label)
    },[label])
    return (
        <Card variant={"outlined"}>
            <Box p={1} sx={{display: 'flex', justifyContent: 'space-between'}}>
                <FormControl fullWidth>
                    <FormControlLabel
                        control={<Checkbox
                            checked={isCompleted}
                            onChange={(e) => {
                                checkTodo(e.target)
                            }}
                            size={"medium"}
                        />} label={<Typography variant={"body1"}>{label}</Typography>}/>
                </FormControl>
                <Button variant={"outlined"} size={"small"} color={"error"}>
                    <DeleteIcon/>
                </Button>
            </Box>
        </Card>
    )
}