import CardGroup from "./CardGroup";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

const emptyResp = {
  page: {
    pageNumber: 0,
    pageSize: 50,
    numberOfElements: 0,
    totalElements: 0,
    totalPages: 0,
    firstPage: true,
    lastPage: true,
  },
  sort: {
    clauses: [],
  },
  characters: [],
};

describe("Card Group tests", () => {
  it("appropriate message is displayed if no cards are present", () => {
    render(
      <MemoryRouter>
        <CardGroup searchedElements={emptyResp}></CardGroup>
      </MemoryRouter>,
    );
    const notFoundMessage = screen.getByText(/isn't any character/);
    expect(notFoundMessage).toBeInTheDocument();
  });
  it("component renders the specified number of cards", () => {
    render(
      <MemoryRouter>
        <CardGroup searchedElements={emptyResp}></CardGroup>
      </MemoryRouter>,
    );
    const notFoundMessage = screen.getByText(/isn't any character/);
    expect(notFoundMessage).toBeInTheDocument();
  });
});
