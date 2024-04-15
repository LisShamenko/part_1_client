import authStore from "./auth.store";



// 
export class RootStore {
    authStore = authStore;

    getState() {
        return {
            auth: this.authStore,
        };
    }
}

const store = new RootStore();
export default store;
