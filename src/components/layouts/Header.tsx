import { ModeToggle } from '../ModeToggle';
import Container from './Container';
import NavBar from './NavBar';

const Header = () => {
    return (
        <header className="h-[var(--header-height)] flex items-center w-full fixed z-50 bg-primary-50/50 backdrop-blur-sm">
            <Container className="w-full">
                <div className="flex items-center justify-between">
                    <h1 className="text-primary-600 text-3xl font-semibold">
                        <p>{'<QB/>'}</p>
                    </h1>
                    <NavBar />
                    <ModeToggle />
                </div>
            </Container>
        </header>
    );
};

export default Header;
