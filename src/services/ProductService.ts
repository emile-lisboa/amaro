import axios from "@/config";

class ProductService {
  getAll() {
    return axios.get("/products");
  }
  findByNome(nome: string) {
    return axios.get(`/products?nome=${nome}`);
  }
}

export default new ProductService();
