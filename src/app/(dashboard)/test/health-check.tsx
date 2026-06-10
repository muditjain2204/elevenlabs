"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/routers/client";

export function HealthCheck () {
    //write the trpc hook here 
    const trpc = useTRPC();
    //it gives an error if we direct use the useSuspenceQuery without prefecthing it 
    const { data } = useSuspenseQuery(trpc.health.queryOptions());
    return (
        <div className="rounded-lg border p-6 text-center">
            <p className="text-muted-foreground text-sm">trpc status</p>
            <p className="mt-2 text-lg font-semibold">{data.status}</p>
           
        </div>
    )
}