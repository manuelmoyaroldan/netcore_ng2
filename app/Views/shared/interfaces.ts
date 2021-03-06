export interface ITravel{
    id: number;
    destination?: string;
    from?: Date;
    to?: Date;
    user?: IUser;
    manager?: IUser;
    type?: ITravelType;  
    purpose?: ITravelPurpose; 
    id_purpose?: number;
    reason?: string;
    id_costcenter?: number;
    costcenter?: ICostCenter;
    travelPlan?: ITravelPlan[];
    advance?: IAdvance[];
}
export interface ITravelType{
    id: number;
    name?: string
}
export interface ITravelPurpose{
    id: number;
    name: string 
}
export interface IUser{
    id: number;
    name: string;
    email?: string;
    manager?: IUser;
}
export interface ICostCenter{
    id: number;
    name: string
}
export interface ITravelPlan{
    id: number;
    travel_yn?: boolean;
    hotel_yn?: boolean;
    origin?: string;
    destination?: string;
    from?: Date;
    to?: Date;
    rounTrip?: boolean;
    hotel_preference?: string;
    id_TransportWay?: number;
    transportWay?: ITransportWay;

}
export interface ITransportWay{
    id: number;
    name?: string;
    ico?: string;
}
export interface IAdvance{
    id: number;
    description?: string;
    amount?: number;
    id_currency?:number;
    currency?: ICurrency;
}
export interface ICurrency{
    id: number;
    description?: string;
}
