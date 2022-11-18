import { createStorken, Storken } from 'storken'
import { Backend } from '../Backend';


export const { 
  useStorken, 
  useLoading, 
  usePlugin,
  Storken: GlobalStorken
} = createStorken({
  initialValues: {
    productId: 0 as number,
    statuss:40 as number,
    isToken:false as boolean,
    user: {} as any,


  },
  getters:{
    user: async () =>   Backend.getUser(),
    product: async ()=>Backend.getProduct(),
    announcement: async()=>Backend.getProduct(),
    survey: async()=>Backend.getSurvey(),
    
  }
})

