
import { useState, useEffect } from "react";
import axios from "axios";

export default function CheckCEP() {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState(null);
  const [error, setError] = useState("");

  // Salvamento no localStorage
  useEffect(() => {
    const savedCep = localStorage.getItem("cep-info");
    if (savedCep) {
      const parsed = JSON.parse(savedCep);
      if (Date.now() - parsed.timestamp < 15 * 60 * 1000) {
        setCep(parsed.cep);
        setAddress(parsed.address);
      } else {
        localStorage.removeItem("cep-info");
      }
    }
  }, []);

  const handleSearch = async () => {
    if (!cep.match(/^\d{8}$/)) {
      setError("Digite um CEP válido (8 dígitos).");
      setAddress(null);
      return;
    }

    try {
      const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (data.erro) {
        setError("CEP não encontrado.");
        setAddress(null);
      } else {
        setAddress(data);
        setError("");

        localStorage.setItem(
          "cep-info",
          JSON.stringify({
            cep,
            address: data,
            timestamp: Date.now(),
          })
        );
      }
    } catch (err) {
      setError("Erro ao buscar CEP.");
      setAddress(null);
    }
  };

  return (
    <div className="mt-8 space-y-4">
      <h3 className="text-lg font-semibold">Consultar Frete por CEP</h3>
      <div className="flex gap-2">
        <input
          type="text"
          value={cep}
          onChange={(e) => setCep(e.target.value.replace(/\D/g, ""))}
          placeholder="Digite o CEP (apenas números)"
          className="border border-gray-300 rounded px-4 py-2 w-64"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Consultar
        </button>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      {address && (
        <div className="text-sm border rounded p-4 bg-gray-100">
          <p><strong>Endereço:</strong> {address.logradouro}, {address.bairro}</p>
          <p><strong>Cidade:</strong> {address.localidade} - {address.uf}</p>
        </div>
      )}
    </div>
  );
}
