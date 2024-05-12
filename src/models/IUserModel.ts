import {IAddressModel} from "./IAddressModel";
import {ICompanyModel} from "./ICompanyModel";

export interface IUserModel {
    id: number,
    name: string,
    username: string,
    email: string,
    address: IAddressModel,
    phone: string,
    website: string,
    company: ICompanyModel
}