import { Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { SearchBar } from './searchbar';


export const Layout = () => {
    return (
        <Container fluid>
            <SearchBar/>
            <Header />
            <main>
                <Outlet />
            </main>
        </Container>

        // <>
        //     <Header />
        //     <main>
        //         <Outlet />
        //     </main>
        // </>

        // <main></main>

        // <div>
        //     <Header />
        //     <main>
        //         <Outlet />
        //     </main>
        // </div>
    );
}