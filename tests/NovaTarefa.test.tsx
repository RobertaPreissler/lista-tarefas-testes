import { fireEvent, render, screen } from "@testing-library/react";
import NovaTarefa from "@/components/NovaTarefa";

describe("NovaTarefa", () => {
  it("deve adicionar uma tarefa e limpar o campo", () => {
    const onAdicionar = jest.fn();

    render(<NovaTarefa onAdicionar={onAdicionar} />);

    const campo = screen.getByLabelText("Nova tarefa");

    fireEvent.change(campo, {
      target: { value: "Estudar Jest" },
    });

    fireEvent.click(
      screen.getByRole("button", { name: "Adicionar tarefa" })
    );

    expect(onAdicionar).toHaveBeenCalledWith("Estudar Jest");
    expect(campo).toHaveValue("");
  });

  it("não deve adicionar uma tarefa vazia", () => {
    const onAdicionar = jest.fn();

    render(<NovaTarefa onAdicionar={onAdicionar} />);

    fireEvent.click(
      screen.getByRole("button", { name: "Adicionar tarefa" })
    );

    expect(onAdicionar).not.toHaveBeenCalled();
  });
});
