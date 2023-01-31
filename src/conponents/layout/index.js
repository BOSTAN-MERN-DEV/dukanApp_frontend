import Container from 'react-bootstrap/Container';
import { Outlet } from "react-router-dom";
import { Header } from "./header";

export const Layout = () => {
    return (
        <Container fluid>
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