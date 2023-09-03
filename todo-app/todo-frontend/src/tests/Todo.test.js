import { render, screen } from "@testing-library/react";
import Todo from "../Todos/Todo";

const todo = {
  text: "testing",
  done: false,
};

const onClickComplete = () => null;
const onClickDelete = () => null;

test("todo renders", () => {
  render(
    <Todo
      todo={todo}
      onClickComplete={onClickComplete}
      onClickDelete={onClickDelete}
    />
  );
  const component = screen.getByText("testing");
  expect(component).toBeDefined();
});
test("todo shows correct done version", () => {
  render(
    <Todo
      todo={todo}
      onClickComplete={onClickComplete}
      onClickDelete={onClickDelete}
    />
  );
  const donePart = screen.getByText("This todo is not done");
  expect(donePart).toBeDefined();
});
