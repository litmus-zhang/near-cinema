import { Movies, Movie } from "./Model";
import { context, ContractPromiseBatch } from "near-sdk-as";


export function setMovie(movie: Movie): void {

    let storedMovie = Movies.get(movie.id);
    if (storedMovie !== null)
    { 
       throw new Error("Movie already exists"); 
    }
    Movies.set(movie.id, Movie.fromPayload(movie));
}

export function getMovie(id: string): Movie | null {
    return Movies.get(id);
}

export function getMovies(): Movie[] {
    return Movies.values();
}

export function buyTicket(movieId: string): void
{
    const movie = getMovie(movieId);
    if(movie == null){
        throw new Error("Movie does not exist");
    }
    if (movie.price.toString() != context.attachedDeposit.toString())
    {
        throw new Error(`You need to pay ${movie.price.toString()} NEAR`);
    }
    ContractPromiseBatch.create(movie.buyer).transfer(context.attachedDeposit)
    movie.incrementTicketsSold()
    Movies.set(movie.id, movie);
}