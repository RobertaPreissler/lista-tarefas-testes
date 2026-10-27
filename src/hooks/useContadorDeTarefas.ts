import { useMemo } from "react";
import type { Tarefa } from "@/data/tarefas";

export function useContadorDeTarefas(
  tarefas: Tarefa[]
): number {
  return useMemo(() => tarefas.length, [tarefas]);
}
