export interface ITravel{
    id: number;
    destination: string;
    from: Date;
    to: Date;
    user: IUser;
    manager: IUser;
    type: ITravelType;  
    purpose: ITravelPurpose; 
    reason: string;
    costcenter: ICostCenter
}
export interface ITravelType{
    id: number;
    name: string
}
export interface ITravelPurpose{
    id: number;
    name: string 
}
export interface IUser{
    id: number;
    name: string;
    email: string;
}
export interface ICostCenter{
    id: number;
    name: string
}