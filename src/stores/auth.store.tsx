import { makeAutoObservable, runInAction } from "mobx";
import { useNavigate } from "react-router-dom";
// 
import { AccountData, AuthData } from "../api/accountsAPI";



// 
class AuthStore {
    login: string = '';
    email: string = '';
    birth: string = '';
    gender: string = '';
    avatar: string = '';
    token: string | null = null;
    accounts: AccountData[] = [];

    constructor() {
        makeAutoObservable(this);
        this.token = localStorage.getItem('token');
    }

    setAccount = (data: AccountData) => {
        runInAction(() => {
            this.login = data.name;
            this.email = data.email;
            this.birth = data.birth;
            this.gender = data.gender;
            this.avatar = data.avatar;
        })
    }

    setAccounts = (data: AccountData[]) => {
        this.accounts = data;
    }

    setToken = (data: AuthData) => {
        this.token = data.token;
        localStorage.setItem('token', data.token);
    }

    clearToken() {
        runInAction(() => {
            this.login = '';
            this.email = '';
            this.birth = '';
            this.gender = '';
            this.avatar = '';
            this.accounts = [];
            this.token = '';
        })
        localStorage.removeItem('token');
    }
}

const authStore = new AuthStore();
export default authStore;

// 
export const useLogout = () => {

    const navigate = useNavigate();

    return () => {
        authStore.clearToken();
        navigate('..');
        return null;
    };
}