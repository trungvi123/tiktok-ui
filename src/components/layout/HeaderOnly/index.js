import { Footer,Header } from '~/components/layout/components/';

function HeaderOnly({children}) {
    return (
        <div className="swapper">
            <Header/>
            <div className="swapper-body">
                <div>
                   {children} 
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default HeaderOnly;