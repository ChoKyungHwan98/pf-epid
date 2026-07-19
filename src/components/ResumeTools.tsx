import React from 'react';
import { Wrench } from 'lucide-react';
import { BRAND_ICONS } from './icons/BrandIcons';
import type { ResumeData } from '../types';

interface ResumeToolsProps {
  data: ResumeData;
}

const TOOL_GROUPS = [
  { label: '문서 / 데이터', tools: ['Excel', 'PowerPoint', 'Word', 'Notion'] },
  { label: 'AI 활용', tools: ['ChatGPT', 'Claude', 'Gemini', 'Hermes', 'Codex', 'Antigravity'] },
  { label: '제작 / 엔진', tools: ['Figma', 'Unity'] },
];

export const ResumeTools = ({ data }: ResumeToolsProps) => {
  if (!data.tools || data.tools.length === 0) return null;

  return (
    <section className="resume-tools-content" aria-label="기술 역량 및 도구">
      <h3 className="resume-tools-title">
        <Wrench className="text-[#0047BB] w-5 h-5" /> 기술 역량 및 도구
      </h3>
      <div className="resume-tools-groups">
        {TOOL_GROUPS.map((group) => {
          const tools = group.tools
            .map((toolName) => data.tools.find((tool) => tool.name === toolName))
            .filter((tool): tool is ResumeData['tools'][number] => Boolean(tool));
          if (tools.length === 0) return null;

          return (
            <div key={group.label} className="resume-tools-group">
              <div className="resume-tools-group-head">
                <h4 className="resume-tools-group-title">{group.label}</h4>
              </div>
              <div className="resume-tools-grid">
                {tools.map((tool, idx) => (
                  <div
                    key={idx}
                    className="resume-tool-item"
                    title={tool.name}
                    aria-label={tool.name}
                  >
                    <div className="resume-tool-icon" aria-hidden="true">
                      {BRAND_ICONS[tool.name] || <Wrench className="w-5 h-5 text-zinc-400" />}
                    </div>
                    <span className="resume-tool-name">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
