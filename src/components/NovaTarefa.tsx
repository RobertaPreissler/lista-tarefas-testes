
"use client";

import { useState, type FormEvent } from "react";

interface NovaTarefaProps {
  onAdicionar: (titulo: string) => void;
}

export default function NovaTarefa({
  onAdicionar,
}: NovaTarefaProps) {
  const [titulo, setTitulo] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const tituloLimpo = titulo.trim();

    if (!tituloLimpo) {
      return;
    }

    onAdicionar(tituloLimpo);
    setTitulo("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="titulo">Nova tarefa</label>

      <input
        id="titulo"
        name="titulo"
        value={titulo}
        onChange={(event) => setTitulo(event.target.value)}
        placeholder="Digite uma tarefa"
      />

      <button type="submit">Adicionar tarefa</button>
    </form>
  );
}
