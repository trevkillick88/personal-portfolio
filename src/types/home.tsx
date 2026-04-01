
import React from 'react'
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type HeroIcon = React.ComponentType<
  React.PropsWithoutRef<React.ComponentProps<"svg">> & {
    title?: string | undefined;
    titleId?: string | undefined;
  }
>;

export type StatsType = {
    id: number;
    label: string;
    value: string;
}
export type InterestsType = {
    name: string;
    description: string;
    type: string;
    icon?: HeroIcon;
    faIcon?: IconDefinition;
}
type SkillsType = {
    id: string;
    text: string;
}
type ToolType = {
    id: string;
    text: string;
}
export type AreaType = {
    id: string;
    name:string;
    description: string;
    alt_description: string;
    skills: SkillsType[];
    tools: ToolType[];
}
