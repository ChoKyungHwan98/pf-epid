import React from 'react';
import { Mail, Phone, Calendar, MapPin, Shield } from 'lucide-react';
import { EditableText } from './EditableText';
import type { ResumeData } from '../types';

interface ResumeHeaderProps {
  data: ResumeData;
  setData: (d: ResumeData) => void;
  isEditing: boolean;
  isGeneratingPdf: boolean;
}

export const ResumeHeader = ({ data, setData, isEditing, isGeneratingPdf }: ResumeHeaderProps) => {
  return (
    <header className="resume-profile-header flex flex-col md:flex-row items-center md:items-start gap-8 p-8 lg:p-10 bg-[#FAFAFA] border-b border-zinc-100">
      {/* Portrait Frame */}
      <div className="resume-portrait-wrap relative shrink-0">
        <div className="resume-portrait-frame w-56 lg:w-64 rounded-sm overflow-hidden border border-black/10 shadow-xl bg-white">
          <img 
            src={data.image || "https://picsum.photos/seed/profile/600/800"} 
            alt="Profile" 
            className="w-full h-auto object-contain block" 
          />
        </div>
      </div>

      {/* Identity & Summary */}
      <div className="resume-identity-block flex-1 flex flex-col items-center md:items-start text-center md:text-left pt-3">
        <h1 className="text-4xl lg:text-[56px] font-display font-bold text-[#1A1A1A] tracking-tighter leading-tight mb-4">
          <EditableText value={data.name} onSave={(v) => setData({...data, name: v})} isEditing={isEditing} />
        </h1>
        
        <div className="resume-summary-copy w-full text-left text-[18px] lg:text-[20px] text-[#2C2C2C] leading-[1.8] font-medium [&_strong]:text-[#0047BB] [&_strong]:font-bold break-keep [&>p]:m-0 [&>p]:mb-3 last:[&>p]:mb-0">
          <EditableText value={data.summary} onSave={(v) => setData({...data, summary: v})} isEditing={isEditing} markdown={true} />
        </div>

        {/* Contact Info Grid */}
        <div className="resume-contact-grid mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5">
          <div className="resume-contact-item flex items-center gap-3 group">
            <Mail className="w-5 h-5 text-[#0047BB] shrink-0" strokeWidth={2} />
            <div className="flex flex-col">
              <span className="text-[12px] font-mono text-zinc-400 uppercase tracking-widest mb-0.5">이메일</span>
              <span className="text-[15px] text-[#1A1A1A] font-semibold lowercase">
                <EditableText value={data.email} onSave={(v) => setData({...data, email: v})} isEditing={isEditing} />
              </span>
            </div>
          </div>
          {data.phone && (
            <div className="resume-contact-item flex items-center gap-3 group">
              <Phone className="w-5 h-5 text-[#0047BB] shrink-0" strokeWidth={2} />
              <div className="flex flex-col">
                <span className="text-[12px] font-mono text-zinc-400 uppercase tracking-widest mb-0.5">전화번호</span>
                <span className="text-[15px] text-[#1A1A1A] font-semibold">
                  <EditableText value={data.phone} onSave={(v) => setData({...data, phone: v})} isEditing={isEditing} />
                </span>
              </div>
            </div>
          )}
          {data.birthDate && (
            <div className="resume-contact-item flex items-center gap-3 group">
              <Calendar className="w-5 h-5 text-[#0047BB] shrink-0" strokeWidth={2} />
              <div className="flex flex-col">
                <span className="text-[12px] font-mono text-zinc-400 uppercase tracking-widest mb-0.5">생년월일</span>
                <span className="text-[15px] text-[#1A1A1A] font-semibold">{data.birthDate}</span>
              </div>
            </div>
          )}
          {data.address && (
            <div className="resume-contact-item flex items-center gap-3 group">
              <MapPin className="w-5 h-5 text-[#0047BB] shrink-0" strokeWidth={2} />
              <div className="flex flex-col">
                <span className="text-[12px] font-mono text-zinc-400 uppercase tracking-widest mb-0.5">주소</span>
                <span className="text-[15px] text-[#1A1A1A] font-semibold">
                  <EditableText value={data.address} onSave={(v) => setData({...data, address: v})} isEditing={isEditing} />
                </span>
              </div>
            </div>
          )}
          {data.military && (
            <div className="resume-contact-item flex items-center gap-3 group">
              <Shield className="w-5 h-5 text-[#0047BB] shrink-0" strokeWidth={2} />
              <div className="flex flex-col">
                <span className="text-[12px] font-mono text-zinc-400 uppercase tracking-widest mb-0.5">병역</span>
                <span className="text-[15px] text-[#1A1A1A] font-semibold">{data.military.branch} {data.military.rank} {data.military.status}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
