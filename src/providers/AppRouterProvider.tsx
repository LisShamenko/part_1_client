import { BrowserRouter, Routes, Route } from "react-router-dom";
//
import { AuthPage } from "../modules/AuthPage/AuthPage";
import { AccountPage } from "../modules/AccountPage/AccountPage";
import { PeoplePage } from "../modules/PeoplePage/PeoplePage";



// 
export default function AppRouterProvider() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AuthPage />} />
                <Route path="/account" element={<AccountPage />} />
                <Route path="/people" element={<PeoplePage />} />
            </Routes>
        </BrowserRouter>
    );
}
