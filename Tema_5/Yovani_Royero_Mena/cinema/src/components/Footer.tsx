import React from 'react';
import './footer.css';

export const Footer= () => {
    return (
        <div className="footer">
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
    );
};

