const TechStackContent = () => {
  const techCategories = [
    {
      category: 'MACHINE LEARNING & DEEP LEARNING',
      items: [
        { name: 'PyTorch', url: 'https://pytorch.org/' },
        { name: 'TensorFlow', url: 'https://www.tensorflow.org/' },
        { name: 'Scikit-learn', url: 'https://scikit-learn.org/' },
        { name: 'Hugging Face Transformers', url: 'https://huggingface.co/transformers/' },
      ],
    },
    {
      category: 'LLM & NLP SYSTEMS',
      items: [
        { name: 'LangChain', url: 'https://www.langchain.com/' },
        { name: 'LangGraph', url: 'https://langchain-ai.github.io/langgraph/' },
        { name: 'LlamaIndex', url: 'https://www.llamaindex.ai/' },
        { name: 'Hugging Face Ecosystem', url: 'https://huggingface.co/' },
      ],
    },
    {
      category: 'DATA PROCESSING & PIPELINES',
      items: [
        { name: 'NumPy', url: 'https://numpy.org/' },
        { name: 'Pandas', url: 'https://pandas.pydata.org/' },
        { name: 'Prefect', url: 'https://www.prefect.io/' },
      ],
    },
    {
      category: 'MLOPS & DEPLOYMENT',
      items: [
        { name: 'Docker', url: 'https://www.docker.com/' },
        { name: 'MLflow', url: 'https://mlflow.org/' },
        { name: 'Kubernetes', url: 'https://kubernetes.io/' },
        { name: 'TorchServe', url: 'https://pytorch.org/serve/' },
        { name: 'GitHub Actions', url: 'https://github.com/features/actions' },
      ],
    },
    {
      category: 'VECTOR DATABASES',
      items: [
        { name: 'FAISS', url: 'https://faiss.ai/' },
        { name: 'Qdrant', url: 'https://qdrant.tech/' },
      ],
    },
    {
      category: 'RELATIONAL & GRAPH DATABASES',
      items: [
        { name: 'PostgreSQL', url: 'https://www.postgresql.org/' },
        { name: 'MySQL', url: 'https://www.mysql.com/' },
        { name: 'Neo4j', url: 'https://neo4j.com/' },
      ],
    },
    {
      category: 'CLOUD & INFRASTRUCTURE',
      items: [
        { name: 'AWS', url: 'https://aws.amazon.com/' },
        { name: 'Google Cloud Platform', url: 'https://cloud.google.com/' },
      ],
    },
    {
      category: 'PROGRAMMING LANGUAGES',
      items: [
        { name: 'Python', url: 'https://www.python.org/' },
        { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
        { name: 'Go', url: 'https://go.dev/' },
        { name: 'C++', url: 'https://isocpp.org/' },
      ],
    },
    {
      category: 'COMPUTER VISION',
      items: [
        { name: 'OpenCV', url: 'https://opencv.org/' },
        { name: 'Torchvision', url: 'https://pytorch.org/vision/' },
        { name: 'timm', url: 'https://huggingface.co/docs/timm/' },
        { name: 'Detectron2', url: 'https://github.com/facebookresearch/detectron2' },
        { name: 'Ultralytics YOLO', url: 'https://ultralytics.com/' },
      ],
    },
    {
      category: 'BACKEND',
      items: [
        { name: 'Fiber', url: 'https://gofiber.io/' },
        { name: 'Hapi', url: 'https://hapi.dev/' },
        { name: 'Express', url: 'https://expressjs.com/' },
      ],
    },
  ]

  return (
    <div className="space-y-5">
      <p className="text-white/60 text-lg">// technologies & tools</p>

      {techCategories.map((category) => (
        <div key={category.category}>
          <h3 className="text-red-500 text-sm tracking-widest mb-2">■ {category.category}</h3>
          <div className="flex flex-wrap gap-2">
            {category.items.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 border border-white/30 text-white/80 text-sm hover:border-red-500 hover:text-red-500 transition-colors"
              >
                {item.name} ↗
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default TechStackContent
