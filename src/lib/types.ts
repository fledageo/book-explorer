export interface IBook{
    id:string,
    title:string
    author:string
    rating:number
    photo:string
    reviews:IUserReview[]
}

export type AddBookData = Omit<IBook,"id"> 

export interface IUserReview{
    email:string
    text:string
    rate:number
}


export interface IUpdateBookPayload{
    id:string
    data:IBook
}