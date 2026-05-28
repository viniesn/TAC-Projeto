import { useEffect, useState } from "react";

type Noticia = {
  id: number;
  titulo: string;
  fonte: string;
  status: string;
};

export default function FakeNewsDashboard() {

  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [texto, setTexto] = useState("");
  const [resultadoIA, setResultadoIA] = useState("");

  const [stats, setStats] = useState([
    { title: "Notícias Analisadas", value: "0" },
    { title: "Fake News Detectadas", value: "0" },
    { title: "Confiáveis", value: "0" },
    { title: "Em Análise", value: "0" },
  ]);

  useEffect(() => {

    fetch("http://localhost:8080/noticias")
      .then((response) => response.json())
      .then((data) => {

        setNoticias(data);

        const fake = data.filter(
          (n: Noticia) => n.status === "Fake News"
        ).length;

        const confiavel = data.filter(
          (n: Noticia) => n.status === "Confiável"
        ).length;

        const analise = data.filter(
          (n: Noticia) => n.status === "Em análise"
        ).length;

        setStats([
          {
            title: "Notícias Analisadas",
            value: String(data.length),
          },
          {
            title: "Fake News Detectadas",
            value: String(fake),
          },
          {
            title: "Confiáveis",
            value: String(confiavel),
          },
          {
            title: "Em Análise",
            value: String(analise),
          },
        ]);

      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  const analisarNoticia = async () => {

    const response = await fetch(
      "http://localhost:8080/analises",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          conteudo: texto,
        }),
      }
    );

    const data = await response.json();

    setResultadoIA(data.resultado);

  };

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <header className="flex items-center justify-between mb-8">

        <div>
          <h1 className="text-4xl font-bold text-blue-900">
            Fake News Detector
          </h1>

          <p className="text-slate-600 mt-1">
            Painel inteligente de análise de notícias
          </p>
        </div>

        <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-2xl shadow-lg transition-all">
          Nova Análise
        </button>

      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

        {stats.map((item, index) => (

          <div
            key={index}
            className="bg-white rounded-3xl p-6 shadow-md border border-slate-200"
          >

            <h2 className="text-slate-500 text-sm">
              {item.title}
            </h2>

            <p className="text-3xl font-bold text-blue-800 mt-3">
              {item.value}
            </p>

          </div>

        ))}

      </section>

      <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        <div className="xl:col-span-2 bg-white rounded-3xl shadow-md p-6">

          <div className="flex items-center justify-between mb-5">

            <h2 className="text-2xl font-semibold text-slate-800">
              Últimas Notícias
            </h2>

            <input
              type="text"
              placeholder="Pesquisar notícia..."
              className="border border-slate-300 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />

          </div>

          <div className="space-y-4">

            {noticias.map((noticia) => (

              <div
                key={noticia.id}
                className="border border-slate-200 rounded-2xl p-5 flex flex-col md:flex-row md:items-center md:justify-between hover:shadow-md transition-all"
              >

                <div>

                  <h3 className="text-lg font-semibold text-slate-800">
                    {noticia.titulo}
                  </h3>

                  <p className="text-slate-500 text-sm mt-1">
                    Fonte: {noticia.fonte}
                  </p>

                </div>

                <span
                  className={`mt-4 md:mt-0 px-4 py-2 rounded-full text-sm font-medium w-fit ${
                    noticia.status === "Fake News"
                      ? "bg-red-100 text-red-700"
                      : noticia.status === "Confiável"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {noticia.status}
                </span>

              </div>

            ))}

          </div>

        </div>

        <div className="bg-white rounded-3xl shadow-md p-6">

          <h2 className="text-2xl font-semibold text-slate-800 mb-5">
            IA Detectora
          </h2>

          <div className="bg-slate-100 rounded-2xl p-4 mb-4">

            <p className="text-slate-600 text-sm mb-2">
              Texto para análise
            </p>

            <textarea
              rows={8}
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              placeholder="Cole aqui uma notícia para verificar se é fake news..."
              className="w-full bg-white rounded-xl border border-slate-300 p-3 outline-none resize-none focus:ring-2 focus:ring-orange-400"
            />

          </div>

          <button
            onClick={analisarNoticia}
            className="w-full bg-blue-800 hover:bg-blue-900 text-white py-3 rounded-2xl font-semibold transition-all shadow-lg"
          >
            Analisar Notícia
          </button>

          <div className="mt-6 bg-orange-50 border border-orange-200 rounded-2xl p-4">

            <h3 className="font-semibold text-orange-700 mb-2">
              Resultado da IA
            </h3>

            <p className="text-sm text-slate-700">
              {resultadoIA ||
                "A análise utiliza processamento de linguagem natural e comparação com fontes confiáveis."}
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}