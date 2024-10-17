import { config } from 'dotenv'

// intentar leer las variables de entonro definidas en el computador
config()

export default {
    PORT: process.env.PORT || 3000,
    DB_USER: process.env.DB_USER || '',
    DB_PWD: process.env.DB_PWD || '',
    DB_NAME: process.env.DB_NAME || '',
    SERVER: process.env.SERVER || '',
}