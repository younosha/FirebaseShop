import React from "react";
import {Switch, Route} from "react-router-dom";
import {CatalogPage} from "./pages/Catalog/CatalogPage";
import {MainPage} from "./pages/Main/MainPage";
import {CabinetPage} from "./pages/Cabinet/CabinetPage";
import {ProductPage} from "./pages/Product/ProductPage";
import NavBar from "./components/Navbar/Navbar";

export const useRoutes = () => {
        return (
          <>
            <NavBar/>
            <Switch>
            <Route path="/catalog/:id" exact>
                <ProductPage />
              </Route>
              <Route path="/catalog" exact>
                <CatalogPage />
              </Route>
              <Route path="/cabinet" exact>
                <CabinetPage />
              </Route>
              <Route path="/" exact>
                <MainPage />
              </Route>
            </Switch>
          </>
        );
};
