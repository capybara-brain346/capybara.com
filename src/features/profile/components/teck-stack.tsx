import React from "react";

import { TECH_STACK } from "../data/tech-stack";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function TeckStack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <div className="space-y-6 px-4 py-2">
          {Object.entries(
            TECH_STACK.reduce((acc, tech) => {
              const category = tech.categories[0];
              if (!acc[category]) {
                acc[category] = [];
              }
              acc[category].push(tech);
              return acc;
            }, {} as Record<string, typeof TECH_STACK>)
          ).map(([category, techs]) => (
            <div key={category}>
              <h3 className="mb-2 text-sm font-medium text-muted-foreground">
                {category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <li key={tech.key}>
                    <a
                      href={tech.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-md bg-muted px-2.5 py-1 text-sm transition-colors hover:bg-muted/80"
                    >
                      {tech.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </PanelContent>
    </Panel>
  );
}
