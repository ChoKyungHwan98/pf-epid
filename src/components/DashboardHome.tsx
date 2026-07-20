import React from 'react';
import type { DashboardView } from './DashboardShell';
import { motion } from 'motion/react';
import { ArrowRight, Terminal, Gamepad2, Settings2, Sparkles } from 'lucide-react';

interface DashboardHomeProps {
  onViewChange: (view: DashboardView) => void;
}

export const DashboardHome = ({ onViewChange }: DashboardHomeProps) => {
  return (
    <section className="dashboard-home relative overflow-hidden !justify-start lg:!justify-center w-full min-h-[calc(100vh-116px)]">
      {/* Removed ambient glows per user request to keep background clean */}
      <div className="w-full max-w-[1280px] ml-[-68px] grid grid-cols-2 gap-16 items-center relative z-10 pl-0">
        
        {/* Left Side: Copy */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start w-full"
        >
          <h1 className="text-left m-0 mb-10 font-black tracking-tighter leading-[1.15] text-white">
            <div className="flex flex-col gap-7">
              <div className="flex items-baseline gap-4">
                <span className="text-[#e07070] font-black text-9xl drop-shadow-[0_0_24px_rgba(224,112,112,0.35)]">−</span>
                <span className="text-[#a1a1aa] font-extrabold text-8xl pr-5">를</span>
                <span className="text-gray-400 font-black text-9xl drop-shadow-[0_0_20px_rgba(156,163,175,0.3)]">0</span>
                <span className="text-[#a1a1aa] font-extrabold text-8xl">으로,</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-gray-400 font-black text-9xl drop-shadow-[0_0_20px_rgba(156,163,175,0.3)]">0</span>
                <span className="text-[#a1a1aa] font-extrabold text-8xl pr-5">을</span>
                <span className="text-blue-500 font-black text-9xl drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]">+</span>
                <span className="text-[#a1a1aa] font-extrabold text-8xl">로.</span>
              </div>
            </div>
          </h1>

          <p className="text-[#f4f3ee] text-4xl font-bold max-w-[800px] leading-[1.7] mb-12 tracking-tight opacity-90 drop-shadow-md">
            누군가의 어려움을 외면하지 않고,<br className="block" />
            누군가의 하루에 즐거움을 더하는 게임 기획자가 되고싶습니다.
          </p>

          <div className="flex flex-row items-center gap-5 w-auto">
            <button 
              type="button" 
              className="group relative px-10 py-5 bg-[#f4f3ee] text-[#15171b] font-black text-xl rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(244,243,238,0.15)] transition-all hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(244,243,238,0.25)]"
              onClick={() => onViewChange('resume')}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                이력서 보기 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </button>

            <button 
              type="button" 
              className="px-10 py-5 border-[1.5px] border-[rgba(244,243,238,0.2)] text-[#d4d4d8] font-bold text-xl rounded-2xl hover:bg-[rgba(244,243,238,0.06)] hover:text-[#f4f3ee] hover:border-[rgba(244,243,238,0.3)] transition-all flex justify-center items-center"
              onClick={() => onViewChange('portfolio')}
            >
              포트폴리오
            </button>
          </div>
        </motion.div>

        {/* Right Side: Character Image (Skin 2 Spine Animation) */}
        <motion.div 
           initial={{ opacity: 0, x: 40 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
           className="hidden lg:flex flex-col relative items-center justify-center w-full min-h-[500px]"
        >
           {/* Glow behind character */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-tr from-[#d7cab3]/[0.08] to-white/[0.03] blur-[80px] rounded-full pointer-events-none" />
           
           <SpineCharacter />
        </motion.div>

      </div>
    </section>
  );
};

const SpineCharacter = () => {
  const CONTAINER_ID = 'xxionx-spine-container';
  const [errorMsg, setErrorMsg] = React.useState<string | null>(null);
  const playerRef = React.useRef<any>(null);
  const isInitializing = React.useRef(false); // 로딩 중 중복 실행 방지 플래그

  React.useEffect(() => {
    let playerInstance: any = null;
    let isMounted = true;

    function initSpine() {
      const el = document.getElementById(CONTAINER_ID);
      if (!el || !isMounted) return;
      
      if (playerRef.current || isInitializing.current) return;
      isInitializing.current = true;

      try {
        // @ts-ignore
        playerInstance = new (window as any).spine.SpinePlayer(CONTAINER_ID, {
          skelUrl: "/pf-epid/spine/xXionxSkin2.skel.asset",
          atlasUrl: "/pf-epid/spine/xXionxSkin2.atlas.asset",
          animation: "Idle_1",
          alpha: true,
          backgroundColor: "#00000000",
          showControls: false,
          showLoading: false, // <-- Spine 자체 로딩 UI 끄기 (미묘한 로딩 제거)
          premultipliedAlpha: true,
          preserveDrawingBuffer: false,
          success: (player: any) => {
            if (!isMounted) {
              player.dispose();
              return;
            }
            playerRef.current = player;
            isInitializing.current = false;
            
            const skins = player.skeleton?.data?.skins;
            if (skins && skins.length > 1) {
              const activeSkin = skins.find((s: any) => s.name !== 'default') || skins[0];
              player.skeleton.setSkin(activeSkin);
              player.skeleton.setSlotsToSetupPose();
            }
          },
          error: (_player: any, msg: string) => {
            if (!isMounted) return;
            console.error("Spine error:", msg);
            setErrorMsg(msg || "Unknown error in SpinePlayer callback");
            isInitializing.current = false;
          }
        });
      } catch (e: any) {
        if (!isMounted) return;
        console.error("Spine init error:", e);
        setErrorMsg(e.message || String(e));
        isInitializing.current = false;
      }
    }

    if (!document.getElementById('spine-player-css')) {
      const link = document.createElement('link');
      link.id = 'spine-player-css';
      link.rel = 'stylesheet';
      link.href = '/pf-epid/spine/spine-player.css';
      document.head.appendChild(link);
    }

    // Dynamic injection bypasses Vite's module pipeline
    if ((window as any).spine?.SpinePlayer) {
      initSpine();
    } else if (!document.getElementById('spine-player-script')) {
      const script = document.createElement('script');
      script.id = 'spine-player-script';
      script.src = '/pf-epid/spine/spine-player.js';
      script.onload = initSpine;
      script.onerror = () => { if (isMounted) setErrorMsg('spine-player.js 로드 실패'); };
      document.head.appendChild(script);
    } else {
      const existingScript = document.getElementById('spine-player-script') as HTMLScriptElement;
      if (existingScript.onload) {
        const prev = existingScript.onload;
        existingScript.onload = (e) => { (prev as any)(e); initSpine(); };
      } else {
        existingScript.addEventListener('load', initSpine, { once: true });
      }
    }

    return () => {
      isMounted = false;
      isInitializing.current = false;
      if (playerInstance?.dispose) playerInstance.dispose();
      playerRef.current = null;
    };
  }, []);

  if (errorMsg) {
    return (
      <div className="w-full max-w-[500px] p-6 bg-red-900/50 border border-red-500 rounded-xl relative z-10 text-white font-mono text-sm break-all">
        <h3 className="font-bold text-red-300 mb-2">Spine Load Error</h3>
        {errorMsg}
      </div>
    );
  }

  const handleCharacterClick = () => {
    if (!playerRef.current?.animationState || !playerRef.current?.skeleton) return;
    
    try {
      const animState = playerRef.current.animationState;
      const skeleton = playerRef.current.skeleton;

      animState.clearTracks();
      skeleton.setToSetupPose();
      animState.setAnimation(0, 'Smash_End_1', false);
      animState.addAnimation(0, 'Idle_1', true, 0);
    } catch (e: any) {
      console.error("Spine click error:", e);
    }
  };

  return (
    <div 
      className="w-full max-w-[900px] h-[75vh] min-h-[700px] relative z-10 scale-[1.25] origin-center translate-y-16"
    >
      {/* Click target slightly expanded to ensure reliability */}
      <div 
        className="absolute z-50 cursor-pointer rounded-full" 
        style={{ 
          background: 'rgba(0,0,0,0.01)', 
          pointerEvents: 'auto',
          width: '200px',
          height: '150px',
          top: '15%',
          left: '20%',
          transform: 'none'
        }} 
        onClick={handleCharacterClick}
      />
      
      <div
        id={CONTAINER_ID}
        className="w-full h-full relative pointer-events-none"
        style={{ background: 'transparent' }}
      >
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <div className="w-8 h-8 border-4 border-[#d7cab3]/30 border-t-[#d7cab3] rounded-full animate-spin" />
        </div>
      </div>
    </div>
  );
};
