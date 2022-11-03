import {screen} from "@testing-library/react";
import {renderWithProviders as render} from "../../utils/test-utils/test-utils";
import {TodoList} from "./TodoList";

describe("TodoList", () => {
    test("should render component", () => {
        render(<TodoList/>)

        let todoList = screen.getAllByRole("checkbox")
        let todoListDeleteBtns = screen.getAllByRole("deleteButton")

        todoList.forEach((todoItem)=>{
            expect(todoItem).toBeInTheDocument()
        })
        expect(todoListDeleteBtns.length).toEqual(todoList.length)
    })
})

