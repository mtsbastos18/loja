import { http } from './config'

export default {
    listar:() => {
        return http.get('products')
    },

    getById:(id) => {
        return http.get('products/'+id)
    }
}