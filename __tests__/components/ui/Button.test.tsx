import { render } from "@/__tests__/setup";
import { Button } from "@/components/ui/Button";

describe("Button Component", () => {
  it("renders button with text", () => {
    const { getByText } = render(<Button>Click me</Button>);
    const button = getByText("Click me");
    expect(button).toBeInTheDocument();
  });

  it("handles click events", () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick}>Click</Button>);
    const button = getByText("Click");
    button.click();
    expect(handleClick).toHaveBeenCalled();
  });
});
