"use client";

import { motion, AnimatePresence } from "framer-motion";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  const downloadOptions = [
    {
      id: "arm64",
      title: "Modern Android",
      description: "For most modern Android phones (64-bit)",
      filename: "newslyy-app-arm64.apk",
      tag: "Recommended",
    },
    {
      id: "arm32",
      title: "Older Android",
      description: "For old 32-bit Android phones",
      filename: "newslyy-app-arm32.apk",
    },
    {
      id: "x86",
      title: "Emulator / PC",
      description: "For emulators & some Intel devices",
      filename: "newslyy-app-x86.apk",
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100]"
          />
          <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-[101] px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-gray-900 border border-white/10 rounded-3xl w-full max-w-lg p-6 md:p-8 shadow-2xl relative pointer-events-auto"
            >
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-gray-500 hover:text-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Choose Download Version
                </h2>
                <p className="text-gray-400">
                  Select the appropriate APK for your device architecture.
                </p>
              </div>

              <div className="space-y-4">
                {downloadOptions.map((option) => (
                  <a
                    key={option.id}
                    href={`/downloads/${option.filename}`}
                    download
                    onClick={onClose}
                    className="group block p-4 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-newslyy-yellow/50 transition relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-newslyy-yellow/0 via-newslyy-yellow/5 to-newslyy-yellow/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full"></div>
                    <div className="relative z-10 flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-white font-bold text-lg">
                            {option.title}
                          </h3>
                          {option.tag && (
                            <span className="bg-newslyy-yellow text-black text-xs font-bold px-2 py-0.5 rounded-full">
                              {option.tag}
                            </span>
                          )}
                        </div>
                        <p className="text-gray-400 text-sm">
                          {option.description}
                        </p>
                        <p className="text-gray-500 text-xs mt-2 font-mono">
                          {option.filename}
                        </p>
                      </div>
                      <div className="text-newslyy-yellow opacity-0 group-hover:opacity-100 transition transform translate-x-4 group-hover:translate-x-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
