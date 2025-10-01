/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { X } from "lucide-react";

import { DynamicIcon } from "lucide-react/dynamic";
import React from "react";

interface ServiceCardProps {
  index: number;
  icon: string;
  title: string;
  description: string;
  details: string;
  setExpandedCard: React.Dispatch<React.SetStateAction<number | null>>;
  handleCardClick: (index: number) => void;
  expandedCard: number | null;
}

const ServiceCard = ({
  index,
  description,
  icon,
  title,
  details,
  expandedCard,
  setExpandedCard,
  handleCardClick,
}: ServiceCardProps) => {
  const isExpanded = expandedCard === index;
  return (
    <Card
      className={` min-h-[160px]  border-border  transition-all duration-300 ${
        isExpanded
          ? "col-span-2 row-span-3 md:col-span-2 overflow-y-hidden bg-primary/10"
          : "col-span-1 bg-background"
      } ${!isExpanded ? "cursor-pointer hover:border-primary/50" : ""}`}
      onClick={() => !isExpanded && handleCardClick(index)}
    >
      <CardContent
        className={`flex flex-col  ${
          isExpanded ? "h-full p-4 px-6" : "items-center text-center p-2"
        }`}
      >
        {isExpanded ? (
          <>
            <div className="mb-2 flex items-start justify-between">
              <div className="flex items-center gap-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white">
                  <DynamicIcon
                    name={icon as any}
                    className="h-8 w-8 text-primary"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{title}</h3>
                  <p className="text-md text-muted-foreground">{description}</p>
                </div>
              </div>
              <button
                onClick={() => setExpandedCard(null)}
                className="rounded-full p-1 hover:bg-muted"
              >
                <X className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground pt-8">
              {details}
            </p>
          </>
        ) : (
          <>
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
              <DynamicIcon
                name={icon as any}
                className="h-4 w-4 text-primary"
              />
            </div>
            <h3 className="mb-1 text-xs font-bold text-foreground">{title}</h3>
            <p className="text-[10px] leading-tight text-muted-foreground">
              {description}
            </p>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
