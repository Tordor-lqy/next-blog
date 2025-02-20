import * as React from "react";

import { cn } from "@/lib/utils";

export const IconSkillFastAPI = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      {...props}
      className={cn("icon-[logos--fastapi-icon]", className)}
    ></span>
  );
};
