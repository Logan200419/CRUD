import React, { useState, useEffect } from "react";
import "./PageStyles.css";

const CourseManagement = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Sample course data
  useEffect(() => {
    const sampleCourses = [
      {
        id: 1,
        name: "Computer Science Fundamentals",
        code: "CS101",
        category: "Technology",
        instructor: "Dr. Sarah Wilson",
        duration: "12 weeks",
        students: 45,
        maxStudents: 50,
        status: "active",
        startDate: "2024-01-15",
        endDate: "2024-04-15",
        fee: 1200,
        description:
          "Introduction to computer science concepts and programming fundamentals.",
      },
      {
        id: 2,
        name: "Business Administration",
        code: "BA201",
        category: "Business",
        instructor: "Prof. Michael Johnson",
        duration: "16 weeks",
        students: 32,
        maxStudents: 40,
        status: "active",
        startDate: "2024-02-01",
        endDate: "2024-05-30",
        fee: 1500,
        description:
          "Comprehensive business administration and management principles.",
      },
      {
        id: 3,
        name: "Advanced Engineering Mathematics",
        code: "ENG301",
        category: "Engineering",
        instructor: "Dr. Robert Chen",
        duration: "14 weeks",
        students: 28,
        maxStudents: 35,
        status: "active",
        startDate: "2024-01-20",
        endDate: "2024-05-10",
        fee: 1800,
        description:
          "Advanced mathematical concepts for engineering applications.",
      },
      {
        id: 4,
        name: "Introduction to Psychology",
        code: "PSY101",
        category: "Social Sciences",
        instructor: "Dr. Emily Rodriguez",
        duration: "10 weeks",
        students: 55,
        maxStudents: 60,
        status: "active",
        startDate: "2024-03-01",
        endDate: "2024-05-15",
        fee: 900,
        description:
          "Basic principles and theories of psychology and human behavior.",
      },
      {
        id: 5,
        name: "Data Analytics Bootcamp",
        code: "DA401",
        category: "Technology",
        instructor: "Prof. David Kim",
        duration: "8 weeks",
        students: 20,
        maxStudents: 25,
        status: "upcoming",
        startDate: "2024-04-01",
        endDate: "2024-05-30",
        fee: 2200,
        description:
          "Intensive data analytics training with hands-on projects.",
      },
    ];
    setCourses(sampleCourses);
  }, []);

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterCategory === "all" || course.category === filterCategory;
    return matchesSearch && matchesFilter;
  });

  const handleAddCourse = () => {
    setIsAddModalOpen(true);
  };

  const handleViewCourse = (course) => {
    setSelectedCourse(course);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "#10b981";
      case "upcoming":
        return "#3b82f6";
      case "completed":
        return "#6b7280";
      case "cancelled":
        return "#ef4444";
      default:
        return "#6b7280";
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Technology":
        return "💻";
      case "Business":
        return "💼";
      case "Engineering":
        return "⚙️";
      case "Social Sciences":
        return "🧠";
      case "Mathematics":
        return "📊";
      default:
        return "📚";
    }
  };

  const getEnrollmentPercentage = (current, max) => {
    return Math.round((current / max) * 100);
  };

  return (
    <div className="page-container">
      {/* Page Header */}
      <div className="page-header">
        <div className="header-content">
          <div className="header-title">
            <h1>📚 Course Management</h1>
            <p>Manage courses, schedules, and enrollment</p>
          </div>
          <button className="primary-button" onClick={handleAddCourse}>
            + Add New Course
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: "#dbeafe" }}>
            <span style={{ color: "#3b82f6" }}>📚</span>
          </div>
          <div className="stat-info">
            <h3>{courses.length}</h3>
            <p>Total Courses</p>
            <span className="stat-trend positive">+2 this semester</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: "#d1fae5" }}>
            <span style={{ color: "#10b981" }}>🎯</span>
          </div>
          <div className="stat-info">
            <h3>{courses.filter((c) => c.status === "active").length}</h3>
            <p>Active Courses</p>
            <span className="stat-trend positive">Running smoothly</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: "#f0f9ff" }}>
            <span style={{ color: "#3b82f6" }}>⏰</span>
          </div>
          <div className="stat-info">
            <h3>{courses.filter((c) => c.status === "upcoming").length}</h3>
            <p>Upcoming Courses</p>
            <span className="stat-trend neutral">Starting soon</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: "#fef3c7" }}>
            <span style={{ color: "#f59e0b" }}>👥</span>
          </div>
          <div className="stat-info">
            <h3>{courses.reduce((sum, c) => sum + c.students, 0)}</h3>
            <p>Total Enrolled</p>
            <span className="stat-trend positive">85% capacity</span>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="content-card">
        <div className="filter-section">
          <div className="search-container">
            <div className="search-input-wrapper">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search courses by name, code, or instructor..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          </div>
          <div className="filter-controls">
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="filter-select"
            >
              <option value="all">All Categories</option>
              <option value="Technology">Technology</option>
              <option value="Business">Business</option>
              <option value="Engineering">Engineering</option>
              <option value="Social Sciences">Social Sciences</option>
              <option value="Mathematics">Mathematics</option>
            </select>
            <button className="secondary-button">📋 Course Catalog</button>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="courses-grid">
          {filteredCourses.map((course) => (
            <div key={course.id} className="course-card">
              <div className="course-header">
                <div className="course-category">
                  <span className="category-icon">
                    {getCategoryIcon(course.category)}
                  </span>
                  <span className="category-name">{course.category}</span>
                </div>
                <span
                  className="status-badge"
                  style={{
                    backgroundColor: `${getStatusColor(course.status)}20`,
                    color: getStatusColor(course.status),
                  }}
                >
                  {course.status.charAt(0).toUpperCase() +
                    course.status.slice(1)}
                </span>
              </div>

              <div className="course-content">
                <h3 className="course-title">{course.name}</h3>
                <p className="course-code">{course.code}</p>
                <p className="course-description">{course.description}</p>

                <div className="course-details">
                  <div className="detail-item">
                    <span className="detail-icon">👨‍🏫</span>
                    <span>{course.instructor}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">⏱️</span>
                    <span>{course.duration}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">💰</span>
                    <span>${course.fee}</span>
                  </div>
                </div>

                <div className="enrollment-progress">
                  <div className="enrollment-header">
                    <span>Enrollment</span>
                    <span>
                      {course.students}/{course.maxStudents}
                    </span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{
                        width: `${getEnrollmentPercentage(
                          course.students,
                          course.maxStudents
                        )}%`,
                        backgroundColor:
                          getEnrollmentPercentage(
                            course.students,
                            course.maxStudents
                          ) > 90
                            ? "#ef4444"
                            : getEnrollmentPercentage(
                                course.students,
                                course.maxStudents
                              ) > 70
                            ? "#f59e0b"
                            : "#10b981",
                      }}
                    />
                  </div>
                  <span className="enrollment-percentage">
                    {getEnrollmentPercentage(
                      course.students,
                      course.maxStudents
                    )}
                    % full
                  </span>
                </div>
              </div>

              <div className="course-footer">
                <div className="course-dates">
                  <small>
                    {new Date(course.startDate).toLocaleDateString()} -{" "}
                    {new Date(course.endDate).toLocaleDateString()}
                  </small>
                </div>
                <div className="course-actions">
                  <button
                    className="action-button view"
                    onClick={() => handleViewCourse(course)}
                    title="View Details"
                  >
                    👁️
                  </button>
                  <button className="action-button edit" title="Edit Course">
                    ✏️
                  </button>
                  <button
                    className="action-button students"
                    title="Manage Students"
                  >
                    👥
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="empty-state">
            <div className="empty-icon">📚</div>
            <h3>No courses found</h3>
            <p>Try adjusting your search criteria or add a new course.</p>
          </div>
        )}
      </div>

      {/* Add Course Modal */}
      {isAddModalOpen && (
        <div className="modal-overlay" onClick={() => setIsAddModalOpen(false)}>
          <div
            className="modal-content large"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2>Add New Course</h2>
              <button
                className="close-button"
                onClick={() => setIsAddModalOpen(false)}
              >
                ✕
              </button>
            </div>
            <div className="modal-body">
              <form className="course-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Course Name</label>
                    <input type="text" placeholder="Enter course name" />
                  </div>
                  <div className="form-group">
                    <label>Course Code</label>
                    <input
                      type="text"
                      placeholder="Enter course code (e.g., CS101)"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Category</label>
                    <select>
                      <option value="">Select a category</option>
                      <option value="Technology">Technology</option>
                      <option value="Business">Business</option>
                      <option value="Engineering">Engineering</option>
                      <option value="Social Sciences">Social Sciences</option>
                      <option value="Mathematics">Mathematics</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Instructor</label>
                    <input type="text" placeholder="Enter instructor name" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Duration</label>
                    <input
                      type="text"
                      placeholder="Enter duration (e.g., 12 weeks)"
                    />
                  </div>
                  <div className="form-group">
                    <label>Course Fee</label>
                    <input type="number" placeholder="Enter course fee" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Start Date</label>
                    <input type="date" />
                  </div>
                  <div className="form-group">
                    <label>End Date</label>
                    <input type="date" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Maximum Students</label>
                    <input
                      type="number"
                      placeholder="Enter maximum number of students"
                    />
                  </div>
                  <div className="form-group">
                    <label>Status</label>
                    <select>
                      <option value="upcoming">Upcoming</option>
                      <option value="active">Active</option>
                    </select>
                  </div>
                </div>
                <div className="form-group full-width">
                  <label>Description</label>
                  <textarea
                    rows="3"
                    placeholder="Enter course description"
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                className="secondary-button"
                onClick={() => setIsAddModalOpen(false)}
              >
                Cancel
              </button>
              <button className="primary-button">Add Course</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseManagement;
