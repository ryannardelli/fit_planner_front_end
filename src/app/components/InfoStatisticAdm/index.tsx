export const InfoStatisticAdm = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-4">
          <div className="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900">
            <div className="px-4 py-5 sm:p-6">
              <dl>
                <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">
                  Usuários Ativos Agora
                </dt>
                <dd className="mt-1 text-3xl leading-9 font-semibold text-primary">
                  5
                </dd>
              </dl>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900">
            <div className="px-4 py-5 sm:p-6">
              <dl>
                <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">
                  Usuários Cadastrado na Semana
                </dt>
                <dd className="mt-1 text-3xl leading-9 font-semibold text-primary">
                  3
                </dd>
              </dl>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900">
            <div className="px-4 py-5 sm:p-6">
              <dl>
                <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">
                  Usuários Cadastrado no mês
                </dt>
                <dd className="mt-1 text-3xl leading-9 font-semibold text-primary">
                  20
                </dd>
              </dl>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900">
            <div className="px-4 py-5 sm:p-6">
              <dl>
                <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">
                  Total de Usuários
                </dt>
                <dd className="mt-1 text-3xl leading-9 font-semibold text-primary">
                  30
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
