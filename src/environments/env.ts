import { DevEnvironment } from "./dev.env";
import { ProdEnvironment } from "./prod.env";

export interface Environment {
    db_url: string
}

export function getEnvironmentVariables()
{
    if(process.env.NODE_ENV ='Developement')
    {
     return ProdEnvironment;
}
return DevEnvironment;
}