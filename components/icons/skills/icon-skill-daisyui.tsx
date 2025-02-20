import * as React from "react";

import { cn } from "@/lib/utils";

export const IconSkillDaisyUI = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      {...props}
      className={cn("icon-[logos--daisyui]", className)}
    ></span>
  );
};
