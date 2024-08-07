import { screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { renderWithContext } from "../../tests/testingUtils/renderWithContext";
import SearchForm from "./Form";
import mockRouter from "next-router-mock";

vi.mock("next/router", () => ({
  useRouter: () => mockRouter,
}));

describe("Form tests", () => {
  it("Clicking the Search button saves the entered value to the local storage", async () => {
    renderWithContext(<SearchForm />);

    const searchLink = screen.getByText(`Search`);
    const inputElement = screen.getByPlaceholderText(
      "Search for characters in Star trek API",
    );

    expect(searchLink).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();

    const user = userEvent.setup();
    await user.type(inputElement, "Anton");
    await user.click(searchLink);

    const curQuery = localStorage.getItem("currentQuery");
    expect(curQuery).toBe("Anton");
  });
});
