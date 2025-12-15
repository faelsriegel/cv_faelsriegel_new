"use client";

import { certificates } from "@/lib/data";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import Image from "next/image";
import { SectionTitle } from "../ui/section-title";
import { useLanguage } from "../providers/language-provider";

export function Certificates() {
  const { t } = useLanguage();
  const mainCertificate = certificates.find((c) => c.isMain);
  const middleCertificates = certificates.filter((c) => !c.isMain && c.id !== 6);
  const apdadosCertificate = certificates.find((c) => c.id === 6);

  return (
    <section id="certificates" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title={t.sections.certificates} />

        <div className="max-w-6xl mx-auto">
          {/* Main Certificate - Linha 1 (1 card) */}
          {mainCertificate && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <a
                href={mainCertificate.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block glass-card rounded-2xl p-8 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  {/* Badge Image */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 relative rounded-2xl overflow-hidden">
                      <Image
                        src={mainCertificate.image}
                        alt={t.certificates.main.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                      <h3 className="text-2xl font-bold text-theme transition-colors">
                        {t.certificates.main.name}
                      </h3>
                      <ExternalLink className="w-5 h-5 text-theme-subtle transition-colors" />
                    </div>

                    <p className="text-theme-muted mb-4">
                      {t.certificates.main.description}
                    </p>

                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      {(t.certificates.main.skills || mainCertificate.skills).map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 glass-badge text-theme-muted text-xs font-medium rounded-xl"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          )}

          {/* Middle Certificates - Linha 2 (4 cards) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {middleCertificates.map((cert, index) => {
              const translatedModule = t.certificates.modules[index];
              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block h-full glass-card rounded-2xl p-5 transition-all duration-300"
                  >
                    <div className="flex flex-col items-center text-center h-full">
                      {/* Badge - centralizado no topo */}
                      <div className="w-20 h-20 relative rounded-xl overflow-hidden mb-4 group-hover:scale-110 transition-transform duration-300">
                        {cert.image.startsWith("http") || cert.image.startsWith("/") ? (
                          <Image
                            src={cert.image}
                            alt={translatedModule?.name || cert.name}
                            fill
                            className="object-contain"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <Award className="w-10 h-10 text-theme" />
                          </div>
                        )}
                      </div>

                      {/* Content - centralizado */}
                      <h4 className="font-semibold text-theme text-sm mb-3 line-clamp-2 flex-1 flex items-center">
                        {translatedModule?.name || cert.name}
                      </h4>

                      <div className="flex flex-wrap gap-1.5 justify-center">
                        {(translatedModule?.skills || cert.skills).slice(0, 2).map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 glass-badge text-theme-muted text-[10px] font-medium rounded-lg"
                          >
                            {skill}
                          </span>
                        ))}
                        {(translatedModule?.skills || cert.skills).length > 2 && (
                          <span className="px-2 py-0.5 glass-badge text-theme-muted text-[10px] font-medium rounded-lg">
                            +{(translatedModule?.skills || cert.skills).length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                  </a>
                </motion.div>
              );
            })}
          </div>

          {/* APDADOS Certificate - Linha 3 (1 card) */}
          {apdadosCertificate && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href={apdadosCertificate.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block glass-card rounded-2xl p-8 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  {/* Badge Image */}
                  <div className="flex-shrink-0">
                    <div className="w-56 h-56 relative rounded-2xl overflow-hidden">
                      <Image
                        src={apdadosCertificate.image}
                        alt={t.certificates.member.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                      <h3 className="text-2xl font-bold text-theme transition-colors">
                        {t.certificates.member.name}
                      </h3>
                      <ExternalLink className="w-5 h-5 text-theme-subtle transition-colors" />
                    </div>

                    <p className="text-theme-muted mb-4">
                      {t.certificates.member.description}
                    </p>

                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      {(t.certificates.member.skills || apdadosCertificate.skills).slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 glass-badge text-theme-muted text-xs font-medium rounded-xl"
                        >
                          {skill}
                        </span>
                      ))}
                      {(t.certificates.member.skills || apdadosCertificate.skills).length > 3 && (
                        <span className="px-3 py-1 glass-badge text-theme-muted text-xs font-medium rounded-xl">
                          +{(t.certificates.member.skills || apdadosCertificate.skills).length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
