import { classNames } from 'shared/lib/classNames/classNames';
import { MutatingDots } from 'react-loader-spinner';

interface PageLoaderProps {
    className?:string
}
export const PageLoader = ({ className }:PageLoaderProps) => (
    <div className={classNames('', {}, [className])}>
        <MutatingDots
            height="100"
            width="100"
            color="#4fa94d"
            secondaryColor="#4fa94d"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible
        />
    </div>
);
