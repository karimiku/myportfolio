import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import type { Project } from "../types";
import ProjectModal from "./ProjectModal";
import { techIcons } from "../utils/techIcons";

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      title: "Smart Stay Platform",
      description:
        "Go、gRPC、Cloud Pub/Sub を用いた、スマートヴィラ予約プラットフォーム。マイクロサービスアーキテクチャ、BFF パターン、Cloud Run 上でのイベント駆動設計を採用しています。",
      image: "/smarthome.png",
      tags: ["Go", "gRPC", "GCP"],
      liveUrl: "https://smart-stay-dusky.vercel.app/",
      githubUrl: "https://github.com/karimiku/smart-stay-platform",
      featured: true,
      purpose: "Go、gRPC、Cloud Pub/Sub を用いた、スマートヴィラ予約プラットフォーム。マイクロサービスアーキテクチャ、BFF パターン、Cloud Run 上でのイベント駆動設計を採用しています。",
      motivation: "学習のためです。gRPCやマイクロサービスなど、そういうのを意識して作ってみたという感じです。",
      features: [
        "マイクロサービスアーキテクチャ: API Gateway (BFF)、Auth Service、Reservation Service、Key Service の4つの独立したサービス",
        "通信戦略: 同期通信 (gRPC) と非同期通信 (Cloud Pub/Sub) を組み合わせたイベント駆動設計",
        "BFF パターン: API Gateway が複数のサービスを Goroutine で並行呼び出しし、応答時間を短縮",
        "イベント駆動型の鍵生成: 予約作成時に Pub/Sub イベントを発行し、Key Service が購読して鍵を自動生成",
        "認証・認可: JWT トークンによる認証、Cookie ベースの認証もサポート",
        "分散トランザクション: Saga パターンによる予約フローの制御"
      ],
      techStack: {
        runtime: ["Go"],
        framework: ["gRPC", "Protobuf"],
        infrastructure: ["GCP", "Cloud Run", "Cloud Pub/Sub", "PostgreSQL"]
      },
      screenshots: ["/smarthome.png"],
      frontendUrl: "https://github.com/karimiku/smart-stay-platform-frontend",
      backendUrl: "https://github.com/karimiku/smart-stay-platform"
    },
    {
      title: "todo - Terminal-First Todo CLI",
      description:
        "ターミナルから即登録 → 順番厳守で片付けする超軽量 Todo。順序厳守で完了は常に先頭のみ、日付や締切なしで「今やる順番」だけに集中できる。",
      image: "/todocli.png",
      tags: ["Go"],
      liveUrl: "#",
      githubUrl: "https://github.com/karimiku/todo_cli",
      featured: true,
      purpose: "ターミナルから即登録 → 順番厳守で片付けする超軽量 Todo。順序厳守で完了は常に先頭のみ、日付や締切なしで「今やる順番」だけに集中できる。",
      motivation: "ターミナルを日常的に使っている中で、思いついた瞬間にタスクを管理したいと思いました。既存のTodoアプリは起動や操作が面倒で、1つのタスクに集中したいという思いがありました。そこで、メニューバーに今やるべき1つのタスクだけを表示できるCLIツールを作ることにしました。",
      features: [
        "順序厳守: 完了は常に先頭のみ",
        "シンプル: 日付や締切なし、「今やる順番」だけに集中",
        "ローカル完結: オフラインで動作、外部送信なし",
        "高速: 起動〜完了まで体感 < 300ms",
        "メニューバー表示: SwiftBar/xbar と連携して「今やるべき 1 件」を常時表示"
      ],
      techStack: {
        runtime: ["Go"]
      },
      screenshots: ["/todocli.png"]
    },
    {
      title: "Room IoT Kit",
      description:
        "IoT デバイス（湿度・温度センサー付き ESP32）から Go API にセンサーデータを定期送信し、SwiftUI アプリでリアルタイムにモニタリングする IoT Edge-Cloud システムです。",
      image: "/iot.JPG",
      tags: ["Go", "SwiftUI", "GCP"],
      liveUrl: "#",
      githubUrl: "https://github.com/karimiku/room-iot-kit",
      featured: true,
      purpose: "IoT デバイス（湿度・温度センサー付き ESP32）から Go API にセンサーデータを定期送信し、SwiftUI アプリでリアルタイムにモニタリングする IoT Edge-Cloud システムです。",
      features: [
        "Edge Device (ESP32): DHT22 センサーから湿度・温度データを取得し、60 秒ごとにサーバーへ送信",
        "Cloud Backend (Go): センサーデータを受信し、SSE でリアルタイム配信。湿度の閾値チェック（40%未満/60%超過でアラート）",
        "Client App (SwiftUI): iPad 用アプリでリアルタイムにセンサーデータを表示・管理",
        "API: POST /v1/humidity（センサーデータ送信）、GET /v1/devices（全デバイス一覧）、GET /v1/devices/:device_id/latest（最新データ取得）、GET /v1/devices/:device_id/stream（SSE ストリーム）"
      ],
      techStack: {
        runtime: ["Go"],
        framework: ["SwiftUI"],
        infrastructure: ["GCP"]
      },
      screenshots: ["/iot.JPG"]
    },
    {
      title: "LINE課題リマインドBot",
      description:
        "学生向けに授業前の「課題提出リマインド」を自動配信するLINE公式アカウント。データベースは使わず、Google Cloud Schedulerのジョブを「台帳」として利用します。",
      image: "/line.jpg",
      tags: ["Node.js", "TypeScript", "Hono", "GCP"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      isPrivate: true,
      purpose: "学生向けに授業前の「課題提出リマインド」を自動配信するLINE公式アカウント。データベースは使わず、Google Cloud Schedulerのジョブを「台帳」として利用します。",
      motivation: "週に2回同じ授業がある対開講が多く、課題の提出忘れが自分や友人によくありました。課題の通知が自動で来るわけでもなく、カレンダーに追加しても忘れてしまうことがありました。そこで、みんなで使っているLINEグループを活用し、前日の21時頃にリマインドを送ることにしました。この時間なら、次の日まで課題に取り組む時間もあり、早すぎて「まだ大丈夫」と思って後回しにすることもありません。この仕組みを導入した結果、友人も自分も提出忘れが大幅に減りました。",
      features: [
        "授業登録フロー（管理者のみ）: 1:1チャットで「授業登録」を開始し、授業名 → 通知曜日（複数選択可）→ 通知時刻をQuick Replyで選択。Cloud Schedulerジョブを自動生成・更新（Upsert）",
        "自動配信: 指定時刻にCloud Schedulerが/cron/announceを呼び出し、LINEグループに課題提出リマインドを自動投稿",
        "管理コマンド（管理者のみ）: /class list（登録済みジョブ一覧表示）、/class pause <classId>（一時停止）、/class resume <classId>（再開）、/class delete <classId>（削除）",
        "サイレントモード: グループ/複数人トークでは一切返信しない。1:1（管理者）ではコマンド/登録フローのみ応答"
      ],
      techStack: {
        runtime: ["Node.js", "TypeScript"],
        framework: ["Hono", "@line/bot-sdk", "@google-cloud/scheduler", "Zod", "dotenv"],
        testing: ["Vitest", "@vitest/ui", "@vitest/coverage-v8"],
        tools: ["ts-node", "ESLint", "Prettier", "Docker"],
        infrastructure: ["Google Cloud Run", "Google Cloud Scheduler", "ngrok"]
      },
      screenshots: ["/line.jpg"]
    },
    {
      title: "Slack Summary Bot",
      description:
        "Slackチャンネルの会話を自動で要約し、重要なポイントを抽出するBot。GCP Cloud FunctionsとSchedulerを使用して定期実行。",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg",
      tags: ["Node.js", "Docker", "GCP"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      purpose: "Slackチャンネルの会話を自動で要約し、重要なポイントを抽出するBot。GCP Cloud FunctionsとSchedulerを使用して定期実行。",
      features: [
        "Slackチャンネルの会話を自動で要約",
        "重要なポイントを抽出",
        "GCP Cloud FunctionsとSchedulerを使用して定期実行"
      ],
      techStack: {
        runtime: ["Node.js"],
        framework: ["Bun"],
        infrastructure: ["GCP Functions", "Docker"]
      }
    },
    {
      title: "Team Communication Tool",
      description:
        "チームメンバーに共通の質問を投げかけ、回答をSlack内で共有することで社内コミュニケーションを活性化するツール。",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg",
      tags: ["TypeScript", "GCP"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      purpose: "チームメンバーに共通の質問を投げかけ、回答をSlack内で共有することで社内コミュニケーションを活性化するツール。",
      features: [
        "チームメンバーに共通の質問を投げかけ",
        "回答をSlack内で共有",
        "社内コミュニケーションを活性化"
      ],
      techStack: {
        runtime: ["TypeScript"],
        framework: ["GAS", "Slack API"],
        tools: ["Automation"]
      }
    },
  ];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <section id="projects" className="py-32 relative elegant-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="section-title text-slate-100 mb-4">
              Projects
          </h2>
            <div className="w-16 h-px bg-slate-600 mt-6"></div>
        </motion.div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
                initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
                whileHover={{ y: -4 }}
                onClick={() => handleProjectClick(project)}
                className="luxury-card overflow-hidden group cursor-pointer"
            >
              {/* Project Image */}
                <div className={`relative overflow-hidden bg-slate-800 h-64 ${
                  project.image.startsWith('http') || project.image.endsWith('.svg')
                    ? 'flex items-center justify-center'
                    : ''
                }`}>
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                    className={
                      project.image.startsWith('http') || project.image.endsWith('.svg')
                        ? 'w-32 h-32 object-contain transition-transform duration-700 group-hover:scale-110'
                        : 'w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105'
                    }
                  />
                {project.featured && (
                    <div className="absolute top-6 left-6">
                      <span className="px-3 py-1 bg-blue-600 text-white text-xs font-light tracking-wider uppercase">
                      {project.title === "Smart Stay Platform" ? "In Development" : "Featured"}
                    </span>
                  </div>
                )}
                  {project.isPrivate && (
                    <div className="absolute top-6 right-6">
                      <span className="px-3 py-1 bg-slate-700 text-white text-xs font-light tracking-wider uppercase">
                        Private
                      </span>
                    </div>
                  )}
              </div>

              {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-light mb-4 text-slate-100">
                  {project.title}
                </h3>
                  <p className="text-base font-light leading-relaxed text-slate-300 mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => {
                      const icon = techIcons[tag]
                      return (
                    <span
                      key={tagIndex}
                          className="px-2 py-1.5 border border-slate-600 bg-slate-700 rounded flex items-center justify-center"
                        >
                          {icon && (
                            <img
                              src={icon}
                              alt={tag}
                              className="w-4 h-4 object-contain"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement
                                target.style.display = 'none'
                              }}
                            />
                          )}
                    </span>
                      )
                    })}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-sm font-light text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span>Site</span>
                      </a>
                    )}
                    {project.githubUrl && project.githubUrl !== '#' && !project.isPrivate && !project.frontendUrl && !project.backendUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-sm font-light text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <Github size={16} />
                        <span>GitHub</span>
                        <ExternalLink size={14} className="opacity-70" />
                      </a>
                    )}
                  </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default Projects;
