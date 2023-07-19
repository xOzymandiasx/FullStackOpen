import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, fireEvent} from "@testing-library/react";
import { prettyDOM } from "@testing-library/react";
import Notes from "./Notes";

test("render content", () => {
  const note = {
    content: "Component testing is donde with react-testing-library",
    important: true
  };

  const component = render(
    <Notes note={note}/>
  );

  //Imprimir el html
    component.debug();

  //Imprimr parte del DOM
    const li = component.container.querySelector("li");
    console.log(prettyDOM(li));

    //method 1
  expect(component.container).toHaveTextContent("Component testing is donde with react-testing-library");

  //method 2 
  const element = component.getByText("Component testing is donde with react-testing-library");

  expect(element).toBeDefined();

  //method 3
  const div = component.container.querySelector(".note");
  expect(div).toHaveTextContent("Component testing is donde with react-testing-library");
});

//fireEvent para controlar las funciones de los botones
test("clicking the button calls event handler once", () => {
  const note = {
    content: "Component testing is donde with react-testing-library",
    important: true
  };

  const mockHandler = jest.fn();

  const component = render(
    <Notes note={note} toggleImportance={mockHandler}/>
  );

  const button = component.getAllByText("make not important");
  fireEvent.click(button);

  //La expectativa de la prueba verifica que la función simulada se haya llamado exactamente una vez.
  expect(mockHandler.mock.calls).toHaveLength(1);
});