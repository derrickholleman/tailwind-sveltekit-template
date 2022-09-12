import { render } from "@testing-library/svelte";
import Home from "../Home.svelte";

describe("Home", () => {
  it("should render", () => {
    const { getByTestId } = render(Home);

    const pageTitle = getByTestId("page-title");
    expect(pageTitle).toBeInTheDocument();
  });
});
