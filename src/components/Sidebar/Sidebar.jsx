
import { NavLink } from "react-router-dom";


const Sidebar = () => {

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/releases', label: 'Releases' },
        { path: '/artists', label: 'Artists' },
        { path: '/labels', label: 'Labels' },
        { path: '/wallet', label: 'Wallet' },
        { path: '/statistics', label: 'Statistics' },
        { path: '/account', label: 'Account' },
        { path: '/support', label: 'Support' }
    ];

    return (
        <div className="h-auto">
           <div className="flex text-white flex-col gap-4 h-full overflow-y-auto ">
           {
                navLinks.map(i=> 
                    
                        <NavLink className={({ isActive }) =>
                            `block text-white ${isActive ? 'bg-red-500 ' : ''}`
                        } key={i.path} to={i.path}>{i.label} </NavLink>
                    
                )
            }
           </div>
        </div>
    );
};

export default Sidebar;