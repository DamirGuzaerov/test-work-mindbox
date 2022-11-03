import {useAppDispatch, useAppSelector} from "../../utils/hooks/redux-hooks";
import {setFilter} from "../../store/slices/todoSlice/todoSlice";
import {Filter, NavButtonProps} from "../../types/types";
import {Button} from "@mui/material";

export const NavButton = (props: Partial<NavButtonProps>) => {
    const {children, filterValue = Filter.All} = props
    const { filter } = useAppSelector((state) => state.TodoReducer);
    const dispatch = useAppDispatch();

    const switchFilter = () => {
        dispatch(setFilter(filterValue));
    };

    return (
        <>
            <Button
                role={`navBtn-${filterValue}`}
                variant={'contained'}
                color={(filter === filterValue) ? 'success' : 'primary'}
                onClick={switchFilter}
            >
                {children}
            </Button>
        </>
    )
}