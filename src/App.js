import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/layout/';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        }else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route 
                                key={index} path={route.path} 
                                element={<Layout>{route.element}</Layout>}
                            />
                        )
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
