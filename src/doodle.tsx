// src/components/Doodle.tsx
import React from 'react';
import 'css-doodle';

interface DoodleProps {
    rule?: string;
}

const Doodle: React.FC<DoodleProps> = ({ rule = '' }) => {
    return (
        <css-doodle>
        {rule}
        </css-doodle>
    );
};

export default Doodle;