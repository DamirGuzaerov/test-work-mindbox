import {screen} from "@testing-library/react";
import {renderWithProviders as render} from "../../utils/test-utils/test-utils";
import {TodoInput} from "./TodoInput";

describe("TodoInput", () => {
    test("should render component", () => {
        render(<TodoInput/>)

        let todoInput = screen.getByRole("todoInput")
        let todoAddBtn = screen.getByRole("addButton")

        expect(todoInput).toBeInTheDocument();
        expect(todoAddBtn).toBeInTheDocument();
    })

    test("should empty field by default", () => {
        render(<TodoInput/>)

        let todoInput = screen.getByRole("todoInput")

        expect(todoInput.textContent).toEqual("");
    })
})

