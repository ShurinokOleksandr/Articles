import { IconType } from 'react-icons';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AiOutlineHome } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { MdPeopleAlt, MdOutlineArticle } from 'react-icons/md';

export interface SidebarItemsType {
    path:string;
    text:string;
    Icon:IconType;
    authOnly?:boolean;
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
        text: 'Профиль',
        Icon: MdPeopleAlt,
        authOnly: true,
    },
    {
        path: RoutePath.articles,
        text: 'Статьи',
        Icon: MdOutlineArticle,
        authOnly: true,
    },
];
