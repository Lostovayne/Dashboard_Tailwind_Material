import Menu from './components/Sidebar/Menu.Sidebar'
import Sidebar from './components/Sidebar/Sidebar'

const App = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-6  bg-slate-400'>
            <div className='col-span-1 bg-black hidden lg:block '>
                <Sidebar />
            </div>
            <div className='col-span-5'>
                <Menu />
            </div>
        </div>
    )
}
export default App
