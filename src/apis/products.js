import server from './server'

export async function getAll(){
    let { data }  = await server.get('merchandise');
    return data;
}