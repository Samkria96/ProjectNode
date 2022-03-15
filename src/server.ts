import * as express from 'express'
import { getEnvironmentVariables } from './environments/env'
import userRoutes from './Routers/userRoutes'
import * as mongoose from 'mongoose'
import { STATUS_CODES } from 'http'
export class Server {
     public app: express.Application = express()

     constructor() {
          this.SetConfigurations()
          this.SetRoutes()
          this.error404Handler()
          this.handleErrors()
     }

     SetConfigurations() {
          this.setMongodb()
     }
     setMongodb() {
          const databaseUr1 = getEnvironmentVariables().db_url

          mongoose.connect(databaseUr1)
               .then(() => {
                    console.log('mongodb is connected')
               })
     }


     SetRoutes() {
          this.app.use('/api/user', userRoutes)

     }
     error404Handler() {
          this.app.use((req, res) => {
               res.status(404).json({ status: 404, message: 'user not found' });
          })

     }
     handleErrors() {
          this.app.use((error:any, req:any, res:any, next:any) => {

               const errorStatus = req.errorStatus || 500;

               res.status(errorStatus).json({ status: errorStatus, message: error.message || 'something went wrong. Please try again later' })

          })
     }
}
