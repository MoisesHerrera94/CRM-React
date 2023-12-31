import { Outlet, Link, useLocation } from "react-router-dom"

const Layout = () => {

    const location = useLocation()

  return (
    <div>
        <div className="md:flex md:min-h-screen">
            <div className="md:w-1/4 bg-blue-600 px-5 py-10">
                <h2 className="text-4xl font-black text-center text-white">CRM - Clientes</h2>

                <nav className="mt-10">
                    <Link 
                        className={`${location.pathname === '/' ? 'text-white' : 'text-blue-300'} text-2xl block hover:text-white `}
                        to="/">
                            Clientes
                    </Link>
                    <Link 
                        className={`${location.pathname === '/clientes/nuevo' ? 'text-white' : 'text-blue-300'} text-2xl block hover:text-white `}
                        to="/clientes/nuevo">
                            Nuevo Cliente
                    </Link>
                </nav>
            </div>

            <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
                <Outlet></Outlet>
            </main>
        </div>
    </div>
  )
}

export default Layout