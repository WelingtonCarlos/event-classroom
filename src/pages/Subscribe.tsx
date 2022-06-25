import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";

function Subscribe() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createSubscribe, { loading }] = useCreateSubscriberMutation();

  async function handleSubscribe(event: FormEvent) {
    event?.preventDefault();

    await createSubscribe({ variables: { name, email } });

    navigate("/event");
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px] ">
          <Logo />

          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Venha estudar conosco,{" "}
            <strong className="text-teal-500">os Misters Devs</strong>.
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Os Misters Devs são um grupo de ensino online para desenvolvedores
            que querem se aperfeiçoar nas mais atuais tecnologias presentes e
            exigidas para o mercado de trabalho.
          </p>
        </div>

        <div className="p-8 bg-gray-900 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">
            Inscreva-se Gratuitamente
          </strong>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-2 w-full"
          >
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Nome Completo"
              onChange={(event) => setName(event.target.value)}
            />
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="E-mail"
              onChange={(event) => setEmail(event.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-teal-700 rounded px-5 h-14 font-bold text-sm hover:bg-gray-900 hover:border hover:border-gray-400 transition-colors disabled:opacity-30"
            >
              Inscrever-se
            </button>
          </form>
        </div>
      </div>

      {/* <img src="/src/assets/code.png" className="mt-10" alt="" /> */}
    </div>
  );
}

export default Subscribe;
