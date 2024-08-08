import { describe, expect, it, vi } from "vitest";
import useLocalStorage from "../hooks/useLocalStorage";

vi.stubGlobal("localStorage", {
  getItem: vi.fn(),
  setItem: vi.fn(),
});

describe("useLocalStorage", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should set and get theme from localStorage", () => {
    const { setThemeInLocalStorage, getThemeFromLocalStorage } =
      useLocalStorage();

    setThemeInLocalStorage(false);
    expect(localStorage.setItem).toHaveBeenCalledWith("darkTheme", "false");

    vi.mocked(localStorage.getItem).mockReturnValueOnce("false");
    expect(getThemeFromLocalStorage()).toBe(false);

    vi.mocked(localStorage.getItem).mockReturnValueOnce("true");
    expect(getThemeFromLocalStorage()).toBe(true);
  });

  it("should set and get query from localStorage", () => {
    const { setQueryInLocalStorage, getQueryFromLocalStorage } =
      useLocalStorage();

    setQueryInLocalStorage("test query");
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "currentQuery",
      "test query",
    );

    vi.mocked(localStorage.getItem).mockReturnValueOnce('"test query"');
    expect(getQueryFromLocalStorage()).toBe("test query");

    vi.mocked(localStorage.getItem).mockReturnValueOnce(null);
    expect(getQueryFromLocalStorage()).toBe("");
  });

  it("should handle server-side rendering", () => {
    vi.stubGlobal("window", undefined);

    const {
      setThemeInLocalStorage,
      getThemeFromLocalStorage,
      setQueryInLocalStorage,
      getQueryFromLocalStorage,
    } = useLocalStorage();

    setThemeInLocalStorage(false);
    expect(localStorage.setItem).not.toHaveBeenCalled();

    expect(getThemeFromLocalStorage()).toBe(true);

    setQueryInLocalStorage("test query");
    expect(localStorage.setItem).not.toHaveBeenCalled();
    expect(getQueryFromLocalStorage()).toBe("");
  });
});
