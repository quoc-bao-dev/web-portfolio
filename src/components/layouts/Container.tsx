import React, { PropsWithChildren } from 'react';

const Container = ({
    children,
    className,
}: PropsWithChildren & { className?: string }) => {
    return (
        <div
            className={`px-4 md:px-8 lg:px-24 xl:max-w-[1440px] mx-auto ${className}`}
        >
            {children}
        </div>
    );
};

export default Container;
