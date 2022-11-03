import {screen} from "@testing-library/react";
import {renderWithProviders as render} from "../../utils/test-utils/test-utils";
import {NavPanel} from "./NavPanel";

describe("NavPanel", () => {
    test("should render component", () => {
        render(<NavPanel/>)

        const AllNavButton = screen.getByText(/^All$/i);
        const CompletedNavButton = screen.getByText(/^Completed$/i);
        const NotCompletedNavButton = screen.getByText(/^Not completed$/i);

        expect(AllNavButton).toBeInTheDocument();
        expect(CompletedNavButton).toBeInTheDocument();
        expect(NotCompletedNavButton).toBeInTheDocument();
    })

    test("should selected 'All' nav by default", () => {
        render(<NavPanel/>)

        const AllNavButton = screen.getByText(/^All$/i);
        const CompletedNavButton = screen.getByText(/^Completed$/i);
        const NotCompletedNavButton = screen.getByText(/^Not completed$/i);

        expect(AllNavButton.classList).toContain("MuiButton-containedSuccess")
        expect(CompletedNavButton.classList).not.toContain("MuiButton-containedSuccess")
        expect(NotCompletedNavButton.classList).not.toContain("MuiButton-containedSuccess")
    })
})

