import { PersistentUnorderedMap, context, u128 } from "near-sdk-as"

@nearBindgen
export class Movie
{
    id: string;
    title: string;
    year: u128;
    genre: string;
    rating: u128;
    director: string;
    description: string;
    price: u128;
    buyer: string;
    ticketSold: u32;
    public static fromPayload(payload: Movie ): Movie{
        const movie = new Movie();
        movie.id = payload.id;
        movie.title = payload.title;
        movie.year = payload.year;
        movie.genre = payload.genre;
        movie.rating = payload.rating;
        movie.director = payload.director;
        movie.description = payload.description;
        movie.price = payload.price;
        movie.buyer = context.sender;
        return movie;
    }

    public incrementTicketsSold(): void
    {
        this.ticketSold = this.ticketSold + 1;
    }
}


export const Movies = new PersistentUnorderedMap<string, Movie>("MOVIES");