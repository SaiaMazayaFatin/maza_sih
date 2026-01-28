import { useState } from 'react'

const JourneyContent = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const timeline = [
    {
      period: 'Sep 2025 - Jan 2026',
      title: 'Backend Developer (Internship)',
      company: 'Sekolah Tinggi Teknologi Wastukancana',
      location: 'Purwakarta, Indonesia · Hybrid',
      description: 'Worked as a backend developer intern supporting application development and system integration for internal academic systems.',
      details: null,
    },
    {
      period: 'Jun 2025 - Oct 2025',
      title: 'AI Specialist (Contract)',
      company: 'Arnatech',
      location: 'South Jakarta, Indonesia · Hybrid',
      description: 'Led the end-to-end planning of a production-ready RAG system, covering technical strategy, system architecture, data pipelines, and infrastructure.',
      details: [
        'Defined the RAG target architecture (ingestion → preprocessing → embeddings/indexing → retrieval & reranking → generation)',
        'Researched and selected LLMs for ingestion and indexing preprocessing',
        'Designed data-type–specific preprocessing strategies',
        'Determined the retrieval stack (embedding models, rerankers, and LLM APIs)',
        'Produced high-level LLM/API cost estimates',
        'Recommended AWS-based infrastructure aligned with client requirements',
        'Coordinated AI Squad planning and priorities',
      ],
    },
    {
      period: 'Feb 2025 - Jul 2025',
      title: 'Machine Learning Cohort',
      company: 'Coding Camp powered by DBS Foundation',
      location: 'Remote',
      description: 'Completed an intensive machine learning program with a focus on production-oriented ML systems.',
      details: ['Large Language Models (LLMs)', 'MLOps fundamentals'],
    },
    {
      period: 'Sep 2024 - Jan 2025',
      title: 'Machine Learning Cohort',
      company: 'Bangkit Academy (Google, Tokopedia, Gojek, Traveloka)',
      location: 'Remote',
      description: 'Completed a competitive machine learning program covering both theory and applied AI.',
      details: ['Machine Learning & Deep Learning', 'Natural Language Processing (NLP)', 'Computer Vision', 'Data Analysis & Visualization', 'TensorFlow & PyTorch'],
    },
    {
      period: 'Oct 2024 - Dec 2024',
      title: 'Machine Learning Engineer (Apprenticeship)',
      company: 'Solafune, Inc.',
      location: 'Remote',
      description: 'Led a cross-functional team to deliver an end-to-end satellite image segmentation system for land-cover analysis.',
      details: [
        'Led a cross-functional team (ML, Frontend, Cloud) and delivered the project on schedule',
        'Preprocessed 12-band Sentinel-2 satellite imagery for a Togo (Africa) dataset',
        'Designed and evaluated deep learning models using PyTorch and TensorFlow',
        'Selected U-Net architecture with ResNet-50 backbone, achieving 89% accuracy',
        'Deployed the final model to a web platform for real-time evaluation',
      ],
    },
    {
      period: 'Jan 2023 - Feb 2023',
      title: 'Data Scientist (Annotator)',
      company: 'PukulEnam',
      location: 'Contract · Remote',
      description: 'Contributed to medical imaging research by creating high-quality semantic segmentation ground truth data.',
      details: [
        'Created semantic segmentation masks using Label Studio',
        'Supported research on chest X-ray anatomical structure segmentation using U-Net',
      ],
    },
  ]

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      <p className="text-white/60 text-lg">// professional experience</p>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-3 top-0 bottom-0 w-px bg-white/20" />

        <div className="space-y-4">
          {timeline.map((item, index) => (
            <div key={index} className="relative flex gap-4 group">
              {/* Dot */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-6 h-6 border border-white/40 flex items-center justify-center bg-black group-hover:border-red-500 transition-colors">
                  <div className="w-2 h-2 bg-red-500" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pb-2">
                <button
                  onClick={() => item.details && toggleExpand(index)}
                  className="w-full text-left"
                >
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-red-500 text-sm tracking-wider">[{item.period}]</span>
                  </div>
                  <h4 className="text-white tracking-wider group-hover:text-red-500 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-white/60 text-sm">{item.company}</p>
                  <p className="text-white/40 text-xs">{item.location}</p>
                  <p className="text-white/50 text-sm mt-2">{item.description}</p>
                  
                  {item.details && (
                    <span className="text-red-500/60 text-xs mt-1 inline-block">
                      {expandedIndex === index ? '▼ hide details' : '▶ show details'}
                    </span>
                  )}
                </button>

                {/* Expanded details */}
                {item.details && expandedIndex === index && (
                  <ul className="mt-2 space-y-1 border-l border-red-500/30 pl-3">
                    {item.details.map((detail, i) => (
                      <li key={i} className="text-white/50 text-xs">
                        › {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default JourneyContent
