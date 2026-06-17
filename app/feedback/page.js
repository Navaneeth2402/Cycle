'use client';

import styles from "./feedback.module.css"; 
import { useState, useEffect } from 'react';


export default function FeedbackPage() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });


  // Fetch all feedbacks
  const fetchFeedbacks = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api');
      // Using fetch() - primary method
      const data = await response.json();
     
      // Axios alternative (commented for reference):
      // const response = await axios.get('/api/feedback');
      // const data = response.data;
     
      if (response.ok) {
        setFeedbacks(data.feedbacks || []);
      } else {
        console.error('Error fetching feedbacks:', data.error);
        alert('Failed to load feedbacks');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to load feedbacks');
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchFeedbacks();
  }, []);


  // Handle form input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  // Submit new feedback
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }


    try {
      setSubmitting(true);
      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      // Using fetch() - primary method
      const data = await response.json();
     
      // Axios alternative (commented for reference):
      // const response = await axios.post('/api/feedback', formData);
      // const data = response.data;
     
      if (response.ok) {
        alert('Feedback submitted successfully!');
        setFormData({ name: '', email: '', message: '' });
        fetchFeedbacks(); // Refresh the list
      } else {
        alert('Failed to submit feedback: ' + (data.error || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit feedback');
    } finally {
      setSubmitting(false);
    }
  };


  // Start editing
  const handleEdit = (feedback) => {
    setEditingId(feedback._id);
    setFormData({
      name: feedback.name,
      email: feedback.email,
      message: feedback.message,
    });
    // Scroll to form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  // Cancel editing
  const handleCancelEdit = () => {
    setEditingId(null);
    setFormData({ name: '', email: '', message: '' });
  };


  // Update feedback
  const handleUpdate = async (e) => {
    e.preventDefault();
   
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }


    try {
      setSubmitting(true);
      const response = await fetch(`/api/${editingId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      // Using fetch() - primary method
      const data = await response.json();
     
      // Axios alternative (commented for reference):
      // const response = await axios.put(`/api/feedback/${editingId}`, formData);
      // const data = response.data;
     
      if (response.ok) {
        alert('Feedback updated successfully!');
        setEditingId(null);
        setFormData({ name: '', email: '', message: '' });
        fetchFeedbacks(); // Refresh the list
      } else {
        alert('Failed to update feedback: ' + (data.error || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to update feedback');
    } finally {
      setSubmitting(false);
    }
  };


  // Delete feedback
  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this feedback?')) {
      return;
    }


    try {
      const response = await fetch(`/api/${id}`, {
        method: 'DELETE',
      });
      // Using fetch() - primary method
      const data = await response.json();
     
      // Axios alternative (commented for reference):
      // const response = await axios.delete(`/api/feedback/${id}`);
      // const data = response.data;
     
      if (response.ok) {
        alert('Feedback deleted successfully!');
        fetchFeedbacks(); // Refresh the list
      } else {
        alert('Failed to delete feedback: ' + (data.error || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to delete feedback');
    }
  };


 return (
  <div className={styles.page}>
    <h1 className={styles.title}>Feedback System</h1>

    <div className={styles.formWrapper}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h3>
            {editingId
              ? "✏️ Edit Feedback"
              : "➕ Submit New Feedback"}
          </h3>
        </div>

        <div className={styles.cardBody}>
          <form onSubmit={editingId ? handleUpdate : handleSubmit}>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>
                Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
                placeholder="Enter your feedback"
                required
              />
            </div>

            <div className={styles.buttonGroup}>
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={submitting}
              >
                {submitting
                  ? "Processing..."
                  : editingId
                  ? "Update Feedback"
                  : "Submit Feedback"}
              </button>

              {editingId && (
                <button
                  type="button"
                  className={styles.cancelBtn}
                  onClick={handleCancelEdit}
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>

    <div className={styles.tableCard}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h3>📋 All Feedbacks</h3>
        </div>

        <div className={styles.cardBody}>
          {loading ? (
            <div className={styles.loading}>
              Loading feedbacks...
            </div>
          ) : feedbacks.length === 0 ? (
            <div className={styles.empty}>
              No feedbacks yet. Be the first to submit one!
            </div>
          ) : (
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                    <th>Created At</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {feedbacks.map((feedback, index) => (
                    <tr key={feedback._id}>
                      <td>{index + 1}</td>
                      <td>{feedback.name}</td>
                      <td>{feedback.email}</td>

                      <td>
                        <div
                          className={styles.message}
                          title={feedback.message}
                        >
                          {feedback.message}
                        </div>
                      </td>

                      <td>
                        {new Date(
                          feedback.createdAt
                        ).toLocaleString()}
                      </td>

                      <td>
                        <div className={styles.actionButtons}>
                          <button
                            className={styles.editBtn}
                            onClick={() =>
                              handleEdit(feedback)
                            }
                          >
                            Edit
                          </button>

                          <button
                            className={styles.deleteBtn}
                            onClick={() =>
                              handleDelete(feedback._id)
                            }
                          >
                             Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);
}
