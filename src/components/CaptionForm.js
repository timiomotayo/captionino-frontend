import React, { useState } from 'react';
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CaptionForm({ onGenerate }) {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(true);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
    setDisable(false)
  };

  const handleSubmit = (e) => {
    setLoading(true);

    e.preventDefault();
    if (!image) return;
    onGenerate(image);
    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit} className='caption-form'>
      <input className='caption-form-input' type="file" accept="image/*" onChange={handleFileChange} />
      {/* {loading && (
      <Button disabled><Loader2 className="animate-spin" />Generating...</Button>
      )}
      {!loading && <Button disabled={disable} variant="outline" type="submit">Generate Caption</Button>} */}
      {loading ? (
        <Button disabled><Loader2 className="animate-spin" />Generating...</Button>
      ) : (
        <Button disabled={disable} variant="outline" type="submit">Generate Caption</Button>
      )}
    </form>
  );
}
