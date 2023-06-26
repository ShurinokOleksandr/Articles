import { useTranslation } from 'react-i18next';
import { memo, useEffect } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

const reducers:ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?:string
}
const ProfilePage = memo(({ className }:ProfilePageProps) => {
    const { t } = useTranslation('profile-page');
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <ProfileCard />
        </DynamicModuleLoader>
    );
});
export default ProfilePage;
