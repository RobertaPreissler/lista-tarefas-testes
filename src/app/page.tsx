
import { buscarTarefas } from "@/data/tarefas";
import ListaTarefas from "@/components/ListaTarefas";

export default async function Page() {
  const tarefas = await buscarTarefas();

  return (
    <main>
      <h1>Minha lista de tarefas</h1>
      <ListaTarefas tarefasIniciais={tarefas} />
    </main>
  );
}
