import { Link } from 'react-router-dom'

export const ErrorPage = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-3xl text-white lg:text-6xl">404</h1>
            <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
              <span className="text-red-500">Oops!</span>
            </h6>

            <p className="mb-4 text-center text-gray-500 md:text-lg">
              Pagina não encontrada! Tente novamente ou retorne para o início
            </p>

            <Link
              to="/"
              className="px-5 py-2 rounded-md text-blue-100 border hover:bg-blue-700"
            >
              Início
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
