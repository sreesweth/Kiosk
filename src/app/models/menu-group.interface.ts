import { IMenuItem } from './menu-item.interface';

export interface IMenuGroup {
    id: string;
    label: string;
    name: string;
    image: string;
    description: string;
    type: string;
    subTitle?: string;
    menuItems: Array<IMenuItem>;
}
