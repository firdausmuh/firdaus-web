import { useParams } from "react-router-dom";
import "./ProjectDetail.css";

function ProjectDetail() {
  const { id } = useParams();

  // Add your project data here (you can move this to a separate data file later)
  const projects = [
    {
      id: 1,
      title: "Sistem Dashboard Talent Management",
      description:
        "Sistem dashboard talent management adalah alat atau platform yang digunakan oleh HRD dan manajemen untuk memantau dan mengelola bakat dalam perusahaan. Platform ini mengintegrasikan beberapa elemen kunci seperti rekrutmen, manajemen kinerja, perencanaan suksesi, pembelajaran dan pengembangan, serta manajemen kompensasi.",
      technologies: ["C++", "Power BI", "Python", "SQL", "R", "Tableau"],
      features: ["Pelaporan", "Manajemenr Kinerja", "Keterlibatan Talenta", "Pembelajaran dan Pengembangan", "Talent Management", "Talent Pipeline"],
      image: "/src/assets/projects/mintira.jpg",
      demoLink: "#",
      githubLink: "#",
    },
    // Add other projects...
  ];

  const project = projects.find((p) => p.id === parseInt(id));

  return (
    <div className="project-detail-page">
      <div className="project-detail-content">
        <div className="project-header">
          <img src={project.image} alt={project.title} />
          <h1>{project.title}</h1>
        </div>

        <div className="project-info">
          <div className="description">
            <h2>Project Description</h2>
            <p>{project.description}</p>
          </div>

          <div className="technologies">
            <h2>Technologies Used</h2>
            <div className="tech-tags">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="features">
            <h2>Key Features</h2>
            <ul>
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="project-links">
            <a href={project.demoLink} className="demo-link" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
            <a href={project.githubLink} className="github-link" target="_blank" rel="noopener noreferrer">
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
