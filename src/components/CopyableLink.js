import React, { useState } from 'react';
import { MdContentCopy } from 'react-icons/md';

const CopyableLink = ({ name, url }) => {
    const [copied, setCopied] = useState(false);

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(url)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);
            })
            .catch(err => console.error('Failed to copy:', err));
    };

    return (
        <div className="flex flex-col bg-richblack-700 p-4 rounded-lg shadow-sm mb-4 relative">
            <div className='flex justify-between mb-2 items-center'>
                <p className="text-sm text-richblack-25">{name}</p>
                <MdContentCopy
                    className="text-richblack-25 cursor-pointer text-sm"
                    onClick={handleCopyToClipboard}
                />
                {copied &&
                    <span className="absolute right-0 top-0 -mr-4 -mt-4 text-xs bg-richblack-200 text-richblack-700 px-2 py-1 rounded">
                        Copied
                    </span>
                }
            </div>
            <p className="text-sm font-medium text-richblack-200">
                {url || 'N/A'}
            </p>
        </div>
    );
};

export default CopyableLink;
