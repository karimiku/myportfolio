import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, ExternalLink } from 'lucide-react'
import type { Project } from '../types'
import { techIcons } from '../utils/techIcons'

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 cursor-pointer"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-slate-800 border border-slate-700 max-w-4xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar shadow-2xl">
              {/* Header */}
              <div className="sticky top-0 bg-slate-800 border-b border-slate-700 p-6 flex items-center justify-between">
                <h2 className="text-3xl font-light text-slate-100">
                  {project.title}
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-slate-700 transition-colors text-slate-100"
                  aria-label="閉じる"
                >
                  <X size={24} />
                </button>
              </div>

                    {/* Content */}
                    <div className="p-8 space-y-8">
                      {/* Links - Moved to top */}
                      {(project.frontendUrl || project.backendUrl || project.liveUrl) && (
                        <div className="pb-6 border-b border-slate-700">
                          <h3 className="text-sm font-light text-slate-400 mb-4 uppercase tracking-wider">Links</h3>
                          <div className="flex items-center gap-4 flex-wrap">
                            {project.backendUrl && project.backendUrl !== '#' && (
                              <a
                                href={project.backendUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 border border-slate-600 rounded-lg text-slate-100 transition-colors"
                              >
                                <Github size={18} />
                                <span className="text-sm font-light">Backend (GitHub)</span>
                                <ExternalLink size={14} className="opacity-70" />
                              </a>
                            )}
                            {project.frontendUrl && project.frontendUrl !== '#' && (
                              <a
                                href={project.frontendUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 border border-slate-600 rounded-lg text-slate-100 transition-colors"
                              >
                                <Github size={18} />
                                <span className="text-sm font-light">Frontend (GitHub)</span>
                                <ExternalLink size={14} className="opacity-70" />
                              </a>
                            )}
                            {project.liveUrl && project.liveUrl !== '#' && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 border border-blue-500 rounded-lg text-white transition-colors"
                              >
                                <ExternalLink size={18} />
                                <span className="text-sm font-light">Site</span>
                              </a>
                            )}
                            {project.githubUrl && project.githubUrl !== '#' && !project.frontendUrl && !project.backendUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 border border-slate-600 rounded-lg text-slate-100 transition-colors"
                              >
                                <Github size={18} />
                                <span className="text-sm font-light">GitHub</span>
                                <ExternalLink size={14} className="opacity-70" />
                              </a>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Purpose */}
                      {project.purpose && (
                  <div>
                    <h3 className="text-lg font-light mb-4 text-slate-100 uppercase tracking-wider">
                      Purpose
                    </h3>
                    <p className="text-base font-light leading-relaxed text-slate-300">
                      {project.purpose}
                    </p>
                  </div>
                )}

                {/* Motivation */}
                {project.motivation && (
                  <div>
                    <h3 className="text-lg font-light mb-4 text-slate-100 uppercase tracking-wider">
                      Motivation
                    </h3>
                    <p className="text-base font-light leading-relaxed text-slate-300">
                      {project.motivation}
                    </p>
                  </div>
                )}

                {/* Screenshots */}
                {project.screenshots && project.screenshots.length > 0 && (
                  <div>
                    <h3 className="text-lg font-light mb-4 text-slate-100 uppercase tracking-wider">
                      Screenshots
                    </h3>
                    <div className="space-y-6">
                      {project.screenshots.map((screenshot, index) => (
                        <div key={index} className="border border-slate-700 overflow-hidden rounded-lg">
                          <img
                            src={screenshot}
                            alt={`${project.title} screenshot ${index + 1}`}
                            className="w-full h-auto"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Features */}
                {project.features && project.features.length > 0 && (
                  <div>
                    <h3 className="text-lg font-light mb-4 text-slate-100 uppercase tracking-wider">
                      Features
                    </h3>
                    <ul className="space-y-3">
                      {project.features.map((feature, index) => (
                        <li
                          key={index}
                          className="text-base font-light leading-relaxed text-slate-300 flex items-start gap-3"
                        >
                          <span className="text-slate-500 mt-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}


                {/* Private Notice */}
                {project.isPrivate && (
                  <div className="pt-4 border-t border-slate-700">
                    <p className="text-sm font-light text-slate-400 italic">
                      * このプロジェクトのコードは非公開です
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal

