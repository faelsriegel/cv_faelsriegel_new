"use client";

import { certificates, sectionTitles } from "@/lib/data";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import Image from "next/image";
import { SectionTitle } from "../ui/section-title";

export function Certificates() {
  const mainCertificate = certificates.find((c) => c.isMain);
  const subCertificates = certificates.filter((c) => !c.isMain);

  return (
    <section id="certificates" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title={sectionTitles.certificates} />

        <div className="max-w-6xl mx-auto">
          {/* Main Certificate */}
          {mainCertificate && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <a
                href={mainCertificate.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block glass-card rounded-2xl p-8 hover:border-[var(--primary)]/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  {/* Badge Image */}
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 relative rounded-2xl overflow-hidden glass-badge p-2">
                      <Image
                        src={mainCertificate.image}
                        alt={mainCertificate.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                      <h3 className="text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors">
                        {mainCertificate.name}
                      </h3>
                      <ExternalLink className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--primary)] transition-colors" />
                    </div>

                    <p className="text-[var(--text-secondary)] mb-4">
                      {mainCertificate.description}
                    </p>

                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      {mainCertificate.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 glass-badge text-[var(--primary)] text-xs font-medium rounded-full"
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

          {/* Sub Certificates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subCertificates.map((cert, index) => (
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
                  className="group block h-full glass-card rounded-2xl p-6 hover:border-[var(--primary)]/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    {/* Badge */}
                    <div className="flex-shrink-0 w-16 h-16 relative rounded-xl overflow-hidden glass-badge p-1">
                      {cert.image.startsWith("http") ? (
                        <Image
                          src={cert.image}
                          alt={cert.name}
                          fill
                          className="object-contain"
                        />
                      ) : cert.image.startsWith("/") ? (
                        <Image
                          src={cert.image}
                          alt={cert.name}
                          fill
                          className="object-contain"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-lg">
                          <Award className="w-8 h-8 text-white" />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors text-sm mb-2 line-clamp-2">
                        {cert.name}
                      </h4>

                      {cert.description && (
                        <p className="text-xs text-[var(--text-muted)] mb-2">
                          {cert.description}
                        </p>
                      )}

                      <div className="flex flex-wrap gap-1">
                        {cert.skills.slice(0, 3).map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 glass-badge text-[var(--text-secondary)] text-[10px] font-medium rounded"
                          >
                            {skill}
                          </span>
                        ))}
                        {cert.skills.length > 3 && (
                          <span className="px-2 py-0.5 glass-badge text-[var(--text-secondary)] text-[10px] font-medium rounded">
                            +{cert.skills.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
