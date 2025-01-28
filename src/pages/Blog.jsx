import { useState } from "react";
import "./Blog.css";
import { FaSearch, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

function Blog() {
  const [searchQuery, setSearchQuery] = useState("");

  const blogPosts = [
    {
      id: 1,
      title: "Mengatasi Error PostgreSQL: 'Duplicate Key Value Violates Unique Constraint'",
      description: "Artikel ini membahas cara mengatasi error 'duplicate key value violates unique constraint' di Postgr...",
      category: "PostgreSQL",
      date: "September 19, 2024",
      image: "/src/assets/blog/golang.png",
    },
    {
      id: 2,
      title: "Cara Enkripsi AES 256 Menggunakan Java",
      description: "Cara mengenkripsi data menggunakan AES 256-bit di Java. Kode ini mencakup metode encrypt untuk menga...",
      category: "Java",
      date: "September 16, 2024",
      image: "/src/assets/blog/golang.png",
    },
    {
      id: 3,
      title: "Part 1 - ERD rancangan database [ Studi Kasus : API BOOKSTORE ]",
      description: "Belajar dasar pemrograman Golang dengan studi kasus sistem Toko Buku. Kita akan mulai dengan meranca...",
      category: "Golang",
      date: "September 16, 2024",
      image: "/src/assets/blog/golang.png",
    },
  ];

  return (
    <div className="blog-page">
      <div className="blog-header">
        <h1>My Tech Blog</h1>
        <p>Insights and tutorials on web development and backend technologies</p>

        <div className="categories">
          <span>Categories:</span>
          <a href="#laravel">Laravel</a>
          <a href="#php">PHP</a>
          <a href="#java">Java</a>
          <a href="#golang">Golang</a>
          <a href="#postgresql">PostgreSQL</a>
          <a href="#mysql">MySQL</a>
          <a href="#codeigniter">Codeigniter</a>
          <a href="#redis">Redis</a>
        </div>

        <div className="search-container">
          <input type="text" placeholder="Search posts..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          <button type="submit" className="search-button">
            Search
          </button>
        </div>
      </div>

      <div className="blog-grid">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <div className="blog-meta">
                <span>Posted on {post.date}</span>
              </div>
              <a href="#" className="read-more">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button className="prev-page">Previous</button>
        <span className="current-page">1</span>
        <button className="next-page">Next</button>
      </div>

      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-column">
            <h3>About Us</h3>
            <p>Thanks for visit my personal web</p>
            <p className="copyright">Copyright © 2025 All rights reserved | created by Laili Septiandi</p>
          </div>

          <div className="footer-column">
            <h3>Criticism and suggestions</h3>
            <div className="footer-form">
              <input type="email" placeholder="Enter Email" />
              <button type="submit">
                <span className="arrow-icon">→</span>
              </button>
            </div>
            <p>Please Comment</p>
          </div>

          <div className="footer-column">
            <h3>Follow Us</h3>
            <p>Let us be social</p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Blog;
