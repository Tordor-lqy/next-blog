import * as React from "react";

import { cn } from "@/lib/utils";

export const IconLogo1panel = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      {...props}
      className={cn("icon-[simple-icons--1panel]", className)}
    ></span>
  );
};
