import { renderHook } from "@testing-library/react";
import { useContadorDeTarefas } from "@/hooks/useContadorDeTarefas";
import type { Tarefa } from "@/data/tarefas";

describe("useContadorDeTarefas", () => {
  it("deve contar a quantidade de tarefas", () => {
    const tarefas: Tarefa[] = [
      { id: 1, titulo: "Estudar Next.js" },
      { id: 2, titulo: "Aprender Jest" },
      { id: 3, titulo: "Praticar TypeScript" },
    ];

    const { result } = renderHook(() =>
      useContadorDeTarefas(tarefas)
    );

    expect(result.current).toBe(3);
  });

  it("deve retornar zero quando não houver tarefas", () => {
    const { result } = renderHook(() =>
      useContadorDeTarefas([])
    );

    expect(result.current).toBe(0);
  });
});
