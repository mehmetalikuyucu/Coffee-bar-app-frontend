
import { Backend } from "../Backend";

export const Getters={
    user: async () =>   Backend.getUser(),
    product: async ()=>Backend.getProduct(),
    announcement: async()=>Backend.getProduct(),
    survey: async()=>Backend.getSurvey(),
}
export default Getters;