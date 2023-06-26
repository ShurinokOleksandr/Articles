import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/profile';

const reducers:ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?:string
}
const ProfilePage = memo(({ className }:ProfilePageProps) => {
    const { t } = useTranslation('profile-page');

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            asdasd
        </DynamicModuleLoader>
    );
});
export default ProfilePage;
