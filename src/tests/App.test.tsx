import { render, screen } from "@testing-library/react";
import App from "../App";
import { userEvent } from "@testing-library/user-event";

describe("Detailed card tests", () => {
  it("clicking the Search button saves the entered value to the local storage", async () => {
    render(<App></App>);
    const searchLink = screen.getByText(`Search`);
    const inputElement = screen.getByPlaceholderText(
      "Search for characters in Star trek API",
    );

    const user = userEvent.setup();
    await user.type(inputElement, "Anton");
    await user.click(searchLink);

    const curQuery = localStorage.getItem("prevQuery");
    expect(curQuery).toBe("Anton");
  });
  it("clicking the Search button saves the entered value to the local storage", async () => {
    localStorage.setItem("prevQuery", "Hi i was here");
    render(<App></App>);
    const inputElement: HTMLInputElement = screen.getByPlaceholderText(
      "Search for characters in Star trek API",
    );
    expect(inputElement.value).toBe("Hi i was here");
  });
});
