import {screen} from "@testing-library/react";
import {renderWithProviders as render} from "../../utils/test-utils/test-utils";
import {NavButton} from "./NavButton";

describe("NavButton", () => {
    test("should render component", () => {
        render(<NavButton/>)

        let navButton = screen.getByRole(/navBtn-[0-2]/)

        expect(navButton).toBeInTheDocument();
    })
})

