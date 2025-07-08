import { PropsWithChildren } from "react";
    
    const MenuItem = (props: PropsWithChildren <unknown>) => {
        const {children} = props ;

        return <li>{children}</li>;
    };
    
    const Sidebar = () => {
    return (
        <nav>
         <img  
         src="https://img.hotstar.com/image/upload/f_auto,q_90,w_3840/v1710482713/feature/rebranding/disney-plus-hotstar-logo.svg" 
         />
        <ul>
        <MenuItem> Search </MenuItem>
        <MenuItem> Home </MenuItem>
        <MenuItem>Movies</MenuItem>
        <MenuItem>Series</MenuItem>
        </ul>
        </nav>

    );
};

export default Sidebar