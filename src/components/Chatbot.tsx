import React, { useState, useRef, useEffect } from 'react';
import { LOGO_URL } from '../data/mockData';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  actionType?: 'quote' | 'msds' | 'locations' | 'catalog';
}

interface ChatbotProps {
  onOpenQuote: (gasName?: string) => void;
  onOpenMsds: () => void;
  onOpenLocations: () => void;
  onOpenCatalog: () => void;
}

export const Chatbot: React.FC<ChatbotProps> = ({
  onOpenQuote,
  onOpenMsds,
  onOpenLocations,
  onOpenCatalog,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: `반갑습니다! (주)MS가스 공식 AI 기술상담원 **MS-Bot**입니다. ⚗️\n\n1974년 창립 이래 50년간 축적된 산업·의료·특수가스 인프라와 초저온 엔지니어링 노하우를 바탕으로 신속하고 정확하게 안내해 드리겠습니다.\n\n궁금하신 가스 품목, 순도 규격, 탱크로리 배차 또는 기술 서비스를 편하게 질문해 주세요!`,
      time: '지금',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    '초고순도 질소(6N) 규격 문의',
    '대용량 탱크로리 배차 및 견적',
    '병원용 의료용 가스(KGMP)',
    '조선소 후판 절단용 프라멕스',
    '가스 퍼징 및 안전진단(HAZOP)',
    '전국 8개 거점 및 비상출동',
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isLoading) return;

    const userMsg: Message = {
      id: 'user-' + Date.now(),
      sender: 'user',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: text }),
      });

      if (!response.ok) {
        throw new Error('API Response was not ok');
      }

      const data = await response.json();
      const replyText = data.reply || '답변을 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.';

      // Determine if an action button is appropriate
      let actionType: Message['actionType'] = undefined;
      const lowerReply = replyText.toLowerCase();
      if (lowerReply.includes('견적') || lowerReply.includes('상담')) {
        actionType = 'quote';
      } else if (lowerReply.includes('msds') || lowerReply.includes('성적서')) {
        actionType = 'msds';
      } else if (lowerReply.includes('거점') || lowerReply.includes('본사') || lowerReply.includes('위치')) {
        actionType = 'locations';
      }

      const botMsg: Message = {
        id: 'bot-' + Date.now(),
        sender: 'bot',
        text: replyText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actionType,
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error('Chat error:', err);
      const fallbackMsg: Message = {
        id: 'bot-' + Date.now(),
        sender: 'bot',
        text: `문의해 주신 내용에 대해 안내드립니다. 보다 신속하고 구체적인 공정 사양(가스종, 순도, 월간 예상량) 검토는 본사 기술영업팀(051-831-6100) 또는 페이지 하단 [간편 견적 상담]을 이용하시면 24시간 내 배차 담당자가 직접 연락드립니다.`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actionType: 'quote',
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: 'welcome-reset',
        sender: 'bot',
        text: '대화 내용이 초기화되었습니다. 추가로 궁금하신 가스 엔지니어링 사항이 있으시면 언제든 질문해 주세요!',
        time: '지금',
      },
    ]);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
        {!isOpen && (
          <div className="mb-2 mr-1 px-3 py-1.5 rounded-full bg-[#01284b] text-[#56f9f9] text-xs font-bold shadow-lg border border-[#04a8ff]/30 animate-bounce flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#04a8ff] animate-ping"></span>
            <span>24시 AI 기술상담원 온라인</span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 cursor-pointer ${
            isOpen
              ? 'bg-[#01284b] hover:bg-[#006399] rotate-90'
              : 'bg-gradient-to-r from-[#04a8ff] to-[#006399] hover:scale-105 hover:shadow-[#04a8ff]/50'
          }`}
          aria-label="Toggle Chatbot"
        >
          {isOpen ? (
            <span className="material-symbols-outlined text-[28px]">close</span>
          ) : (
            <span className="material-symbols-outlined text-[28px]">smart_toy</span>
          )}
        </button>
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[95vw] sm:w-[420px] h-[600px] max-h-[80vh] bg-white rounded-3xl shadow-2xl border border-[#dee8ff] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="px-5 py-4 bg-[#01284b] text-white flex items-center justify-between border-b border-[#1e3e62]">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center shadow-sm">
                  <img src={LOGO_URL} alt="MS Gas" className="h-6 w-auto object-contain" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#01284b]"></span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-sm sm:text-base tracking-tight">
                    MS-Bot
                  </span>
                  <span className="px-1.5 py-0.2 rounded bg-[#04a8ff]/30 text-[#56f9f9] text-[10px] font-tech font-bold uppercase">
                    AI Tech
                  </span>
                </div>
                <span className="text-[11px] text-[#aac9f4] font-medium leading-none mt-0.5">
                  (주)MS가스 전담 기술상담원
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={clearChat}
                title="대화 내용 비우기"
                className="p-1.5 text-[#aac9f4] hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">refresh</span>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="창 닫기"
                className="p-1.5 text-[#aac9f4] hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">expand_more</span>
              </button>
            </div>
          </div>

          {/* Quick Questions Marquee / Buttons */}
          <div className="px-4 py-2.5 bg-[#F8FAFC] border-b border-[#e2e8f0] overflow-x-auto flex gap-1.5 scrollbar-none shrink-0">
            {quickQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(q)}
                disabled={isLoading}
                className="px-2.5 py-1 rounded-full bg-white border border-[#c3c6cf]/60 hover:border-[#04a8ff] hover:text-[#006399] text-[11px] text-[#43474e] font-medium whitespace-nowrap transition-all shadow-2xs cursor-pointer disabled:opacity-50"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-[#f9f9ff]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed whitespace-pre-line shadow-2xs ${
                    msg.sender === 'user'
                      ? 'bg-[#006399] text-white rounded-tr-xs'
                      : 'bg-white text-[#0e1c2f] border border-[#e2e8f0] rounded-tl-xs'
                  }`}
                >
                  {msg.text}

                  {/* Contextual Action Buttons */}
                  {msg.actionType === 'quote' && (
                    <div className="mt-3 pt-2.5 border-t border-[#dee8ff] flex flex-wrap gap-1.5">
                      <button
                        onClick={() => {
                          setIsOpen(false);
                          onOpenQuote();
                        }}
                        className="px-3 py-1.5 rounded-lg bg-[#04a8ff] hover:bg-[#006399] text-white font-bold text-xs inline-flex items-center gap-1 shadow-sm transition-colors cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[14px]">
                          support_agent
                        </span>
                        <span>간편 견적 상담 신청하기</span>
                      </button>
                    </div>
                  )}

                  {msg.actionType === 'msds' && (
                    <div className="mt-3 pt-2.5 border-t border-[#dee8ff] flex flex-wrap gap-1.5">
                      <button
                        onClick={() => {
                          setIsOpen(false);
                          onOpenMsds();
                        }}
                        className="px-3 py-1.5 rounded-lg bg-[#1e3e62] hover:bg-[#01284b] text-white font-bold text-xs inline-flex items-center gap-1 shadow-sm transition-colors cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[14px]">
                          description
                        </span>
                        <span>MSDS 검색센터 열기</span>
                      </button>
                    </div>
                  )}

                  {msg.actionType === 'locations' && (
                    <div className="mt-3 pt-2.5 border-t border-[#dee8ff] flex flex-wrap gap-1.5">
                      <button
                        onClick={() => {
                          setIsOpen(false);
                          onOpenLocations();
                        }}
                        className="px-3 py-1.5 rounded-lg bg-[#01284b] hover:bg-[#006399] text-white font-bold text-xs inline-flex items-center gap-1 shadow-sm transition-colors cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[14px]">
                          location_on
                        </span>
                        <span>전국 사업장 위치 확인</span>
                      </button>
                    </div>
                  )}
                </div>
                <span className="text-[10px] text-[#73777f] font-tech mt-1 px-1">
                  {msg.time}
                </span>
              </div>
            ))}

            {isLoading && (
              <div className="flex items-start gap-2">
                <div className="bg-white border border-[#e2e8f0] px-4 py-3 rounded-2xl rounded-tl-xs shadow-2xs flex items-center gap-2 text-xs text-[#006399]">
                  <span className="w-2 h-2 rounded-full bg-[#04a8ff] animate-ping"></span>
                  <span className="font-tech font-semibold">
                    MS-Bot 기술데이터 조회 및 답변 생성 중...
                  </span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Bar */}
          <div className="p-3 bg-white border-t border-[#e2e8f0]">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="가스 품목, 순도, 배차, 기술 서비스 등을 질문하세요..."
                disabled={isLoading}
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#c3c6cf]/60 text-xs sm:text-sm focus:outline-none focus:border-[#04a8ff] focus:ring-2 focus:ring-[#04a8ff]/20 transition-all"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={isLoading || !inputValue.trim()}
                className="w-10 h-10 rounded-xl bg-[#04a8ff] hover:bg-[#006399] disabled:opacity-40 text-white flex items-center justify-center transition-colors cursor-pointer shadow-sm shrink-0"
                aria-label="Send Message"
              >
                <span className="material-symbols-outlined text-[20px]">send</span>
              </button>
            </div>
            <div className="flex items-center justify-between text-[10px] text-[#73777f] font-tech pt-2 px-1">
              <span>(주)MS가스 기술영업본부 24시간 연동</span>
              <a href="tel:051-831-6100" className="text-[#006399] font-bold hover:underline">
                대표전화: 051-831-6100
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
