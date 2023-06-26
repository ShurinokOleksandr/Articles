import { IconType } from 'react-icons';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AiOutlineHome } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { MdPeopleAlt } from 'react-icons/md';

export interface SidebarItemsType {
    path:string;
    text:string;
    Icon:IconType;
}
export const SidebarItemsList: Array<SidebarItemsType> = [
    {
        path: RoutePath.main,
        text: 'Главная',
        Icon: AiOutlineHome,
    },
    {
        path: RoutePath.about,
        text: 'Про нас',
        Icon: BiBook,
    },
    {
        path: RoutePath.profile,
        text: 'Профайл страница',
        Icon: MdPeopleAlt,
    },

];
