import ProductImages from "./ProductImages";
import CheckCEP from "./CheckCEP";


export default function ProductPage() {
  return (
    <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row gap-8 bg-white rounded-lg shadow-md">
      {/* Coluna das imagens */}
      <ProductImages />

      {/* Coluna das informações */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-2">Tênis Esportivo Confortável</h1>
          <p className="text-gray-600 mb-4">Ideal para corridas e caminhadas.</p>
          <p className="text-3xl font-semibold text-green-600 mb-6">R$ 299,90</p>
          <CheckCEP />

          {/* Seleção de tamanho */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Tamanho</label>
            <select className="border rounded p-2 w-full">
              <option>38</option>
              <option>39</option>
              <option>40</option>
              <option>41</option>
            </select>
          </div>

          {/* Seleção de cor */}
          <div className="mb-6">
            <label className="block mb-1 font-medium">Cor</label>
            <select className="border rounded p-2 w-full">
              <option>Preto</option>
              <option>Branco</option>
              <option>Azul</option>
            </select>
          </div>
        </div>

        <button className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}
