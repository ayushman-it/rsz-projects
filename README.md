# 🔧 Repair Service Zone

Repair Service Zone is a full-stack web application designed to simplify appliance repair services with a structured booking, ticketing, and admin management system.

---

## 🚀 Core Features

### 👤 User Module

Users can:

- Sign in using:
  - Google Authentication
  - Manual Registration (Email & Password)

- Browse services:
  - AC Repair
  - Refrigerator Repair
  - Washing Machine
  - TV
  - Microwave
  - Cooler & other electronics

---

## 🛠️ Service Booking Flow

1. User selects a service (e.g., Refrigerator not working)
2. User fills booking form:
   - Issue description  
   - Upload image(s)  
   - Phone number  
   - Address  
3. System generates a **Service Ticket**
4. Ticket is stored in database
5. Ticket appears in **Admin Dashboard**

---

## 🎫 Ticket Management System

Each ticket includes:

- Ticket ID  
- User details  
- Service type  
- Issue description  
- Uploaded images  
- Address & contact info  
- Status  
- Assigned agent  
- Priority level  

---

## 🧑‍💼 Admin Dashboard

### 🔹 Manage Tickets

- View all service requests  
- Update ticket status:
  - Pending  
  - Ongoing  
  - Completed  
  - Not Fixable  
- Set priority:
  - Low / Medium / High  
- Assign service agents  

---

### 🔹 Agent Management

- Add / Remove / Update agents  
- Assign agents to tickets  
- Track agent performance  

---

### 🔹 Service Management

Admin can:

- Add new services  
- Edit/remove services  
- Add:
  - Service name  
  - Description  
  - Image  
  - Supported brands  
- (No price required initially)

---

## 💰 Billing & Revenue

- Admin can:
  - Accept service charges from users  
  - Generate bills  
  - Track payments  

- Dashboard shows:
  - Total revenue  
  - Sales analytics  
  - Completed services  
  - Pending payments  

---

## 🗄️ Database Structure (High-Level)

Key tables:

- Users  
- Services  
- Tickets  
- Ticket_Images  
- Agents  
- Assignments  
- Payments / Revenue  

---

## ⚙️ Project Structure

```text
Repair Service Zone/
|- frontend/   # React + Tailwind client application
|- backend/    # PHP API (REST architecture)