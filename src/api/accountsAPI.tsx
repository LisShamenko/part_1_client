import { instanceAPI } from './instanceAPI';



// 
export const baseURL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001';



// 
export type RegisterData = {
    login: string,
    email: string,
    password: string,
    birth: string,
    gender: string,
    filename: string,
    file: any,
}

export type AccountData = {
    name: string,
    email: string,
    birth: string,
    gender: string,
    avatar: string,
}

export const accountRegister = async (data: RegisterData) => {

    const formData = new FormData();
    formData.append('file', data.file, data.filename);
    formData.append('name', data.login);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('birth', data.birth);
    formData.append('gender', data.gender);

    return await instanceAPI
        .post<AccountData>('api/register', formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then(response => {
            return response.data;
        });
}



// 
export type UpdateData = {
    login: string,
    oldPassword: string,
    newPassword: string,
    filename: string,
    file: any,
}

export const accountUpdate = async (token: string, data: UpdateData) => {

    const formData = new FormData();
    formData.append('file', data.file, data.filename);
    formData.append('name', data.login);
    formData.append('oldPassword', data.oldPassword);
    formData.append('newPassword', data.newPassword);

    return await instanceAPI
        .post<AccountData>('api/update', formData, {
            headers: {
                "Authorization": token,
                "Content-Type": "multipart/form-data",
            },
        })
        .then(response => {
            return response.data;
        });
}



// 
export type LoginData = {
    email: string,
    password: string,
}

export type AuthData = {
    token: string,
}

export const accountLogin = async (data: LoginData) => {
    return await instanceAPI
        .post<AuthData>('api/login', data)
        .then(response => response.data);
}

export const accountDeleteOrExit = async (isDelete: boolean, token: string) => {
    const url = `api/` + (isDelete ? 'delete' : 'logout');
    return await instanceAPI
        .post<string>(url, {}, {
            headers: {
                Authorization: token,
            },
        })
        .then(response => response.data);
}



// 
export const getAccount = async (token: string) => {
    return await instanceAPI
        .get<AccountData>("api/account", {
            headers: {
                Authorization: token,
            },
        })
        .then(response => response.data);
}

export const getAccounts = async (token: string) => {
    return await instanceAPI
        .get<AccountData[]>("api/accounts", {
            headers: {
                Authorization: token,
            },
        })
        .then(response => response.data);
}
