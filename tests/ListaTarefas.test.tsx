import { render, screen } from "@testing-library/react";
import ListaTarefas from "@/components/ListaTarefas";
import type { Tarefa } from "@/data/tarefas";

describe("ListaTarefas", () => {
  it("deve exibir as tarefas iniciais", () => {
    const tarefas: Tarefa[] = [
      { id: 1, titulo: "Estudar Next.js" },
      { id: 2, titulo: "Aprender Jest" },
    ];

    render(<ListaTarefas tarefasIniciais={tarefas} />);

    expect(screen.getByText("Estudar Next.js")).toBeInTheDocument();
    expect(screen.getByText("Aprender Jest")).toBeInTheDocument();
  });

  it("deve exibir a quantidade inicial de tarefas", () => {
    const tarefas: Tarefa[] = [
      { id: 1, titulo: "Estudar Next.js" },
      { id: 2, titulo: "Aprender Jest" },
    ];

    render(<ListaTarefas tarefasIniciais={tarefas} />);

    expect(screen.getByText("Total de tarefas: 2")).toBeInTheDocument();
  });
});
