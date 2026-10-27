
"use client";

import { useState } from "react";
import type { Tarefa } from "@/data/tarefas";
import NovaTarefa from "@/components/NovaTarefa";
import { useContadorDeTarefas } from "@/hooks/useContadorDeTarefas";

interface ListaTarefasProps {
  tarefasIniciais: Tarefa[];
}

export default function ListaTarefas({
  tarefasIniciais,
}: ListaTarefasProps) {
  const [tarefas, setTarefas] = useState(tarefasIniciais);

  const quantidade = useContadorDeTarefas(tarefas);

  function adicionarTarefa(titulo: string) {
    setTarefas((atuais) => [
      ...atuais,
      {
        id: Date.now(),
        titulo,
      },
    ]);
  }

  return (
    <section>
      <h2>Total de tarefas: {quantidade}</h2>

      <NovaTarefa onAdicionar={adicionarTarefa} />

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>{tarefa.titulo}</li>
        ))}
      </ul>
    </section>
  );
}
