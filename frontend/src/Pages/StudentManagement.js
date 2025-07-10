import React, { useState, useEffect } from "react";
import "./PageStyles.css";

const StudentManagement = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Sample student data
  useEffect(() => {
    const sampleStudents = [
      {
        id: 1,
        name: "John Doe",
        email: "john.doe@email.com",
        phone: "+1 234 567 8900",
        course: "Computer Science",
        status: "active",
        enrollmentDate: "2024-01-15",
        feeStatus: "paid",
        avatar: "JD",
      },
      {
        id: 2,
        name: "Sarah Johnson",
        email: "sarah.j@email.com",
        phone: "+1 234 567 8901",
        course: "Business Administration",
        status: "active",
        enrollmentDate: "2024-02-20",
        feeStatus: "pending",
        avatar: "SJ",
      },
      {
        id: 3,
        name: "Michael Chen",
        email: "michael.chen@email.com",
        phone: "+1 234 567 8902",
        course: "Engineering",
        status: "inactive",
        enrollmentDate: "2023-09-10",
        feeStatus: "overdue",
        avatar: "MC",
      },
      {
        id: 4,
        name: "Emily Rodriguez",
        email: "emily.r@email.com",
        phone: "+1 234 567 8903",
        course: "Psychology",
        status: "active",
        enrollmentDate: "2024-03-05",
        feeStatus: "paid",
        avatar: "ER",
      },
      {
        id: 5,
        name: "David Wilson",
        email: "david.wilson@email.com",
        phone: "+1 234 567 8904",
        course: "Mathematics",
        status: "active",
        enrollmentDate: "2024-01-30",
        feeStatus: "paid",
        avatar: "DW",
      },
    ];
    setStudents(sampleStudents);
  }, []);

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.course.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterStatus === "all" || student.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const handleAddStudent = () => {
    setIsAddModalOpen(true);
  };

  const handleViewStudent = (student) => {
    setSelectedStudent(student);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "#10b981";
      case "inactive":
        return "#6b7280";
      case "suspended":
        return "#ef4444";
      default:
        return "#6b7280";
    }
  };

  const getFeeStatusColor = (feeStatus) => {
    switch (feeStatus) {
      case "paid":
        return "#10b981";
      case "pending":
        return "#f59e0b";
      case "overdue":
        return "#ef4444";
      default:
        return "#6b7280";
    }
  };

  return (
    <div className="page-container">
      {/* Page Header */}
      <div className="page-header">
        <div className="header-content">
          <div className="header-title">
            <h1>👥 Student Management</h1>
            <p>Manage student records, enrollment, and academic information</p>
          </div>
          <button className="primary-button" onClick={handleAddStudent}>
            + Add New Student
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: "#dbeafe" }}>
            <span style={{ color: "#3b82f6" }}>👥</span>
          </div>
          <div className="stat-info">
            <h3>{students.length}</h3>
            <p>Total Students</p>
            <span className="stat-trend positive">+5% this month</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: "#d1fae5" }}>
            <span style={{ color: "#10b981" }}>✅</span>
          </div>
          <div className="stat-info">
            <h3>{students.filter((s) => s.status === "active").length}</h3>
            <p>Active Students</p>
            <span className="stat-trend positive">96% active rate</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: "#fef3c7" }}>
            <span style={{ color: "#f59e0b" }}>⏳</span>
          </div>
          <div className="stat-info">
            <h3>{students.filter((s) => s.feeStatus === "pending").length}</h3>
            <p>Pending Fees</p>
            <span className="stat-trend neutral">Requires attention</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: "#fee2e2" }}>
            <span style={{ color: "#ef4444" }}>⚠️</span>
          </div>
          <div className="stat-info">
            <h3>{students.filter((s) => s.feeStatus === "overdue").length}</h3>
            <p>Overdue Payments</p>
            <span className="stat-trend negative">Critical</span>
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
                placeholder="Search students by name, email, or course..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          </div>
          <div className="filter-controls">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="filter-select"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="suspended">Suspended</option>
            </select>
            <button className="secondary-button">📊 Export Data</button>
          </div>
        </div>

        {/* Students Table */}
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Student</th>
                <th>Contact</th>
                <th>Course</th>
                <th>Enrollment Date</th>
                <th>Status</th>
                <th>Fee Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id} className="table-row">
                  <td>
                    <div className="student-info">
                      <div
                        className="avatar"
                        style={{ backgroundColor: "#3b82f6" }}
                      >
                        {student.avatar}
                      </div>
                      <div>
                        <div className="student-name">{student.name}</div>
                        <div className="student-id">
                          ID: {student.id.toString().padStart(4, "0")}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="contact-info">
                      <div>{student.email}</div>
                      <div className="phone">{student.phone}</div>
                    </div>
                  </td>
                  <td>
                    <span className="course-badge">{student.course}</span>
                  </td>
                  <td>
                    {new Date(student.enrollmentDate).toLocaleDateString()}
                  </td>
                  <td>
                    <span
                      className="status-badge"
                      style={{
                        backgroundColor: `${getStatusColor(student.status)}20`,
                        color: getStatusColor(student.status),
                      }}
                    >
                      {student.status.charAt(0).toUpperCase() +
                        student.status.slice(1)}
                    </span>
                  </td>
                  <td>
                    <span
                      className="status-badge"
                      style={{
                        backgroundColor: `${getFeeStatusColor(
                          student.feeStatus
                        )}20`,
                        color: getFeeStatusColor(student.feeStatus),
                      }}
                    >
                      {student.feeStatus.charAt(0).toUpperCase() +
                        student.feeStatus.slice(1)}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button
                        className="action-button view"
                        onClick={() => handleViewStudent(student)}
                        title="View Details"
                      >
                        👁️
                      </button>
                      <button
                        className="action-button edit"
                        title="Edit Student"
                      >
                        ✏️
                      </button>
                      <button
                        className="action-button delete"
                        title="Delete Student"
                      >
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredStudents.length === 0 && (
          <div className="empty-state">
            <div className="empty-icon">🔍</div>
            <h3>No students found</h3>
            <p>Try adjusting your search criteria or add a new student.</p>
          </div>
        )}
      </div>

      {/* Add Student Modal */}
      {isAddModalOpen && (
        <div className="modal-overlay" onClick={() => setIsAddModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Add New Student</h2>
              <button
                className="close-button"
                onClick={() => setIsAddModalOpen(false)}
              >
                ✕
              </button>
            </div>
            <div className="modal-body">
              <form className="student-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      placeholder="Enter student's full name"
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="Enter email address" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="Enter phone number" />
                  </div>
                  <div className="form-group">
                    <label>Course</label>
                    <select>
                      <option value="">Select a course</option>
                      <option value="Computer Science">Computer Science</option>
                      <option value="Business Administration">
                        Business Administration
                      </option>
                      <option value="Engineering">Engineering</option>
                      <option value="Psychology">Psychology</option>
                      <option value="Mathematics">Mathematics</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Enrollment Date</label>
                    <input type="date" />
                  </div>
                  <div className="form-group">
                    <label>Initial Status</label>
                    <select>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
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
              <button className="primary-button">Add Student</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentManagement;
