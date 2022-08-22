import axios from 'axios';


const INVENTORY_BASE_API_URL = 'http://localhost:8081/api/v1/inventory';

export function getAllInventory(){
    return axios.get(INVENTORY_BASE_API_URL);
}

export function createInventory(inventory){
    return axios.post(INVENTORY_BASE_API_URL,inventory);
}

export function getById(id){
    return axios.get(`${INVENTORY_BASE_API_URL}/${id}`);
}

export function updateInventory(id, inventory){
    return axios.put(`${INVENTORY_BASE_API_URL}/${id}`, inventory);
}

export function deleteInventory(id){
    return axios.delete(`${INVENTORY_BASE_API_URL}/${id}`);
}
