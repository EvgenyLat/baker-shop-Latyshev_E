import {Paths} from "./paths.ts";

export enum Roles {
}
export type RouteType = {
    path: Paths,
    title: string,
    role?: Roles
}

export type LoginData = {
    email: string,
    password: string
}