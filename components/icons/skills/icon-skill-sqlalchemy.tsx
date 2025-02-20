import * as React from "react";

import { cn } from "@/lib/utils";

export const IconSkillSQLAlchemy = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      {...props}
      className={cn("icon-[simple-icons--sqlalchemy]", className)}
    ></span>
  );
};
