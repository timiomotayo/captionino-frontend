import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

export function Avatar({ src, alt }) {
  return (
    <AvatarPrimitive.Root className="avatar">
      <AvatarPrimitive.Image className="avatar-img" src={src} alt={alt} />
      <AvatarPrimitive.Fallback className="avatar-fallback">?</AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
}
