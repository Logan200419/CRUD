import React, { useState, useEffect } from "react";
import "./PageStyles.css";

const Accounts = () => {
  const [accounts, setAccounts] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedPeriod, setSelectedPeriod] = useState("month");

  // Sample financial data
  useEffect(() => {
    const sampleAccounts = [
      {
        id: 1,
        studentName: "John Doe",
        studentId: "STU001",
        course: "Computer Science",
        totalFee: 1200,
        paidAmount: 1200,
        outstandingAmount: 0,
        status: "paid",
        lastPayment: "2024-01-15",
        dueDate: "2024-01-31",
      },
      {
        id: 2,
        studentName: "Sarah Johnson",
        studentId: "STU002",
        course: "Business Administration",
        totalFee: 1500,
        paidAmount: 750,
        outstandingAmount: 750,
        status: "pending",
        lastPayment: "2024-02-01",
        dueDate: "2024-03-15",
      },
      {
        id: 3,
        studentName: "Michael Chen",
        studentId: "STU003",
        course: "Engineering",
        totalFee: 1800,
        paidAmount: 600,
        outstandingAmount: 1200,
        status: "overdue",
        lastPayment: "2024-01-10",
        dueDate: "2024-02-28",
      },
      {
        id: 4,
        studentName: "Emily Rodriguez",
        studentId: "STU004",
        course: "Psychology",
        totalFee: 900,
        paidAmount: 900,
        outstandingAmount: 0,
        status: "paid",
        lastPayment: "2024-03-01",
        dueDate: "2024-03-31",
      },
      {
        id: 5,
        studentName: "David Wilson",
        studentId: "STU005",
        course: "Mathematics",
        totalFee: 1000,
        paidAmount: 500,
        outstandingAmount: 500,
        status: "pending",
        lastPayment: "2024-02-15",
        dueDate: "2024-04-01",
      },
    ];

    const sampleTransactions = [
      {
        id: 1,
        date: "2024-03-10",
        studentName: "John Doe",
        amount: 600,
        type: "payment",
        method: "Credit Card",
        status: "completed",
        description: "Semester Fee Payment",
      },
      {
        id: 2,
        date: "2024-03-08",
        studentName: "Sarah Johnson",
        amount: 750,
        type: "payment",
        method: "Bank Transfer",
        status: "completed",
        description: "Partial Payment",
      },
      {
        id: 3,
        date: "2024-03-05",
        studentName: "Emily Rodriguez",
        amount: 450,
        type: "payment",
        method: "Cash",
        status: "completed",
        description: "Final Payment",
      },
      {
        id: 4,
        date: "2024-03-03",
        studentName: "David Wilson",
        amount: 25,
        type: "refund",
        method: "Bank Transfer",
        status: "pending",
        description: "Lab Fee Refund",
      },
      {
        id: 5,
        date: "2024-03-01",
        studentName: "Michael Chen",
        amount: 1200,
        type: "fee",
        method: "Online",
        status: "pending",
        description: "Outstanding Fee Notice",
      },
    ];

    setAccounts(sampleAccounts);
    setTransactions(sampleTransactions);
  }, []);

  const filteredAccounts = accounts.filter((account) => {
    const matchesSearch =
      account.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      account.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      account.course.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterStatus === "all" || account.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    switch (status) {
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

  const getTransactionTypeIcon = (type) => {
    switch (type) {
      case "payment":
        return "💳";
      case "refund":
        return "💰";
      case "fee":
        return "📋";
      default:
        return "💸";
    }
  };

  const totalRevenue = accounts.reduce((sum, acc) => sum + acc.paidAmount, 0);
  const totalOutstanding = accounts.reduce(
    (sum, acc) => sum + acc.outstandingAmount,
    0
  );
  const paidAccounts = accounts.filter((acc) => acc.status === "paid").length;
  const overdueAccounts = accounts.filter(
    (acc) => acc.status === "overdue"
  ).length;

  return (
    <div className="page-container">
      {/* Page Header */}
      <div className="page-header">
        <div className="header-content">
          <div className="header-title">
            <h1>💰 Accounts & Finance</h1>
            <p>Manage student fees, payments, and financial records</p>
          </div>
          <div className="header-actions">
            <button className="secondary-button">📊 Generate Report</button>
            <button className="primary-button">💳 Record Payment</button>
          </div>
        </div>
      </div>

      {/* Financial Overview */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: "#d1fae5" }}>
            <span style={{ color: "#10b981" }}>💰</span>
          </div>
          <div className="stat-info">
            <h3>${totalRevenue.toLocaleString()}</h3>
            <p>Total Revenue</p>
            <span className="stat-trend positive">+8% this month</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: "#fee2e2" }}>
            <span style={{ color: "#ef4444" }}>⚠️</span>
          </div>
          <div className="stat-info">
            <h3>${totalOutstanding.toLocaleString()}</h3>
            <p>Outstanding Amount</p>
            <span className="stat-trend negative">Requires attention</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: "#dbeafe" }}>
            <span style={{ color: "#3b82f6" }}>✅</span>
          </div>
          <div className="stat-info">
            <h3>{paidAccounts}</h3>
            <p>Paid Accounts</p>
            <span className="stat-trend positive">
              {Math.round((paidAccounts / accounts.length) * 100)}% completion
            </span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: "#fef3c7" }}>
            <span style={{ color: "#f59e0b" }}>🔔</span>
          </div>
          <div className="stat-info">
            <h3>{overdueAccounts}</h3>
            <p>Overdue Accounts</p>
            <span className="stat-trend negative">Immediate action needed</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="content-grid">
        {/* Accounts Section */}
        <div className="content-card">
          <div className="card-header">
            <h2>Student Accounts</h2>
            <div className="filter-section compact">
              <div className="search-input-wrapper">
                <span className="search-icon">🔍</span>
                <input
                  type="text"
                  placeholder="Search accounts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="filter-select"
              >
                <option value="all">All Status</option>
                <option value="paid">Paid</option>
                <option value="pending">Pending</option>
                <option value="overdue">Overdue</option>
              </select>
            </div>
          </div>

          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Student</th>
                  <th>Course</th>
                  <th>Total Fee</th>
                  <th>Paid</th>
                  <th>Outstanding</th>
                  <th>Status</th>
                  <th>Due Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredAccounts.map((account) => (
                  <tr key={account.id} className="table-row">
                    <td>
                      <div className="student-info">
                        <div>
                          <div className="student-name">
                            {account.studentName}
                          </div>
                          <div className="student-id">{account.studentId}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="course-badge">{account.course}</span>
                    </td>
                    <td className="amount">${account.totalFee}</td>
                    <td className="amount paid">${account.paidAmount}</td>
                    <td className="amount outstanding">
                      ${account.outstandingAmount}
                    </td>
                    <td>
                      <span
                        className="status-badge"
                        style={{
                          backgroundColor: `${getStatusColor(
                            account.status
                          )}20`,
                          color: getStatusColor(account.status),
                        }}
                      >
                        {account.status.charAt(0).toUpperCase() +
                          account.status.slice(1)}
                      </span>
                    </td>
                    <td>{new Date(account.dueDate).toLocaleDateString()}</td>
                    <td>
                      <div className="action-buttons">
                        <button
                          className="action-button view"
                          title="View Details"
                        >
                          👁️
                        </button>
                        <button
                          className="action-button payment"
                          title="Record Payment"
                        >
                          💳
                        </button>
                        <button
                          className="action-button send"
                          title="Send Reminder"
                        >
                          📧
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="content-card">
          <div className="card-header">
            <h2>Recent Transactions</h2>
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="filter-select"
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
            </select>
          </div>

          <div className="transactions-list">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="transaction-item">
                <div className="transaction-icon">
                  {getTransactionTypeIcon(transaction.type)}
                </div>
                <div className="transaction-details">
                  <div className="transaction-main">
                    <span className="transaction-student">
                      {transaction.studentName}
                    </span>
                    <span className="transaction-description">
                      {transaction.description}
                    </span>
                  </div>
                  <div className="transaction-meta">
                    <span className="transaction-method">
                      {transaction.method}
                    </span>
                    <span className="transaction-date">
                      {new Date(transaction.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div className="transaction-amount">
                  <span
                    className={`amount ${
                      transaction.type === "refund" ? "negative" : "positive"
                    }`}
                  >
                    {transaction.type === "refund" ? "-" : "+"}$
                    {transaction.amount}
                  </span>
                  <span
                    className="transaction-status"
                    style={{
                      color:
                        transaction.status === "completed"
                          ? "#10b981"
                          : "#f59e0b",
                    }}
                  >
                    {transaction.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="card-footer">
            <button className="secondary-button full-width">
              View All Transactions
            </button>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="content-card">
        <h3>Quick Actions</h3>
        <div className="quick-actions-grid">
          <button className="quick-action-card">
            <div className="action-icon">📊</div>
            <div className="action-info">
              <h4>Financial Report</h4>
              <p>Generate comprehensive financial reports</p>
            </div>
          </button>
          <button className="quick-action-card">
            <div className="action-icon">📧</div>
            <div className="action-info">
              <h4>Send Reminders</h4>
              <p>Send payment reminders to students</p>
            </div>
          </button>
          <button className="quick-action-card">
            <div className="action-icon">💳</div>
            <div className="action-info">
              <h4>Bulk Payment</h4>
              <p>Process multiple payments at once</p>
            </div>
          </button>
          <button className="quick-action-card">
            <div className="action-icon">📈</div>
            <div className="action-info">
              <h4>Revenue Analytics</h4>
              <p>View detailed revenue analytics</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
