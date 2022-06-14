import { v4 as uuid4 } from 'uuid';
import { parseNearAmount } from 'near-api-js/lib/utils/format';

const GAS = 100000000000000

export function createMovie(movie) {
    movie.id = uuid4();
    movie.price = parseNearAmount(movie.price + "");
    return window.contract.seeMovie({ movie });
  }
  
  export function getMovies() {
    return window.contract.getMovies();
  }
  
  export async function buyTicket({ id, price }) {
    await window.contract.buyTicket({ productId: id }, GAS, price);
  }

