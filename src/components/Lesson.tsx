import { CheckCircle } from "phosphor-react";

function Lesson() {
  return (
    <a href="#">
      <span className="text-gray-300">Segunda • 21 de junho • 19h00</span>

      <div className="rounded border border-gray-500 p-4 mt-2">
        <header className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-sm text-blue-500 font-medium">
            <CheckCircle size={20} color="#81D8F7" />
            Conteúdo Liberado
          </span>
          <span className="text-xs rounded px-2 py-[2px] text-white border border-green-300 font-bold">
            Gravado
          </span>
        </header>

        <strong className="text-gray-200 mt-5 block">Primeira Aula</strong>
      </div>
    </a>
  );
}

export default Lesson;
