
import { baseProcedure, 
        createTRPCRouter 
        } from '../init';
import { HealthCheck } from '@/app/(dashboard)/test/health-check';

export const appRouter = createTRPCRouter({
  health: baseProcedure.query(async () =>{
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return  {status : "ok"  , code:1234 } ;

  }),
    
});
 
// export type definition of API
export type AppRouter = typeof appRouter;