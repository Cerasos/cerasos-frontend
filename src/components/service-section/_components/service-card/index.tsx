/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Card, CardContent } from "@/components/ui/card";

import { DynamicIcon } from "lucide-react/dynamic";
import React from "react";

interface ServiceCardProps {
  index: number;
  icon: string;
  title: string;
  description: string;
  details: string;
  handleCardClick: (index: number) => void;
}

const ServiceCard = ({
  index,
  description,
  icon,
  title,
  handleCardClick,
}: ServiceCardProps) => {
  return (
    <Card
      onPointerDown={(e) => e.stopPropagation()}
      className={` min-h-[160px]  border-border col-span-1 bg-background group hover:bg-primary/10 transition-all duration-300 cursor-pointer`}
      onClick={() => handleCardClick(index)}
    >
      <CardContent className={`flex flex-col  items-center text-center p-2 `}>
        <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 group-hover:bg-white transition-all duration-300">
          <DynamicIcon name={icon as any} className="h-4 w-4 text-primary" />
        </div>
        <h3 className="mb-1 text-sm md:text-xs font-bold text-foreground">
          {title}
        </h3>
        <p className="text-[10px] leading-tight text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
