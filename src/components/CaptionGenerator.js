import React, { useState } from 'react';
import CaptionForm from '../components/CaptionForm';
import CaptionList from '../components/CaptionList';
import { Button } from "@/components/ui/button"


export default function CaptionGenerator() {
    const [captions, setCaptions] = useState([])
    const [showForm, setShowForm] = useState(false)

    const handleGenerateCaption = (imageFile) => {

        const dummyCaption = {
        imageUrl: URL.createObjectURL(imageFile),
        text: "This is a dummy caption for the uploaded image. It describes the image content briefly."
    };

    setTimeout(() => {
        setCaptions(prev => [dummyCaption, ...prev]);
        setShowForm(false);
      }, 3000);
    
  };

  return (
      <div>
        <div className='dashboard-div'>
          <div className='create-btn'>
              <Button onClick={() => setShowForm(true)} variant="outline">Start Creating Caption</Button>
              <div className='create-form'>
                  {showForm && (
                  <CaptionForm onGenerate={handleGenerateCaption} />
                  )}
              </div>
          </div>
          <div className='dashboard-items'>
            <div className='dashboard-item1'>
              <h3>Your Captions:</h3>
              <CaptionList captions={captions} />
            </div>
          </div>
        </div>
      </div>
    );
}






























// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Card, CardContent } from "@/components/ui/card";
// import { Loader2 } from "lucide-react";

// const CaptionGenerator = () => {
//   const [image, setImage] = useState(null);
//   const [caption, setCaption] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setImage(URL.createObjectURL(file));
//     }
//   };

//   const generateCaption = () => {
//     setLoading(true); // Start loading

//     setTimeout(() => {
//       // Simulate backend response delay
//       setCaption("This is a dummy caption for testing purposes.");
//       setLoading(false); // Stop loading
//     }, 3000); // Simulated delay of 3 seconds
//   };

//   return (
//     <div className="flex flex-col items-center p-4">
//       <Card className="p-6 w-full max-w-md shadow-md">
//         <CardContent className="flex flex-col items-center gap-4">
//           <Input type="file" onChange={handleImageChange} />
//           {image && <img src={image} alt="Preview" className="w-40 h-40 object-cover rounded-md" />}
//           <Button onClick={generateCaption} disabled={loading}>
//             {loading ? <Loader2 className="animate-spin" /> : "Generate"}
//           </Button>
//           {loading && <p className="text-gray-500">Generating caption...</p>}
//           {!loading && caption && (
//             <div className="mt-4 p-3 border rounded-lg bg-gray-100 w-full">
//               <p className="font-semibold">Generated Caption:</p>
//               <p>{caption}</p>
//             </div>
//           )}
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default CaptionGenerator;
