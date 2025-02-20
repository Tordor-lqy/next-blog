"use client";

import * as React from "react";

import { Viewer } from "@bytemd/react";

import { plugins, sanitize } from "./config";

interface BytemdViewerProps {
  body: string;
}

export const BytemdViewer = ({ body }: BytemdViewerProps) => {
  return <Viewer value={body} plugins={plugins} sanitize={sanitize} />;
};
