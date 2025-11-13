export interface IStaff {
    id: number;
    name: string;
    email: string;
    username: string;
    address : Iaddress;
    phone: number;
    website: string;
    company: Icompany;
}
export interface Icompany {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface Iaddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Igeo;
}

export interface Igeo {
    lat: string;
    lng: string;
}