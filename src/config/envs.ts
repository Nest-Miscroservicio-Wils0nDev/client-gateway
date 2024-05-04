

import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars { 
    PORT : number;
    PRODUCT_MICROSERVICE_HOST : string;
    PRODUCT_MICROSERVICE_PORT : number;
    ORDERS_MICROSERVICE_HOST : string;
    ORDERS_MICROSERVICE_PORT : number;

  //  DATABASE_URL: string;
}

const envsSchema = joi.object({
    PORT : joi.number().required(),
    PRODUCT_MICROSERVICE_HOST:joi.string().required(),
    PRODUCT_MICROSERVICE_PORT:joi.number().required(),
    ORDERS_MICROSERVICE_HOST : joi.string().required(),
    ORDERS_MICROSERVICE_PORT : joi.number().required()
   // DATABASE_URL: joi.string().required()
})
.unknown(true);

const {error,value} = envsSchema.validate(process.env);

if(error){
    throw new Error(`Configuración de validación error: ${error.message}`);
}

const envVars : EnvVars = value;

export const envs = {
    port:envVars.PORT,
    productsMicroserviceHost : envVars.PRODUCT_MICROSERVICE_HOST,
    productsMicroservicePort : envVars.PRODUCT_MICROSERVICE_PORT,
    ordersMicroserviceHost : envVars.ORDERS_MICROSERVICE_HOST,
    ordersMicroservicePort : envVars.ORDERS_MICROSERVICE_PORT
  //  databaseurl : envVars.DATABASE_URL
}