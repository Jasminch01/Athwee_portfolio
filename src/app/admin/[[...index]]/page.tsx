"use client"
import { NextStudio } from 'next-sanity/studio';
import React from 'react';
import config from '../../../../sanity.config';

const page = () => {
    return (
        <NextStudio config={config}>

        </NextStudio>
    );
};

export default page;