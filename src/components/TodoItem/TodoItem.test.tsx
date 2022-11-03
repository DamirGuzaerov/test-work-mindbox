import {screen} from "@testing-library/react";
import {renderWithProviders as render} from "../../utils/test-utils/test-utils";
import {TodoItem} from "./TodoItem";
import {v4 as uuidv4} from "uuid"

describe("TodoItem", () => {
    test("should render component", () => {
        let label = 'Test task'
        render(
            <TodoItem
                id={uuidv4()}
                isCompleted={false}
                label={label}/>)

        let todoItem = screen.getByRole("checkbox")
        let todoItemLabel = screen.getByText(label)

        expect(todoItem).toBeInTheDocument();
        expect(todoItemLabel).toBeInTheDocument();
    })

    test("should not checked default when render", () => {
        let label = 'Test task'
        render(
            <TodoItem
                id={uuidv4()}
                label={label}/>)

        let todoItem = screen.getByRole("checkbox")

        expect(todoItem).not.toBeChecked();
    })

})

