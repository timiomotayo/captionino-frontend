import React from 'react';
import Image from "next/image";

export default function CaptionList({ captions }) {
  return (
    <div className='caption-list'>
      {captions.length === 0 ? (
        <p>No captions generated yet.</p>
      ) : (
        captions.map((caption, index) => (
          <div key={index} className='caption-list-div'>
            <Image 
              src={caption.imageUrl} 
              alt="Thumbnail" 
              className='caption-list-image'
            />
            <div>
              <p>{caption.text.substring(0, 50)}...</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
