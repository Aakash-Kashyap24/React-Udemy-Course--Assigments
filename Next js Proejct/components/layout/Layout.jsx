
import Header from './Header';
import './Layout.css';

function Layout(props) {
    return (
        <div className='layout'>
            <Header />
            <main className="main">{props.children}</main>
        </div>
    );
}

export default Layout;