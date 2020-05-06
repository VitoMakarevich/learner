
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export interface SignInRequest {
    login: string;
    password: string;
}

export interface IMutation {
    delete(id: number): Post | Promise<Post>;
}

export interface Post {
    id: number;
    url: string;
    description?: string;
    created: string;
}

export interface IQuery {
    getPosts(): Post[] | Promise<Post[]>;
    signIn(data?: SignInRequest): SignInResponse | Promise<SignInResponse>;
}

export interface SignInResponse {
    user: User;
    token: string;
}

export interface User {
    id: number;
    name: string;
}
