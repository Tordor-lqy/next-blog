import * as React from "react";

import { cn } from "@/lib/utils";

export const IconSkillShadcnUI = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      {...props}
      className={cn("icon-[simple-icons--shadcnui]", className)}
    ></span>
  );
};
